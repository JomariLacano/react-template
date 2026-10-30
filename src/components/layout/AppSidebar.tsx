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
            <span className="brand-image flex h-[33px] w-[33px] items-center justify-center rounded bg-white text-xs font-bold text-slate-800">
              JL
            </span>
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
