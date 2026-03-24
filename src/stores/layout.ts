import { create } from 'zustand'

interface LayoutState {
  loaded: boolean
}

export const useLayoutStore = create<LayoutState>(() => ({
  loaded: false,
}))

/** Call once from main.tsx or root layout to initialize layout behavior */
export function initLayout(): void {
  let resizeTimer: ReturnType<typeof setTimeout> | null = null

  // Hold transitions during resize to prevent visual glitches
  window.addEventListener('resize', () => {
    document.body.classList.add('hold-transition')
    if (resizeTimer !== null) {
      clearTimeout(resizeTimer)
    }
    resizeTimer = setTimeout(() => {
      document.body.classList.remove('hold-transition')
    }, 400)
  })

  // Mark app as loaded after initial delay
  setTimeout(() => {
    useLayoutStore.setState({ loaded: true })
    document.body.classList.add('app-loaded')
  }, 400)
}
