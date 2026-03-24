import { Link } from 'react-router-dom'
import SidebarMenu from './SidebarMenu'
import { navigation } from '@/data/navigation'
import { useSidebarStore } from '@/stores/sidebar'

interface AppSidebarProps {
  activePage: string
}

export default function AppSidebar({ activePage }: AppSidebarProps) {
  const closeSidebar = useSidebarStore((s) => s.close)

  return (
    <>
      <aside className="app-sidebar">
        <div className="sidebar-brand">
          <Link to="/" className="brand-link">
            <img
              src="/assets/img/AdminLTELogo.png"
              alt="TailAdminLTE Logo"
              className="brand-image"
            />
            <span className="brand-text">
              TailAdmin<b>LTE</b>
            </span>
          </Link>
        </div>
        <div className="sidebar-wrapper">
          <SidebarMenu sections={navigation} activePage={activePage} />
        </div>
      </aside>
      <div className="sidebar-overlay" onClick={closeSidebar}></div>
    </>
  )
}
