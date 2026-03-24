import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

interface AppModalProps {
  open: boolean
  onOpenChange: (value: boolean) => void
  title: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  centered?: boolean
  scrollable?: boolean
  headerClass?: string
  children: ReactNode
  footer?: ReactNode
}

const sizeMap: Record<string, string> = {
  sm: 'max-w-sm',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
}

export default function AppModal({
  open,
  onOpenChange,
  title,
  size = 'md',
  centered = false,
  scrollable = false,
  headerClass,
  children,
  footer,
}: AppModalProps) {
  useEffect(() => {
    function onEscape(e: KeyboardEvent) {
      if (e.key === 'Escape' && open) {
        onOpenChange(false)
      }
    }
    document.addEventListener('keydown', onEscape)
    return () => document.removeEventListener('keydown', onEscape)
  }, [open, onOpenChange])

  return createPortal(
    <div
      className={`fixed inset-0 z-[9998] flex justify-center p-4 ${centered ? 'items-center' : 'items-start pt-16'}`}
      style={{ display: open ? undefined : 'none' }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => onOpenChange(false)}
      />

      {/* Panel */}
      <div
        className={`relative w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl z-[9999] ${sizeMap[size]}${scrollable ? ' max-h-[85vh] flex flex-col' : ''}`}
        onClick={(e) => e.stopPropagation()}
        style={{ display: open ? undefined : 'none' }}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 ${headerClass || ''}`}
        >
          <h3
            className={`text-lg font-semibold ${headerClass ? 'text-white' : 'text-gray-900 dark:text-gray-100'}`}
          >
            {title}
          </h3>
          <button
            onClick={() => onOpenChange(false)}
            className={`${headerClass ? 'text-white/70 hover:text-white' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className={`p-4${scrollable ? ' overflow-y-auto flex-1' : ''}`}>
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-end gap-2 p-4 border-t border-gray-200 dark:border-gray-700">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body,
  )
}
