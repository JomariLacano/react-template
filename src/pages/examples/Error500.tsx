import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ArrowLeft } from 'lucide-react'

export default function Error500() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="error-page-wrapper">
      <div className="error-page-content">

        <div className="error-code">500</div>
        <div className="error-title">Oops! Something went wrong.</div>
        <div className="error-description">
          The server encountered an internal error and was unable to complete your request.
          Please try again later or <Link to="/" className="text-[var(--color-primary)] hover:underline">return to the dashboard</Link>.
        </div>

        {/* Search */}
        <form className="error-search" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <button type="submit">
            <Search className="w-4 h-4" />
          </button>
        </form>

        <Link to="/" className="error-home-link">
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

      </div>
    </div>
  )
}
