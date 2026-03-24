import { useState, useEffect } from 'react'
import AppCallout from '../../components/ui/AppCallout'
import AppCard from '../../components/widgets/AppCard'

export default function FixedSidebarPage() {
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    document.body.classList.add('layout-fixed')
    return () => {
      document.body.classList.remove('layout-fixed')
    }
  }, [])

  function toggleFixed(checked: boolean) {
    setEnabled(checked)
    document.body.classList.toggle('layout-fixed', checked)
  }

  return (
    <div>
      {/* Info Callout */}
      <AppCallout variant="info" title="Fixed Sidebar Layout">
        This page demonstrates the <strong>fixed sidebar</strong> layout variant. The sidebar stays in place while the main content area scrolls. This is enabled by adding the <code>layout-fixed</code> class to the <code>&lt;body&gt;</code> tag.
        <p className="mt-2">Usage: <code>&lt;body class="layout-fixed sidebar-expand-lg sidebar-mini sidebar-open"&gt;</code></p>
      </AppCallout>

      {/* Try It Toggle */}
      <AppCard title="Try It">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={enabled} onChange={(e) => toggleFixed(e.target.checked)} className="accent-primary" />
          <span>Enable Fixed Sidebar (<code>layout-fixed</code>)</span>
        </label>
        <p className="text-sm text-gray-500 mt-2">Toggle the checkbox and scroll the page to see the difference. When enabled, the sidebar stays fixed in the viewport. When disabled, the sidebar scrolls with the content.</p>
      </AppCard>

      {/* How It Works */}
      <AppCard title="How It Works">
        <p>The <code>layout-fixed</code> class on the body element triggers CSS that makes the sidebar <code>position: sticky</code> with <code>top: 0</code> and <code>max-height: 100vh</code>. This keeps the sidebar locked in the viewport while the main content scrolls independently.</p>
        <p className="mt-2">The sidebar wrapper also gets its own scrollbar via <code>overflow-y: auto</code>, so long menus can still be scrolled within the sidebar itself.</p>
        <h5 className="mt-4 font-semibold">CSS Rules (from app-sidebar.css):</h5>
        <pre className="bg-gray-800 text-green-400 p-4 rounded mt-2 text-sm overflow-x-auto"><code>{`.sidebar-expand-lg.layout-fixed .app-sidebar {
  position: sticky;
  top: 0;
  bottom: 0;
  max-height: 100vh;
}

.sidebar-expand-lg.layout-fixed .app-sidebar .sidebar-wrapper {
  height: calc(100vh - var(--header-height) - 1px);
  overflow-x: hidden;
  overflow-y: auto;
}`}</code></pre>
      </AppCard>

      {/* Filler Content for Scrolling */}
      <AppCard title="Sample Content Section 1">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p className="mt-3">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </AppCard>

      <AppCard title="Sample Content Section 2">
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
        <p className="mt-3">Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
      </AppCard>

      <AppCard title="Sample Content Section 3">
        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
        <p className="mt-3">Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
      </AppCard>

      <AppCard title="Sample Content Section 4">
        <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </AppCard>

      <AppCard title="Sample Content Section 5">
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="mt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
      </AppCard>
    </div>
  )
}
