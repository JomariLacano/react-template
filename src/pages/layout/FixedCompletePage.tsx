import { useState, useEffect } from 'react'
import AppCallout from '../../components/ui/AppCallout'
import AppCard from '../../components/widgets/AppCard'

export default function FixedCompletePage() {
  const [fixedSidebar, setFixedSidebar] = useState(true)
  const [fixedHeader, setFixedHeader] = useState(true)
  const [fixedFooter, setFixedFooter] = useState(true)

  useEffect(() => {
    document.body.classList.add('layout-fixed', 'fixed-header', 'fixed-footer')
    return () => {
      document.body.classList.remove('fixed-header', 'fixed-footer')
    }
  }, [])

  function toggleSidebar(checked: boolean) {
    setFixedSidebar(checked)
    document.body.classList.toggle('layout-fixed', checked)
  }

  function toggleHeader(checked: boolean) {
    setFixedHeader(checked)
    document.body.classList.toggle('fixed-header', checked)
  }

  function toggleFooter(checked: boolean) {
    setFixedFooter(checked)
    document.body.classList.toggle('fixed-footer', checked)
  }

  return (
    <div>
      <AppCallout variant="info" title="Fixed Complete Layout">
        This page has <strong>all three elements fixed</strong>: the sidebar, header, and footer all remain in place while only the main content area scrolls. This provides maximum navigation accessibility.
        <p className="mt-2">Usage: <code>&lt;body class="layout-fixed fixed-header fixed-footer sidebar-expand-lg sidebar-mini sidebar-open"&gt;</code></p>
      </AppCallout>

      <AppCard title="Try It">
        <div className="space-y-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={fixedSidebar} onChange={(e) => toggleSidebar(e.target.checked)} className="accent-primary" />
            <span>Fixed Sidebar (<code>layout-fixed</code>)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={fixedHeader} onChange={(e) => toggleHeader(e.target.checked)} className="accent-primary" />
            <span>Fixed Header (<code>fixed-header</code>)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={fixedFooter} onChange={(e) => toggleFooter(e.target.checked)} className="accent-primary" />
            <span>Fixed Footer (<code>fixed-footer</code>)</span>
          </label>
        </div>
        <p className="text-sm text-gray-500 mt-3">Toggle each element independently. When all three are enabled, only the main content area scrolls — the sidebar, header, and footer stay fixed in the viewport.</p>
      </AppCard>

      <AppCard title="How It Works">
        <p>The "fixed complete" layout combines three body classes:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
          <li><code>layout-fixed</code> — Makes the sidebar sticky with its own scrollbar</li>
          <li><code>fixed-header</code> — Makes the header/navbar sticky at the top</li>
          <li><code>fixed-footer</code> — Makes the footer sticky at the bottom</li>
        </ul>
        <p className="mt-3">This is the most "app-like" layout, similar to desktop applications where toolbars and status bars are always visible.</p>
      </AppCard>

      <AppCard title="Content Area">
        <p>Notice how only this content area scrolls. The header stays at the top, the footer at the bottom, and the sidebar on the left — all fixed in place.</p>
      </AppCard>

      <AppCard title="Scroll Demo">
        <p>This layout is ideal for dashboard applications where users need constant access to navigation, actions in the header, and status information in the footer.</p>
      </AppCard>

      <AppCard title="More Content">
        <p>The scrollable content area automatically adjusts its height to fill the space between the fixed header and fixed footer, creating a contained scrolling region.</p>
      </AppCard>

      <AppCard title="Additional Block">
        <p>With all elements fixed, the user never loses access to primary navigation or key actions, regardless of how far they scroll through the content.</p>
      </AppCard>

      <AppCard title="Final Block">
        <p>You've reached the end of the demo content. Try disabling individual fixed elements using the toggles above to see how each one affects the layout.</p>
      </AppCard>
    </div>
  )
}
