import { useState, useCallback, useEffect, type RefObject } from 'react'
import { slideUp, slideDown } from './useSlideToggle'

export interface CardWidgetOptions {
  initialCollapsed?: boolean
  animationSpeed?: number
}

export function useCardWidget(
  cardRef: RefObject<HTMLElement | null>,
  bodyRef: RefObject<HTMLElement | null>,
  footerRef: RefObject<HTMLElement | null>,
  options: CardWidgetOptions = {},
) {
  const [collapsed, setCollapsed] = useState(options.initialCollapsed ?? false)
  const [maximized, setMaximized] = useState(false)
  const animationSpeed = options.animationSpeed ?? 500

  const getTargets = useCallback((): HTMLElement[] => {
    const targets: HTMLElement[] = []
    if (bodyRef.current) targets.push(bodyRef.current)
    if (footerRef.current) targets.push(footerRef.current)
    return targets
  }, [bodyRef, footerRef])

  const collapseCard = useCallback(() => {
    const card = cardRef.current
    if (!card) return

    card.classList.add('collapsing-card')
    getTargets().forEach((el) => slideUp(el, animationSpeed))

    setTimeout(() => {
      card.classList.add('collapsed-card')
      card.classList.remove('collapsing-card')
      setCollapsed(true)
    }, animationSpeed)
  }, [cardRef, getTargets, animationSpeed])

  const expandCard = useCallback(() => {
    const card = cardRef.current
    if (!card) return

    card.classList.add('expanding-card')
    getTargets().forEach((el) => slideDown(el, animationSpeed))

    setTimeout(() => {
      card.classList.remove('collapsed-card', 'expanding-card')
      setCollapsed(false)
    }, animationSpeed)
  }, [cardRef, getTargets, animationSpeed])

  const toggleCollapse = useCallback(() => {
    const card = cardRef.current
    if (!card) return

    if (card.classList.contains('collapsed-card')) {
      expandCard()
    } else {
      collapseCard()
    }
  }, [cardRef, expandCard, collapseCard])

  const remove = useCallback(() => {
    const card = cardRef.current
    if (card) slideUp(card, animationSpeed)
  }, [cardRef, animationSpeed])

  const toggleMaximize = useCallback(() => {
    const card = cardRef.current
    if (!card) return

    if (card.classList.contains('maximized-card')) {
      // minimize
      card.style.cssText = ''
      setTimeout(() => {
        document.documentElement.classList.remove('maximized-card')
        card.classList.remove('maximized-card')
        if (card.classList.contains('was-collapsed')) {
          card.classList.remove('was-collapsed')
        }
        setMaximized(false)
      }, 10)
    } else {
      // maximize
      card.style.height = `${card.offsetHeight}px`
      card.style.width = `${card.offsetWidth}px`
      card.style.transition = 'all .15s'

      setTimeout(() => {
        document.documentElement.classList.add('maximized-card')
        card.classList.add('maximized-card')
        if (card.classList.contains('collapsed-card')) {
          card.classList.add('was-collapsed')
        }
        setMaximized(true)
      }, 150)
    }
  }, [cardRef])

  // Apply initial collapsed state after mount
  useEffect(() => {
    if (options.initialCollapsed) {
      const card = cardRef.current
      if (card) {
        card.classList.add('collapsed-card')
        getTargets().forEach((el) => {
          el.style.display = 'none'
        })
      }
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return {
    collapsed,
    maximized,
    toggleCollapse,
    toggleMaximize,
    remove,
  }
}
