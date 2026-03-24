import { useState, useEffect, useRef } from 'react'
import { X } from 'lucide-react'

interface AppToastProps {
  variant?: string
  title: string
  message: string
  autoDismiss?: boolean
  delay?: number
  onClose?: () => void
}

export default function AppToast({
  variant,
  title,
  message,
  autoDismiss = false,
  delay = 5000,
  onClose,
}: AppToastProps) {
  const [visible, setVisible] = useState(true)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function dismiss() {
    setVisible(false)
    onClose?.()
  }

  useEffect(() => {
    if (autoDismiss) {
      timerRef.current = setTimeout(dismiss, delay)
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className={`toast${variant ? ` toast-${variant}` : ''}${visible ? ' show' : ''}`}
      style={{ display: visible ? undefined : 'none' }}
    >
      <div className="toast-header">
        <span className="toast-icon" />
        <span className="toast-title">{title}</span>
        <button className="toast-close" onClick={dismiss}>
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
      <div className="toast-body">{message}</div>
    </div>
  )
}
