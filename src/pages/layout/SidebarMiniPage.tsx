import { useState } from 'react'
import AppCallout from '../../components/ui/AppCallout'
import AppCard from '../../components/widgets/AppCard'

export default function SidebarMiniPage() {
  const [miniEnabled, setMiniEnabled] = useState(true)
  const [collapsed, setCollapsed] = useState(false)

  function toggleMini(checked: boolean) {
    setMiniEnabled(checked)
    document.body.classList.toggle('sidebar-mini', checked)
  }

  function toggleCollapsed(checked: boolean) {
    setCollapsed(checked)
    document.body.classList.toggle('sidebar-collapse', checked)
    document.body.classList.toggle('sidebar-open', !checked)
  }

  return (
    <div>
      <AppCallout variant="info" title="Sidebar Mini Layout">
        This page demonstrates the <strong>sidebar mini</strong> mode. When the sidebar is collapsed, it shrinks to show only icons. Hovering over the collapsed sidebar temporarily expands it to reveal the full menu text. This behavior is enabled by the <code>sidebar-mini</code> class on the body (which is present by default in JL Tempate).
        <p className="mt-2">Usage: <code>&lt;body class="layout-fixed sidebar-expand-lg sidebar-mini sidebar-open"&gt;</code></p>
      </AppCallout>

      <AppCard title="Try It">
        <div className="space-y-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={miniEnabled} onChange={(e) => toggleMini(e.target.checked)} className="accent-primary" />
            <span>Enable Sidebar Mini mode (<code>sidebar-mini</code>)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={collapsed} onChange={(e) => toggleCollapsed(e.target.checked)} className="accent-primary" />
            <span>Collapse sidebar to see mini mode (<code>sidebar-collapse</code>)</span>
          </label>
        </div>
        <p className="text-sm text-gray-500 mt-3">First enable "Sidebar Mini mode", then check "Collapse sidebar" to see the mini sidebar. Hover over the collapsed sidebar to see it temporarily expand with a smooth animation.</p>
      </AppCard>

      <AppCard title="How It Works">
        <p>The <code>sidebar-mini</code> class works in conjunction with <code>sidebar-collapse</code>. When both are present on the body:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>The sidebar shrinks to <code>var(--sidebar-mini-width)</code> (typically around 4.6rem)</li>
          <li>Menu text, nav arrows, and badges are hidden</li>
          <li>Only the nav icons remain visible</li>
          <li>Section headers (<code>.nav-header</code>) are hidden</li>
          <li>On hover, the sidebar smoothly expands back to full width</li>
          <li>The brand text also collapses and re-appears on hover</li>
        </ul>
        <p className="mt-3">Without <code>sidebar-mini</code>, collapsing the sidebar would slide it completely off-screen instead of showing the icon-only state.</p>
        <h5 className="mt-4 font-semibold">Key CSS Rules (from app-sidebar.css):</h5>
        <pre className="bg-gray-800 text-green-400 p-4 rounded mt-2 text-sm overflow-x-auto"><code>{`/* Collapse to icon-only */
.sidebar-mini.sidebar-collapse .app-sidebar {
  min-width: var(--sidebar-mini-width);
  max-width: var(--sidebar-mini-width);
}

/* Hide text */
.sidebar-mini.sidebar-collapse .sidebar-menu .nav-link p {
  width: 0;
  visibility: hidden;
}

/* Expand on hover */
.sidebar-mini.sidebar-collapse .app-sidebar:hover {
  min-width: var(--sidebar-width);
  max-width: var(--sidebar-width);
}

/* Show text on hover */
.sidebar-mini.sidebar-collapse .app-sidebar:hover .sidebar-menu .nav-link p {
  width: auto;
  visibility: visible;
}`}</code></pre>
      </AppCard>

      <AppCard title="Sample Content Section 1">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p className="mt-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </AppCard>

      <AppCard title="Sample Content Section 2">
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
        <p className="mt-3">Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
      </AppCard>

      <AppCard title="Sample Content Section 3">
        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus.</p>
        <p className="mt-3">Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
      </AppCard>

      <AppCard title="Sample Content Section 4">
        <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
        <p className="mt-3">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
      </AppCard>

      <AppCard title="Sample Content Section 5">
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="mt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
      </AppCard>
    </div>
  )
}
