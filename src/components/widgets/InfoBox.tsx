import { useMemo } from 'react'
import * as icons from 'lucide-react'

interface InfoBoxProps {
  icon: string
  iconBg: string
  label: string
  value: string | number
  progressValue?: number
  progressColor?: string
  progressDescription?: string
}

function resolveIcon(name: string) {
  const pascal = name
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')
  return (icons as any)[pascal] || null
}

export default function InfoBox({
  icon,
  iconBg,
  label,
  value,
  progressValue,
  progressColor,
  progressDescription,
}: InfoBoxProps) {
  const IconComponent = useMemo(() => resolveIcon(icon), [icon])

  return (
    <div className="info-box">
      <span className={`info-box-icon text-white ${iconBg}`}>
        {IconComponent && <IconComponent className="w-8 h-8" />}
      </span>
      <div className="info-box-content">
        <span className="info-box-text">{label}</span>
        <span className="info-box-number">{value}</span>
        {progressValue != null && (
          <div className="progress">
            <div
              className={`progress-bar ${progressColor || 'bg-primary'}`}
              style={{ width: `${progressValue}%` }}
            />
          </div>
        )}
        {progressDescription && (
          <span className="progress-description">{progressDescription}</span>
        )}
      </div>
    </div>
  )
}
