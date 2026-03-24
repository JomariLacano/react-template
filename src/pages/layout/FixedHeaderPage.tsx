import { useState, useEffect } from 'react'
import AppCallout from '../../components/ui/AppCallout'
import AppCard from '../../components/widgets/AppCard'

export default function FixedHeaderPage() {
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    document.body.classList.add('fixed-header')
    return () => {
      document.body.classList.remove('fixed-header')
    }
  }, [])

  function toggleFixed(checked: boolean) {
    setEnabled(checked)
    document.body.classList.toggle('fixed-header', checked)
  }

  return (
    <div>
      <AppCallout variant="info" title="Fixed Header Layout">
        This page demonstrates the <strong>fixed header</strong> layout variant. The top navbar stays pinned at the top of the viewport while the main content scrolls beneath it. This is enabled by adding the <code>fixed-header</code> class to the <code>&lt;body&gt;</code> tag.
        <p className="mt-2">Usage: <code>&lt;body class="fixed-header layout-fixed sidebar-expand-lg sidebar-mini sidebar-open"&gt;</code></p>
      </AppCallout>

      <AppCard title="Try It">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={enabled} onChange={(e) => toggleFixed(e.target.checked)} className="accent-primary" />
          <span>Enable Fixed Header (<code>fixed-header</code>)</span>
        </label>
        <p className="text-sm text-gray-500 mt-2">Toggle the checkbox and scroll down the page. When enabled, the header stays visible at the top. When disabled, the header scrolls out of view.</p>
      </AppCard>

      <AppCard title="How It Works">
        <p>The <code>fixed-header</code> body class activates CSS rules that make the <code>.app-header</code> element <code>position: sticky</code> with <code>top: 0</code>. Combined with a high <code>z-index</code>, this keeps the header above all content as the user scrolls.</p>
        <h5 className="mt-4 font-semibold">CSS Rules (from app-header.css):</h5>
        <pre className="bg-gray-800 text-green-400 p-4 rounded mt-2 text-sm overflow-x-auto"><code>{`.fixed-header .app-header {
  position: sticky;
  top: 0;
  z-index: var(--z-fixed);
}`}</code></pre>
      </AppCard>

      <AppCard title="Sample Content Section 1">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p className="mt-3">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
      </AppCard>

      <AppCard title="Sample Content Section 2">
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
        <p className="mt-3">Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
      </AppCard>

      <AppCard title="Sample Content Section 3">
        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
        <p className="mt-3">Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
      </AppCard>

      <AppCard title="Sample Content Section 4">
        <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
      </AppCard>

      <AppCard title="Sample Content Section 5">
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="mt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </AppCard>
    </div>
  )
}
