import { useState, useMemo } from 'react'
import AppCard from '@/components/widgets/AppCard'
import {
  Activity, AlertCircle, AlertTriangle, Archive, ArrowDown, ArrowLeft,
  ArrowRight, ArrowUp, BarChart3, Bell, Bookmark, Calendar, Camera,
  Check, CheckCircle, ChevronDown, ChevronRight, Circle, Clipboard,
  Clock, Cloud, Code, Copy, CreditCard, Database, Download, Edit,
  Expand, Eye, EyeOff, File, FileText, Filter, Folder, Gauge, Globe,
  Grid3x3, Hash, Heart, Home, Image, Inbox, Info, Key, Layers, Layout,
  Link, List, Loader2, Lock, LogOut, Mail, Map, MapPin, Menu,
  MessageCircle, Minus, Monitor, Moon, MoreHorizontal, MoreVertical,
  Package, Palette, Phone, PieChart, Plus, Power, Printer, Puzzle,
  RefreshCw, Save, Search, Settings, Share, Shield, ShoppingCart, Star,
  Sun, Table, Tag, Trash, TrendingUp, TrendingDown, Upload, User, Users,
  X, Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const iconList: { name: string; component: LucideIcon }[] = [
  { name: 'activity', component: Activity },
  { name: 'alert-circle', component: AlertCircle },
  { name: 'alert-triangle', component: AlertTriangle },
  { name: 'archive', component: Archive },
  { name: 'arrow-down', component: ArrowDown },
  { name: 'arrow-left', component: ArrowLeft },
  { name: 'arrow-right', component: ArrowRight },
  { name: 'arrow-up', component: ArrowUp },
  { name: 'bar-chart-3', component: BarChart3 },
  { name: 'bell', component: Bell },
  { name: 'bookmark', component: Bookmark },
  { name: 'calendar', component: Calendar },
  { name: 'camera', component: Camera },
  { name: 'check', component: Check },
  { name: 'check-circle', component: CheckCircle },
  { name: 'chevron-down', component: ChevronDown },
  { name: 'chevron-right', component: ChevronRight },
  { name: 'circle', component: Circle },
  { name: 'clipboard', component: Clipboard },
  { name: 'clock', component: Clock },
  { name: 'cloud', component: Cloud },
  { name: 'code', component: Code },
  { name: 'copy', component: Copy },
  { name: 'credit-card', component: CreditCard },
  { name: 'database', component: Database },
  { name: 'download', component: Download },
  { name: 'edit', component: Edit },
  { name: 'expand', component: Expand },
  { name: 'eye', component: Eye },
  { name: 'eye-off', component: EyeOff },
  { name: 'file', component: File },
  { name: 'file-text', component: FileText },
  { name: 'filter', component: Filter },
  { name: 'folder', component: Folder },
  { name: 'gauge', component: Gauge },
  { name: 'globe', component: Globe },
  { name: 'grid', component: Grid3x3 },
  { name: 'hash', component: Hash },
  { name: 'heart', component: Heart },
  { name: 'home', component: Home },
  { name: 'image', component: Image },
  { name: 'inbox', component: Inbox },
  { name: 'info', component: Info },
  { name: 'key', component: Key },
  { name: 'layers', component: Layers },
  { name: 'layout', component: Layout },
  { name: 'link', component: Link },
  { name: 'list', component: List },
  { name: 'loader-2', component: Loader2 },
  { name: 'lock', component: Lock },
  { name: 'log-out', component: LogOut },
  { name: 'mail', component: Mail },
  { name: 'map', component: Map },
  { name: 'map-pin', component: MapPin },
  { name: 'menu', component: Menu },
  { name: 'message-circle', component: MessageCircle },
  { name: 'minus', component: Minus },
  { name: 'monitor', component: Monitor },
  { name: 'moon', component: Moon },
  { name: 'more-horizontal', component: MoreHorizontal },
  { name: 'more-vertical', component: MoreVertical },
  { name: 'package', component: Package },
  { name: 'palette', component: Palette },
  { name: 'phone', component: Phone },
  { name: 'pie-chart', component: PieChart },
  { name: 'plus', component: Plus },
  { name: 'power', component: Power },
  { name: 'printer', component: Printer },
  { name: 'puzzle', component: Puzzle },
  { name: 'refresh-cw', component: RefreshCw },
  { name: 'save', component: Save },
  { name: 'search', component: Search },
  { name: 'settings', component: Settings },
  { name: 'share', component: Share },
  { name: 'shield', component: Shield },
  { name: 'shopping-cart', component: ShoppingCart },
  { name: 'star', component: Star },
  { name: 'sun', component: Sun },
  { name: 'table', component: Table },
  { name: 'tag', component: Tag },
  { name: 'trash', component: Trash },
  { name: 'trending-up', component: TrendingUp },
  { name: 'trending-down', component: TrendingDown },
  { name: 'upload', component: Upload },
  { name: 'user', component: User },
  { name: 'users', component: Users },
  { name: 'x', component: X },
  { name: 'zap', component: Zap },
]

export default function IconsPage() {
  const [search, setSearch] = useState('')

  const filteredIcons = useMemo(() => {
    if (!search) return iconList
    const q = search.toLowerCase()
    return iconList.filter((icon) => icon.name.includes(q))
  }, [search])

  return (
    <div>
      {/* Icon Search */}
      <div className="card mb-6">
        <div className="card-header">
          <h3 className="card-title">Lucide Icons</h3>
          <div className="card-tools">
            <div className="relative">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search icons..."
                className="px-3 py-1.5 text-sm border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
              />
              <Search className="w-4 h-4 absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-3">
            {filteredIcons.map((icon) => {
              const Icon = icon.component
              return (
                <div
                  key={icon.name}
                  className="text-center p-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                  <Icon className="w-6 h-6 mx-auto mb-1" />
                  <p className="text-xs truncate">{icon.name}</p>
                </div>
              )
            })}
          </div>
          {filteredIcons.length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400 py-8">
              No icons found matching &quot;{search}&quot;
            </p>
          )}
        </div>
      </div>

      {/* Icon Sizes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <AppCard title="Icon Sizes">
          <div className="flex items-end gap-6">
            {[
              { size: 'w-4 h-4' },
              { size: 'w-5 h-5' },
              { size: 'w-6 h-6' },
              { size: 'w-8 h-8' },
              { size: 'w-10 h-10' },
              { size: 'w-12 h-12' },
              { size: 'w-16 h-16' },
            ].map((item) => (
              <div key={item.size} className="text-center">
                <Home className={`${item.size} mx-auto mb-1`} />
                <p className="text-xs text-gray-500">{item.size}</p>
              </div>
            ))}
          </div>
        </AppCard>

        <AppCard title="Icon Colors">
          <div className="flex flex-wrap items-center gap-6">
            {[
              { color: 'text-blue-600', label: 'Primary' },
              { color: 'text-gray-600', label: 'Secondary' },
              { color: 'text-green-600', label: 'Success' },
              { color: 'text-red-600', label: 'Danger' },
              { color: 'text-yellow-500', label: 'Warning' },
              { color: 'text-cyan-500', label: 'Info' },
              { color: 'text-gray-900 dark:text-white', label: 'Dark' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <Heart className={`w-8 h-8 mx-auto mb-1 ${item.color}`} />
                <p className="text-xs text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </AppCard>
      </div>
    </div>
  )
}
