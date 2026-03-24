import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { User, Unlock } from 'lucide-react'

export default function Lockscreen() {
  const [password, setPassword] = useState('')
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    function updateClock() {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }))
      setDate(now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
    }

    updateClock()
    const intervalId = setInterval(updateClock, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="lockscreen-page">
      <div className="lockscreen-card">

        {/* Clock */}
        <div className="lockscreen-clock">
          <div className="lockscreen-time">{time}</div>
          <div className="lockscreen-date">{date}</div>
        </div>

        {/* Avatar */}
        <div className="lockscreen-avatar">
          <span className="avatar-placeholder">
            <User className="w-10 h-10" />
          </span>
        </div>

        {/* User Info */}
        <div className="lockscreen-name">John Doe</div>
        <div className="lockscreen-subtitle">Enter your password to unlock</div>

        {/* Unlock Form */}
        <form className="lockscreen-form" onSubmit={(e) => e.preventDefault()}>
          <input type="password" placeholder="Password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" title="Unlock">
            <Unlock className="w-4 h-4" />
          </button>
        </form>

        {/* Footer */}
        <div className="lockscreen-footer">
          <Link to="/auth/login-v1">Or sign in as a different user</Link>
        </div>

      </div>
    </div>
  )
}
