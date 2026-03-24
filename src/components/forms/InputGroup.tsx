import * as icons from 'lucide-react'

interface InputGroupProps {
  value: string
  onChange: (value: string) => void
  type?: string
  placeholder?: string
  icon?: string
  iconPosition?: 'left' | 'right'
  disabled?: boolean
}

export default function InputGroup({
  value,
  onChange,
  type = 'text',
  placeholder,
  icon,
  iconPosition = 'right',
  disabled,
}: InputGroupProps) {
  const IconComponent = icon
    ? (icons as Record<string, any>)[icon]
    : null

  return (
    <div
      className={`auth-input-group${iconPosition === 'left' ? ' icon-left' : ''}`}
    >
      {iconPosition === 'left' ? (
        <>
          {IconComponent && (
            <span className="auth-input-icon">
              <IconComponent className="w-5 h-5" />
            </span>
          )}
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            className="form-control"
          />
        </>
      ) : (
        <>
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            className="form-control"
          />
          {IconComponent && (
            <span className="auth-input-icon">
              <IconComponent className="w-5 h-5" />
            </span>
          )}
        </>
      )}
    </div>
  )
}
