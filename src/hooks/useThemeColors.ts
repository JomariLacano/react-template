import { useMemo } from 'react'
import { useDarkModeStore } from '@/stores/darkMode'

export function useThemeColors() {
  const mode = useDarkModeStore((state) => state.mode)

  const isDark = useMemo(
    () =>
      mode === 'dark' ||
      (mode === 'auto' &&
        document.documentElement.classList.contains('dark')),
    [mode],
  )

  const gridColor = useMemo(
    () => (isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'),
    [isDark],
  )

  const labelColor = useMemo(
    () => (isDark ? '#e2e8f0' : '#6b7280'),
    [isDark],
  )

  const borderColor = useMemo(
    () => (isDark ? '#334155' : '#e5e7eb'),
    [isDark],
  )

  return {
    gridColor,
    labelColor,
    borderColor,
  }
}
