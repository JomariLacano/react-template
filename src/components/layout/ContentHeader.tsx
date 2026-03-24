import { Link } from 'react-router-dom'

interface ContentHeaderProps {
  title: string
}

export default function ContentHeader({ title }: ContentHeaderProps) {
  return (
    <div className="app-content-header">
      <div className="w-full px-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold m-0">{title}</h3>
          <ol className="breadcrumb text-sm">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {title}
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
