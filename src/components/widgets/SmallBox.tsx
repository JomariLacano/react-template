import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import * as icons from 'lucide-react'

interface SmallBoxProps {
  bgColor: string
  value: string | number
  label: string
  icon: string
  link?: string
  linkText?: string
}

function resolveIcon(name: string) {
  const pascal = name
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')
  return (icons as any)[pascal] || null
}

export default function SmallBox({
  bgColor,
  value,
  label,
  icon,
  link,
  linkText = 'More info',
}: SmallBoxProps) {
  const IconComponent = useMemo(() => resolveIcon(icon), [icon])

  return (
    <div className={`small-box ${bgColor}`}>
      <div className="inner">
        <h3 dangerouslySetInnerHTML={{ __html: String(value) }} />
        <p>{label}</p>
      </div>
      <div className="small-box-icon">
        {IconComponent && <IconComponent />}
      </div>
      {link ? (
        <Link to={link} className="small-box-footer">
          {linkText} <ArrowRight className="inline w-4 h-4" />
        </Link>
      ) : (
        <a href="#" className="small-box-footer">
          {linkText} <ArrowRight className="inline w-4 h-4" />
        </a>
      )}
    </div>
  )
}
