import { useState, useCallback, useEffect } from 'react'

export function useFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(!!document.fullscreenElement)

  useEffect(() => {
    const onFullscreenChange = (): void => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange)
    }
  }, [])

  const toggle = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
      setIsFullscreen(false)
    } else {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    }
  }, [])

  return {
    isFullscreen,
    toggle,
  }
}
