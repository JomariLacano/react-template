import { useRef, useMemo, type ReactNode } from 'react'
import { Minus, Expand, X } from 'lucide-react'
import * as icons from 'lucide-react'
import { useCardWidget } from '@/hooks/useCardWidget'

interface AppCardProps {
  title?: string
  icon?: string
  cardClass?: string
  interactive?: boolean
  collapsed?: boolean
  loading?: boolean
  children: ReactNode
  header?: ReactNode
  footer?: ReactNode
  tools?: ReactNode
  onCollapsed?: (value: boolean) => void
  onRemoved?: () => void
}

function resolveIcon(name: string) {
  const pascal = name
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')
  return (icons as any)[pascal] || null
}

export default function AppCard({
  title,
  icon,
  cardClass,
  interactive = false,
  collapsed: initialCollapsed = false,
  loading = false,
  children,
  header,
  footer,
  tools,
  onCollapsed,
  onRemoved,
}: AppCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  const IconComponent = useMemo(
    () => (icon ? resolveIcon(icon) : null),
    [icon],
  )

  const widget = interactive
    ? useCardWidget(cardRef, bodyRef, footerRef, { initialCollapsed }) // eslint-disable-line react-hooks/rules-of-hooks
    : null

  function toggleCollapse() {
    if (widget) {
      widget.toggleCollapse()
      setTimeout(() => {
        onCollapsed?.(widget.collapsed)
      }, 600)
    }
  }

  function toggleMaximize() {
    widget?.toggleMaximize()
  }

  function remove() {
    if (widget) {
      widget.remove()
      onRemoved?.()
    }
  }

  return (
    <div className={`card ${cardClass || ''}`} ref={cardRef}>
      <div className="card-header">
        {header ? (
          header
        ) : (
          <>
            <h3 className="card-title">
              {IconComponent && (
                <IconComponent className="inline w-4 h-4 mr-1" />
              )}
              {title}
            </h3>
            {interactive && (
              <div className="card-tools">
                {tools}
                <button className="btn-tool" onClick={toggleCollapse}>
                  <Minus className="w-4 h-4" />
                </button>
                <button className="btn-tool" onClick={toggleMaximize}>
                  <Expand className="w-4 h-4" />
                </button>
                <button className="btn-tool" onClick={remove}>
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <div className="card-body" ref={bodyRef}>
        {children}
      </div>
      {footer && (
        <div className="card-footer" ref={footerRef}>
          {footer}
        </div>
      )}
      {loading && (
        <div className="overlay">
          <div className="spinner-border" />
        </div>
      )}
    </div>
  )
}
