import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Menu,
  Search,
  Sun,
  Moon,
  Monitor,
  Mail,
  Bell,
  Clock,
  Maximize,
  Minimize,
  User,
  Settings,
  LogOut,
  Users,
  FileText,
} from 'lucide-react'
import { useSidebarStore } from '@/stores/sidebar'
import { useDarkModeStore } from '@/stores/darkMode'
import { useFullscreen } from '@/hooks/useFullscreen'

export default function AppHeader() {
  const sidebarToggle = useSidebarStore((s) => s.toggle)
  const darkModeMode = useDarkModeStore((s) => s.mode)
  const darkModeToggle = useDarkModeStore((s) => s.toggle)
  const { isFullscreen, toggle: fullscreenToggle } = useFullscreen()

  const [searchOpen, setSearchOpen] = useState(false)
  const [messagesOpen, setMessagesOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  return (
    <nav className="app-header flex items-center justify-between px-4 bg-white dark:bg-gray-800 dark:text-gray-200">
      {/* Left: Sidebar Toggle + Links */}
      <ul className="flex items-center list-none m-0 p-0">
        <li>
          <a
            className="nav-link cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label="Toggle sidebar"
            onClick={sidebarToggle}
          >
            <Menu className="w-5 h-5" />
          </a>
        </li>
        <li className="hidden md:block">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="hidden md:block">
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
      </ul>

      {/* Right: Search, Dark Mode, Messages, Notifications, Fullscreen, User Menu */}
      <ul className="flex items-center list-none m-0 p-0">
        {/* Search */}
        <li className="relative">
          <a
            className="nav-link cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label="Search"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="w-5 h-5" />
          </a>
          {searchOpen && (
            <div
              className="fixed inset-0 z-0"
              onClick={() => setSearchOpen(false)}
            />
          )}
          <div
            style={{ display: searchOpen ? undefined : 'none' }}
            className="absolute right-0 top-full mt-1 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-10 p-3"
          >
            <form className="flex">
              <input
                type="text"
                className="flex-1 px-3 py-2 border dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="px-3 py-2 bg-primary text-white rounded-r-md hover:bg-primary/90"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>
        </li>

        {/* Dark Mode Toggle */}
        <li>
          <a
            className="nav-link cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
            onClick={darkModeToggle}
          >
            <Sun
              className="w-5 h-5"
              style={{ display: darkModeMode === 'light' ? undefined : 'none' }}
            />
            <Moon
              className="w-5 h-5"
              style={{ display: darkModeMode === 'dark' ? undefined : 'none' }}
            />
            <Monitor
              className="w-5 h-5"
              style={{ display: darkModeMode === 'auto' ? undefined : 'none' }}
            />
          </a>
        </li>

        {/* Messages Dropdown */}
        <li className="relative">
          <a
            className="nav-link cursor-pointer"
            onClick={() => setMessagesOpen(!messagesOpen)}
          >
            <Mail className="w-5 h-5" />
            <span className="navbar-badge bg-danger text-white">4</span>
          </a>
          {messagesOpen && (
            <div
              className="fixed inset-0 z-0"
              onClick={() => setMessagesOpen(false)}
            />
          )}
          <div
            style={{ display: messagesOpen ? undefined : 'none' }}
            className="absolute right-0 top-full mt-1 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-10"
          >
            <div className="px-3 py-2 border-b dark:border-gray-700">
              <span className="text-sm font-semibold">4 New Messages</span>
            </div>
            <a
              href="#"
              className="flex items-start gap-3 px-3 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b dark:border-gray-700"
            >
              <img
                src="assets/img/user1-128x128.jpg"
                alt="User"
                className="w-10 h-10 rounded-full flex-shrink-0"
              />
              <div className="min-w-0">
                <div className="flex items-center justify-between">
                  <h6 className="text-sm font-semibold m-0 truncate">Brad Diesel</h6>
                  <span className="text-xs text-gray-400 flex-shrink-0 ml-2">
                    <Clock className="inline w-3 h-3" /> 4 Hours Ago
                  </span>
                </div>
                <p className="text-xs text-gray-500 m-0 truncate">
                  Call me whenever you can...
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-start gap-3 px-3 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b dark:border-gray-700"
            >
              <img
                src="assets/img/user8-128x128.jpg"
                alt="User"
                className="w-10 h-10 rounded-full flex-shrink-0"
              />
              <div className="min-w-0">
                <div className="flex items-center justify-between">
                  <h6 className="text-sm font-semibold m-0 truncate">John Pierce</h6>
                  <span className="text-xs text-gray-400 flex-shrink-0 ml-2">
                    <Clock className="inline w-3 h-3" /> 5 Hours Ago
                  </span>
                </div>
                <p className="text-xs text-gray-500 m-0 truncate">
                  I got your message bro
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-start gap-3 px-3 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b dark:border-gray-700"
            >
              <img
                src="assets/img/user3-128x128.jpg"
                alt="User"
                className="w-10 h-10 rounded-full flex-shrink-0"
              />
              <div className="min-w-0">
                <div className="flex items-center justify-between">
                  <h6 className="text-sm font-semibold m-0 truncate">Nora Silvester</h6>
                  <span className="text-xs text-gray-400 flex-shrink-0 ml-2">
                    <Clock className="inline w-3 h-3" /> 8 Hours Ago
                  </span>
                </div>
                <p className="text-xs text-gray-500 m-0 truncate">
                  The subject goes here
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-start gap-3 px-3 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b dark:border-gray-700"
            >
              <img
                src="assets/img/user5-128x128.jpg"
                alt="User"
                className="w-10 h-10 rounded-full flex-shrink-0"
              />
              <div className="min-w-0">
                <div className="flex items-center justify-between">
                  <h6 className="text-sm font-semibold m-0 truncate">Sarah Bullock</h6>
                  <span className="text-xs text-gray-400 flex-shrink-0 ml-2">
                    <Clock className="inline w-3 h-3" /> Yesterday
                  </span>
                </div>
                <p className="text-xs text-gray-500 m-0 truncate">
                  I'll be waiting for...
                </p>
              </div>
            </a>
            <a
              href="#"
              className="block text-center text-sm text-primary hover:underline py-2"
            >
              See All Messages
            </a>
          </div>
        </li>

        {/* Notifications Dropdown */}
        <li className="relative">
          <a
            className="nav-link cursor-pointer"
            onClick={() => setNotificationsOpen(!notificationsOpen)}
          >
            <Bell className="w-5 h-5" />
            <span className="navbar-badge bg-warning text-dark">15</span>
          </a>
          {notificationsOpen && (
            <div
              className="fixed inset-0 z-0"
              onClick={() => setNotificationsOpen(false)}
            />
          )}
          <div
            style={{ display: notificationsOpen ? undefined : 'none' }}
            className="absolute right-0 top-full mt-1 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-10"
          >
            <div className="px-3 py-2 border-b dark:border-gray-700">
              <span className="text-sm font-semibold">15 Notifications</span>
            </div>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-700 border-b dark:border-gray-700"
            >
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-sm font-medium m-0">4 new messages</p>
                <p className="text-xs text-gray-400 m-0">3 mins ago</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-700 border-b dark:border-gray-700"
            >
              <Users className="w-5 h-5 text-info flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-sm font-medium m-0">8 friend requests</p>
                <p className="text-xs text-gray-400 m-0">12 hours ago</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-700 border-b dark:border-gray-700"
            >
              <FileText className="w-5 h-5 text-danger flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-sm font-medium m-0">3 new reports</p>
                <p className="text-xs text-gray-400 m-0">2 days ago</p>
              </div>
            </a>
            <a
              href="#"
              className="block text-center text-sm text-primary hover:underline py-2"
            >
              See All Notifications
            </a>
          </div>
        </li>

        {/* Fullscreen Toggle (hidden on mobile) */}
        <li className="hidden md:block">
          <a className="nav-link cursor-pointer" onClick={fullscreenToggle}>
            <Maximize
              className="w-5 h-5"
              style={{ display: !isFullscreen ? undefined : 'none' }}
            />
            <Minimize
              className="w-5 h-5"
              style={{ display: isFullscreen ? undefined : 'none' }}
            />
          </a>
        </li>

        {/* User Menu */}
        <li className="relative">
          <a
            className="nav-link cursor-pointer flex items-center gap-2"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
          >
            <img
              src="assets/img/user2-160x160.jpg"
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
          </a>
          {userMenuOpen && (
            <div
              className="fixed inset-0 z-0"
              onClick={() => setUserMenuOpen(false)}
            />
          )}
          <div
            style={{ display: userMenuOpen ? undefined : 'none' }}
            className="absolute right-0 top-full mt-1 w-60 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-10"
          >
            {/* User Info */}
            <div className="flex items-center gap-3 px-4 py-3 border-b dark:border-gray-700">
              <img
                src="assets/img/user2-160x160.jpg"
                alt="User"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm m-0">JL Tempate</p>
                <p className="text-xs text-gray-400 m-0">Web Developer</p>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 text-center text-xs border-b dark:border-gray-700 py-2">
              <div>
                <p className="font-semibold m-0">1,322</p>
                <p className="text-gray-400 m-0">Followers</p>
              </div>
              <div>
                <p className="font-semibold m-0">543</p>
                <p className="text-gray-400 m-0">Sales</p>
              </div>
              <div>
                <p className="font-semibold m-0">13,287</p>
                <p className="text-gray-400 m-0">Friends</p>
              </div>
            </div>
            {/* Links */}
            <Link
              to="/examples/profile"
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm"
              onClick={() => setUserMenuOpen(false)}
            >
              <User className="w-4 h-4 text-gray-400" /> Profile
            </Link>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm"
            >
              <Settings className="w-4 h-4 text-gray-400" /> Settings
            </a>
            <div className="border-t dark:border-gray-700"></div>
            <Link
              to="/auth/login-v1"
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm rounded-b-lg"
              onClick={() => setUserMenuOpen(false)}
            >
              <LogOut className="w-4 h-4 text-gray-400" /> Sign Out
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  )
}
