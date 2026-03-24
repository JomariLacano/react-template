import { useCallback, type RefObject } from 'react'

interface SlideElement extends HTMLElement {
  _slideAbort?: (() => void) | null
}

const transitionProps = [
  'height',
  'padding-top',
  'padding-bottom',
  'margin-top',
  'margin-bottom',
  'overflow',
  'transition-duration',
  'transition-property',
]

function cleanup(element: HTMLElement, props: string[]): void {
  props.forEach((p) => element.style.removeProperty(p))
}

export function slideUp(element: SlideElement, duration = 300): void {
  if (element._slideAbort) element._slideAbort()

  element.style.transitionProperty = 'height, margin, padding'
  element.style.transitionDuration = `${duration}ms`
  element.style.height = `${element.offsetHeight}px`
  element.offsetHeight // force reflow
  element.style.overflow = 'hidden'
  element.style.height = '0'
  element.style.paddingTop = '0'
  element.style.paddingBottom = '0'
  element.style.marginTop = '0'
  element.style.marginBottom = '0'

  let done = false

  const finish = (): void => {
    if (done) return
    done = true
    element.removeEventListener('transitionend', onEnd)
    element._slideAbort = null
    element.style.display = 'none'
    cleanup(element, transitionProps)
  }

  const onEnd = (e: TransitionEvent): void => {
    if (e.target === element) finish()
  }

  element.addEventListener('transitionend', onEnd)
  const timer = setTimeout(finish, duration + 50)

  element._slideAbort = () => {
    done = true
    clearTimeout(timer)
    element.removeEventListener('transitionend', onEnd)
    cleanup(element, transitionProps)
    element._slideAbort = null
  }
}

export function slideDown(element: SlideElement, duration = 300): void {
  if (element._slideAbort) element._slideAbort()

  element.style.removeProperty('display')
  let display = window.getComputedStyle(element).display
  if (display === 'none') display = 'block'
  element.style.display = display

  const height = element.offsetHeight
  element.style.overflow = 'hidden'
  element.style.height = '0'
  element.style.paddingTop = '0'
  element.style.paddingBottom = '0'
  element.style.marginTop = '0'
  element.style.marginBottom = '0'
  element.offsetHeight // force reflow

  element.style.transitionProperty = 'height, margin, padding'
  element.style.transitionDuration = `${duration}ms`
  element.style.height = `${height}px`
  element.style.removeProperty('padding-top')
  element.style.removeProperty('padding-bottom')
  element.style.removeProperty('margin-top')
  element.style.removeProperty('margin-bottom')

  let done = false
  const cleanupProps = ['height', 'overflow', 'transition-duration', 'transition-property']

  const finish = (): void => {
    if (done) return
    done = true
    element.removeEventListener('transitionend', onEnd)
    element._slideAbort = null
    cleanup(element, cleanupProps)
  }

  const onEnd = (e: TransitionEvent): void => {
    if (e.target === element) finish()
  }

  element.addEventListener('transitionend', onEnd)
  const timer = setTimeout(finish, duration + 50)

  element._slideAbort = () => {
    done = true
    clearTimeout(timer)
    element.removeEventListener('transitionend', onEnd)
    cleanup(element, cleanupProps)
    element._slideAbort = null
  }
}

export function slideToggle(element: SlideElement, duration = 300): void {
  if (window.getComputedStyle(element).display === 'none') {
    slideDown(element, duration)
  } else {
    slideUp(element, duration)
  }
}

export function useSlideToggle(
  elementRef: RefObject<HTMLElement | null>,
  duration = 300,
) {
  const up = useCallback(
    (d?: number) => {
      if (elementRef.current) slideUp(elementRef.current, d ?? duration)
    },
    [elementRef, duration],
  )

  const down = useCallback(
    (d?: number) => {
      if (elementRef.current) slideDown(elementRef.current, d ?? duration)
    },
    [elementRef, duration],
  )

  const toggle = useCallback(
    (d?: number) => {
      if (elementRef.current) slideToggle(elementRef.current, d ?? duration)
    },
    [elementRef, duration],
  )

  return {
    slideUp: up,
    slideDown: down,
    slideToggle: toggle,
  }
}
