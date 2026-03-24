import { create } from 'zustand'

export type FontSize = 'normal' | 'large' | 'x-large'

interface AccessibilityState {
  reducedMotion: boolean
  highContrast: boolean
  fontSize: FontSize
  toggleHighContrast: () => void
  setFontSize: (size: FontSize) => void
  announce: (message: string) => void
  apply: () => void
}

function applyToDOM(highContrast: boolean, fontSize: FontSize, reducedMotion: boolean): void {
  const html = document.documentElement
  html.classList.toggle('high-contrast', highContrast)
  html.classList.remove('font-size-normal', 'font-size-large', 'font-size-x-large')
  html.classList.add('font-size-' + fontSize)
  html.classList.toggle('reduced-motion', reducedMotion)
}

function save(highContrast: boolean, fontSize: FontSize): void {
  localStorage.setItem(
    'accessibility',
    JSON.stringify({ highContrast, fontSize }),
  )
}

function announce(message: string): void {
  const region = document.getElementById('a11y-announcements')
  if (region) {
    region.textContent = ''
    requestAnimationFrame(() => {
      region.textContent = message
    })
  }
}

export const useAccessibilityStore = create<AccessibilityState>((set, get) => ({
  reducedMotion: false,
  highContrast: false,
  fontSize: 'normal' as FontSize,

  apply: () => {
    const { highContrast, fontSize, reducedMotion } = get()
    applyToDOM(highContrast, fontSize, reducedMotion)
  },

  announce,

  toggleHighContrast: () => {
    const { highContrast, fontSize, reducedMotion } = get()
    const next = !highContrast
    set({ highContrast: next })
    applyToDOM(next, fontSize, reducedMotion)
    save(next, fontSize)
    announce(
      next ? 'High contrast mode enabled' : 'High contrast mode disabled',
    )
  },

  setFontSize: (size: FontSize) => {
    if (['normal', 'large', 'x-large'].includes(size)) {
      const { highContrast, reducedMotion } = get()
      set({ fontSize: size })
      applyToDOM(highContrast, size, reducedMotion)
      save(highContrast, size)
      announce('Font size set to ' + size)
    }
  },
}))

/** Call once from main.tsx or root layout to initialize accessibility */
export function initAccessibility(): void {
  // Detect system reduced-motion preference
  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  const updates: Partial<AccessibilityState> = { reducedMotion }

  // Listen for reduced-motion changes
  window
    .matchMedia('(prefers-reduced-motion: reduce)')
    .addEventListener('change', (e: MediaQueryListEvent) => {
      const state = useAccessibilityStore.getState()
      useAccessibilityStore.setState({ reducedMotion: e.matches })
      applyToDOM(state.highContrast, state.fontSize, e.matches)
    })

  // Restore saved preferences from localStorage
  const saved = localStorage.getItem('accessibility')
  if (saved) {
    try {
      const parsed = JSON.parse(saved) as {
        highContrast?: boolean
        fontSize?: FontSize
      }
      if (parsed.highContrast !== undefined) {
        updates.highContrast = parsed.highContrast
      }
      if (
        parsed.fontSize !== undefined &&
        ['normal', 'large', 'x-large'].includes(parsed.fontSize)
      ) {
        updates.fontSize = parsed.fontSize
      }
    } catch {
      // Ignore malformed data
    }
  }

  useAccessibilityStore.setState(updates)

  // Apply initial state
  const state = useAccessibilityStore.getState()
  applyToDOM(state.highContrast, state.fontSize, state.reducedMotion)
}
