import { create } from 'zustand'

interface SidebarState {
  open: boolean
  mini: boolean
  breakpoint: number
  _wasMobile: boolean
  _userToggled: boolean
  expand: () => void
  collapse: () => void
  toggle: () => void
  close: () => void
  menusClose: () => void
}

export const useSidebarStore = create<SidebarState>((set, get) => ({
  open: true,
  mini: false,
  breakpoint: 992,
  _wasMobile: false,
  _userToggled: false,

  expand: () => {
    document.body.classList.remove('sidebar-collapse')
    document.body.classList.add('sidebar-open')
    set({ open: true })
  },

  collapse: () => {
    document.body.classList.remove('sidebar-open')
    document.body.classList.add('sidebar-collapse')
    set({ open: false })
  },

  toggle: () => {
    set({ _userToggled: true })
    if (document.body.classList.contains('sidebar-collapse')) {
      get().expand()
    } else {
      get().collapse()
    }
  },

  close: () => {
    document.body.classList.remove('sidebar-open')
    set({ open: false })
  },

  menusClose: () => {
    document.querySelectorAll('.nav-treeview').forEach((el) => {
      ;(el as HTMLElement).style.removeProperty('display')
      ;(el as HTMLElement).style.removeProperty('height')
    })
    document.querySelectorAll('.sidebar-menu .nav-item').forEach((el) => {
      el.classList.remove('menu-open')
    })
  },
}))

/** Call once from main.tsx or root layout to initialize sidebar */
export function initSidebar(): void {
  const { expand, collapse } = useSidebarStore.getState()

  // Detect mini sidebar
  const mini = document.body.classList.contains('sidebar-mini')
  useSidebarStore.setState({ mini })

  // Detect breakpoint from CSS ::before content
  const expandEl = document.querySelector('[class*="sidebar-expand"]')
  if (expandEl) {
    const content = getComputedStyle(expandEl, '::before').getPropertyValue(
      'content',
    )
    const bp = Number(content.replace(/[^\d.-]/g, ''))
    if (bp > 0) useSidebarStore.setState({ breakpoint: bp })
  }

  const breakpoint = useSidebarStore.getState().breakpoint
  const wasMobile = window.innerWidth <= breakpoint
  useSidebarStore.setState({ _wasMobile: wasMobile })

  // Apply initial state
  if (window.innerWidth <= breakpoint) {
    collapse()
  } else {
    if (mini && document.body.classList.contains('sidebar-collapse')) {
      // Keep collapsed if mini + already collapsed
    } else if (!mini) {
      expand()
    }
  }

  // Handle resize
  window.addEventListener('resize', () => {
    const state = useSidebarStore.getState()
    const isMobile = window.innerWidth <= state.breakpoint

    if (isMobile && !state._wasMobile) {
      useSidebarStore.setState({ _userToggled: false })
      state.collapse()
    } else if (!isMobile && state._wasMobile) {
      useSidebarStore.setState({ _userToggled: false })
      if (!state.mini) {
        state.expand()
      }
    }

    useSidebarStore.setState({ _wasMobile: isMobile })
  })
}
