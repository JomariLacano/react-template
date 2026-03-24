import { create } from 'zustand'

export type ThemeMode = 'light' | 'dark' | 'auto'

interface DarkModeState {
  mode: ThemeMode
  toggle: () => void
  setMode: (mode: ThemeMode) => void
  apply: () => void
}

export const useDarkModeStore = create<DarkModeState>((set, get) => ({
  mode: 'light',

  apply: () => {
    const { mode } = get()
    const isDark =
      mode === 'dark' ||
      (mode === 'auto' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList.toggle('dark', isDark)
  },

  toggle: () => {
    const modes: ThemeMode[] = ['light', 'dark', 'auto']
    const idx = modes.indexOf(get().mode)
    const next = modes[(idx + 1) % modes.length]
    localStorage.setItem('theme', next)
    set({ mode: next })
    // apply after state update
    const isDark =
      next === 'dark' ||
      (next === 'auto' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList.toggle('dark', isDark)
  },

  setMode: (newMode: ThemeMode) => {
    localStorage.setItem('theme', newMode)
    set({ mode: newMode })
    const isDark =
      newMode === 'dark' ||
      (newMode === 'auto' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList.toggle('dark', isDark)
  },
}))

/** Call once from main.tsx or root layout to initialize dark mode */
export function initDarkMode(): void {
  const store = useDarkModeStore.getState()

  // Read stored preference
  const stored = localStorage.getItem('theme') as ThemeMode | null
  if (stored && (['light', 'dark', 'auto'] as string[]).includes(stored)) {
    useDarkModeStore.setState({ mode: stored })
  }

  // Apply current mode
  useDarkModeStore.getState().apply()

  // Listen for system theme changes
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', () => {
      if (useDarkModeStore.getState().mode === 'auto') {
        useDarkModeStore.getState().apply()
      }
    })
}
