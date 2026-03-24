import { useState, useEffect } from 'react'
import AppCallout from '../../components/ui/AppCallout'
import AppCard from '../../components/widgets/AppCard'

export default function FixedFooterPage() {
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    document.body.classList.add('fixed-footer')
    return () => {
      document.body.classList.remove('fixed-footer')
    }
  }, [])

  function toggleFixed(checked: boolean) {
    setEnabled(checked)
    document.body.classList.toggle('fixed-footer', checked)
  }

  return (
    <div>
      <AppCallout variant="info" title="Fixed Footer Layout">
        This page demonstrates the <strong>fixed footer</strong> layout variant. The footer stays pinned at the bottom of the viewport while the main content scrolls above it. This is enabled by adding the <code>fixed-footer</code> class to the <code>&lt;body&gt;</code> tag.
        <p className="mt-2">Usage: <code>&lt;body class="fixed-footer layout-fixed sidebar-expand-lg sidebar-mini sidebar-open"&gt;</code></p>
      </AppCallout>

      <AppCard title="Try It">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={enabled} onChange={(e) => toggleFixed(e.target.checked)} className="accent-primary" />
          <span>Enable Fixed Footer (<code>fixed-footer</code>)</span>
        </label>
        <p className="text-sm text-gray-500 mt-2">Toggle the checkbox and scroll down the page. When enabled, the footer remains visible at the bottom of the viewport. When disabled, the footer only appears at the end of the content.</p>
      </AppCard>

      <AppCard title="How It Works">
        <p>The <code>fixed-footer</code> body class activates CSS rules that make the <code>.app-footer</code> element <code>position: sticky</code> with <code>bottom: 0</code>. This keeps the footer anchored to the bottom of the viewport regardless of scroll position.</p>
        <h5 className="mt-4 font-semibold">CSS Rules (from app-footer.css):</h5>
        <pre className="bg-gray-800 text-green-400 p-4 rounded mt-2 text-sm overflow-x-auto"><code>{`.fixed-footer .app-footer {
  position: sticky;
  bottom: 0;
  z-index: var(--z-fixed);
}`}</code></pre>
      </AppCard>

      <AppCard title="Sample Content Section 1">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p className="mt-3">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
      </AppCard>

      <AppCard title="Sample Content Section 2">
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
        <p className="mt-3">Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
      </AppCard>

      <AppCard title="Sample Content Section 3">
        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p>
        <p className="mt-3">Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.</p>
      </AppCard>

      <AppCard title="Sample Content Section 4">
        <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.</p>
        <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </AppCard>

      <AppCard title="Sample Content Section 5">
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="mt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </AppCard>
    </div>
  )
}
