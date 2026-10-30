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
            <img src="assets/img/jl-mark.svg" alt="JL Tempate" className="brand-image h-[33px] w-[33px]" />
            <span className="brand-text">
              JL <b>Tempate</b>
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
