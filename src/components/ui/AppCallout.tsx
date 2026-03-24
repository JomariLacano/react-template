import type { ReactNode } from 'react'

interface AppCalloutProps {
  variant?: string
  title?: string
  children: ReactNode
}

export default function AppCallout({ variant, title, children }: AppCalloutProps) {
  return (
    <div className={`callout${variant ? ` callout-${variant}` : ''}`}>
      {title && <h5>{title}</h5>}
      <p>{children}</p>
    </div>
  )
}
