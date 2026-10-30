import { Fragment, useRef, useCallback } from 'react'
import SidebarMenuItem, { type SidebarMenuItemHandle } from './SidebarMenuItem'
import type { NavigationSection } from '@/types'

interface SidebarMenuProps {
  sections: NavigationSection[]
  activePage: string
}

export default function SidebarMenu({ sections, activePage }: SidebarMenuProps) {
  // Store refs to menu items per section for accordion behavior
  const itemRefs = useRef<Map<string, Map<number, SidebarMenuItemHandle>>>(new Map())

  const getRefSetter = useCallback(
    (sectionIndex: number, itemIndex: number) => {
      return (el: SidebarMenuItemHandle | null) => {
        const key = `${sectionIndex}`
        if (!itemRefs.current.has(key)) {
          itemRefs.current.set(key, new Map())
        }
        const sectionMap = itemRefs.current.get(key)!
        if (el) {
          sectionMap.set(itemIndex, el)
        } else {
          sectionMap.delete(itemIndex)
        }
      }
    },
    []
  )

  const handleMenuToggle = useCallback(
    (sectionIndex: number, toggledIndex: number) => {
      // Accordion: close siblings at the same level
      const siblings = itemRefs.current.get(`${sectionIndex}`)
      if (siblings) {
        siblings.forEach((sibling, i) => {
          if (i !== toggledIndex && sibling?.close) {
            sibling.close()
          }
        })
      }
    },
    []
  )

  return (
    <nav className="mt-2">
      <ul className="sidebar-menu">
        {sections.map((section, sectionIndex) => (
          <Fragment key={sectionIndex}>
            <li className="nav-header">{section.header}</li>
            {section.items.map((item, itemIndex) => (
              <SidebarMenuItem
                key={`${sectionIndex}-${itemIndex}`}
                onHandleReady={getRefSetter(sectionIndex, itemIndex)}
                item={item}
                activePage={activePage}
                onMenuToggle={() => handleMenuToggle(sectionIndex, itemIndex)}
              />
            ))}
          </Fragment>
        ))}
      </ul>
    </nav>
  )
}
