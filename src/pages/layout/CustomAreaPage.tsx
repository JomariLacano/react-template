import { Plus, UserPlus, Download, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import AppCallout from '../../components/ui/AppCallout'
import AppCard from '../../components/widgets/AppCard'

export default function CustomAreaPage() {
  return (
    <div>
      <AppCallout variant="info" title="Layout with Custom Area">
        This page demonstrates how to add <strong>custom content areas</strong> outside the standard content region — such as a top banner, secondary toolbar, or status bar between the header and main content.
      </AppCallout>

      {/* Custom Area: Top Banner */}
      <div className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 mb-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-xl font-bold">Welcome back, Administrator!</h3>
            <p className="text-blue-100 mt-1">You have 12 pending tasks and 3 unread messages.</p>
          </div>
          <div className="flex gap-2">
            <Link to="/" className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors">View Dashboard</Link>
            <a href="#" className="px-4 py-2 bg-white text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors">View Tasks</a>
          </div>
        </div>
      </div>

      {/* Custom Area: Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="text-2xl font-bold text-primary">2,451</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mt-1">Total Users</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="text-2xl font-bold text-success">$48.2k</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mt-1">Revenue</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="text-2xl font-bold text-warning">187</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mt-1">Orders Today</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="text-2xl font-bold text-danger">12</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mt-1">Support Tickets</div>
        </div>
      </div>

      {/* Custom Area: Secondary Toolbar */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-3 mb-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Quick Actions:</span>
            <button className="px-3 py-1.5 text-xs bg-primary text-white rounded hover:bg-primary/90 transition-colors">
              <Plus className="w-3 h-3 inline mr-1" />New Order
            </button>
            <button className="px-3 py-1.5 text-xs bg-success text-white rounded hover:bg-success/90 transition-colors">
              <UserPlus className="w-3 h-3 inline mr-1" />Add User
            </button>
            <button className="px-3 py-1.5 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              <Download className="w-3 h-3 inline mr-1" />Export
            </button>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <Clock className="w-3 h-3" />
            Last updated: 5 minutes ago
          </div>
        </div>
      </div>

      {/* How to Implement */}
      <AppCard title="How to Add Custom Areas">
        <p>Custom areas are added inside the <code>.app-content</code> div, before or between your regular card content. No special classes are needed — just add your HTML:</p>
        <pre className="bg-gray-800 text-green-400 p-4 rounded mt-3 text-sm overflow-x-auto"><code>{`<main class="app-main">
  <!-- Content Header (breadcrumb) -->
  <ContentHeader title="Page Title" />

  <div class="app-content">
    <div class="w-full px-4">

      <!-- Custom Banner Area -->
      <div class="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700
                  text-white p-6 mb-4">
        <h3>Welcome Banner</h3>
        <p>Custom content here...</p>
      </div>

      <!-- Custom Stats Row -->
      <div class="grid grid-cols-4 gap-3 mb-4">
        <div class="bg-white rounded-lg p-4">...</div>
      </div>

      <!-- Regular Card Content -->
      <div class="card">...</div>

    </div>
  </div>
</main>`}</code></pre>
        <h5 className="mt-4 font-semibold">Common Custom Area Patterns:</h5>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
          <li><strong>Welcome banner</strong> — Gradient hero with user greeting and CTAs</li>
          <li><strong>Quick stats row</strong> — Compact metric cards between breadcrumb and content</li>
          <li><strong>Secondary toolbar</strong> — Action buttons and filters below the main header</li>
          <li><strong>Alert/announcement bar</strong> — Dismissible system notifications</li>
          <li><strong>Tab navigation</strong> — Page-level tabs above the card content</li>
        </ul>
      </AppCard>

      {/* Example: Alert Bar */}
      <AppCallout variant="warning" title="System Maintenance Scheduled">
        The system will be undergoing maintenance on Saturday, March 28 from 2:00 AM to 6:00 AM UTC. Please save your work before this time.
      </AppCallout>

      {/* Regular content below */}
      <AppCard title="Regular Content Below">
        <p>Your normal page content continues below the custom areas. The custom areas simply sit above the regular cards and integrate naturally with the layout.</p>
      </AppCard>
    </div>
  )
}
