import { useEffect } from 'react'
import { Outlet, useMatches } from 'react-router-dom'
import AppHeader from '@/components/layout/AppHeader'
import AppSidebar from '@/components/layout/AppSidebar'
import AppFooter from '@/components/layout/AppFooter'
import ContentHeader from '@/components/layout/ContentHeader'

const bodyClasses =
  'layout-fixed sidebar-expand-lg sidebar-mini bg-gray-100 dark:bg-gray-900 font-sans text-gray-800 dark:text-gray-200'

export default function DefaultLayout() {
  const matches = useMatches()
  const currentMatch = matches[matches.length - 1]
  const handle = currentMatch?.handle as
    | { activePage?: string; pageTitle?: string; layoutClass?: string }
    | undefined
  const activePage = handle?.activePage || ''
  const pageTitle = handle?.pageTitle || ''
  const layoutClass = handle?.layoutClass || ''

  useEffect(() => {
    document.body.className = bodyClasses
    return () => {
      document.body.className = ''
    }
  }, [])

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
      >
        Skip to content
      </a>
      {/* Screen reader announcements */}
      <div
        id="a11y-announcements"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      ></div>

      <div className={`app-wrapper ${layoutClass}`}>
        <AppHeader />
        <AppSidebar activePage={activePage} />
        <main className="app-main" role="main">
          <ContentHeader title={pageTitle} />
          <div className="app-content" id="main-content">
            <div className="w-full px-4">
              <Outlet />
            </div>
          </div>
        </main>
        <AppFooter />
      </div>
    </>
  )
}
