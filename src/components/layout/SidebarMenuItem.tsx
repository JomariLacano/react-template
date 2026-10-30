import { useState, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { icons, ChevronRight, Circle } from 'lucide-react'
import { slideDown, slideUp } from '@/hooks/useSlideToggle'
import type { NavigationItem } from '@/types'

interface SidebarMenuItemProps {
  item: NavigationItem
  activePage: string
  accordion?: boolean
  onMenuToggle?: () => void
  onHandleReady?: (handle: SidebarMenuItemHandle | null) => void
}

export interface SidebarMenuItemHandle {
  close: () => void
}

function resolveIcon(name: string) {
  const pascal = name
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')
  return (icons as Record<string, any>)[pascal] || null
}

function isChildActive(item: NavigationItem, activePage: string): boolean {
  if (item.activePage === activePage) return true
  if (item.children) {
    return item.children.some((child) => isChildActive(child, activePage))
  }
  return false
}

export default function SidebarMenuItem({ item, activePage, accordion = true, onMenuToggle, onHandleReady }: SidebarMenuItemProps) {
    const treeviewRef = useRef<HTMLUListElement>(null)
    const childRefs = useRef<Map<number, SidebarMenuItemHandle>>(new Map())
    const hasChildren = !!item.children?.length

    const isActive = hasChildren
      ? item.children!.some((child) => isChildActive(child, activePage))
      : item.activePage === activePage

    const [isOpen, setIsOpen] = useState(false)

    // Auto-open if active child on mount
    useEffect(() => {
      if (hasChildren && isActive) {
        setIsOpen(true)
        // Set initial display without animation
        if (treeviewRef.current) {
          treeviewRef.current.style.display = 'block'
        }
      }
      // Only run on mount
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const close = useCallback(() => {
      setIsOpen(false)
      if (treeviewRef.current) {
        slideUp(treeviewRef.current)
      }
    }, [])

    const open = useCallback(() => {
      setIsOpen(true)
      // slideDown needs to run after state update, use microtask
      queueMicrotask(() => {
        if (treeviewRef.current) {
          slideDown(treeviewRef.current)
        }
      })
      if (accordion && onMenuToggle) {
        onMenuToggle()
      }
    }, [accordion, onMenuToggle])

    const toggle = useCallback(() => {
      if (!hasChildren) return
      if (isOpen) {
        close()
      } else {
        open()
      }
    }, [hasChildren, isOpen, close, open])

    useEffect(() => {
      onHandleReady?.({ close })
      return () => onHandleReady?.(null)
    }, [close, onHandleReady])

    const handleChildToggle = useCallback((toggledIndex: number) => {
      // Accordion: close sibling children when one opens
      childRefs.current.forEach((childRef, i) => {
        if (i !== toggledIndex && childRef?.close) {
          childRef.close()
        }
      })
    }, [])

    const IconComponent = item.icon ? resolveIcon(item.icon) : null

    if (hasChildren) {
      return (
        <li className={`nav-item ${isOpen ? 'menu-open' : ''}`}>
          <a
            href="#"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault()
              toggle()
            }}
          >
            <span className="nav-icon">
              {IconComponent && <IconComponent className="w-5 h-5" />}
            </span>
            <p>
              {item.label}
              <span className="nav-arrow">
                <ChevronRight className="w-4 h-4" />
              </span>
            </p>
          </a>
          <ul ref={treeviewRef} className="nav-treeview" style={{ display: 'none' }}>
            {item.children!.map((child, index) => (
              <SidebarMenuItem
                key={index}
                onHandleReady={(handle) => {
                  if (handle) {
                    childRefs.current.set(index, handle)
                  } else {
                    childRefs.current.delete(index)
                  }
                }}
                item={child}
                activePage={activePage}
                accordion={accordion}
                onMenuToggle={() => handleChildToggle(index)}
              />
            ))}
          </ul>
        </li>
      )
    }
    return (
      <li className="nav-item">
        {item.href ? (
          <Link
            to={item.href}
            className={`nav-link ${isActive ? 'active' : ''}`}
          >
            <span className="nav-icon">
              {IconComponent ? (
                <IconComponent className="w-5 h-5" />
              ) : (
                <Circle className="w-3 h-3" />
              )}
            </span>
            <p>{item.label}</p>
          </Link>
        ) : (
          <a href="#" className="nav-link">
            <span className="nav-icon">
              {IconComponent ? (
                <IconComponent className="w-5 h-5" />
              ) : (
                <Circle className="w-3 h-3" />
              )}
            </span>
            <p>{item.label}</p>
          </a>
        )}
      </li>
    )
}
