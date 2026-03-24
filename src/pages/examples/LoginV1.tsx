import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LogIn, Code2 } from 'lucide-react'
import InputGroup from '../../components/forms/InputGroup'

export default function LoginV1() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-card-body">

          {/* Logo */}
          <div className="auth-logo">
            <Link to="/"><span>Tail</span>AdminLTE</Link>
            <p>Sign in to start your session</p>
          </div>

          {/* Login Form */}
          <form onSubmit={(e) => e.preventDefault()}>
            <InputGroup value={email} onChange={setEmail} type="email" placeholder="Email" icon="Mail" />
            <InputGroup value={password} onChange={setPassword} type="password" placeholder="Password" icon="Lock" />

            <div className="auth-remember-row">
              <label>
                <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} /> Remember Me
              </label>
              <button type="submit" className="auth-btn auth-btn-primary" style={{ width: 'auto' }}>
                Sign In <LogIn className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Social Login */}
          <div className="auth-divider">OR</div>

          <div className="auth-social-buttons">
            <a href="#" className="auth-social-btn btn-facebook" title="Sign in with Facebook">f</a>
            <a href="#" className="auth-social-btn btn-google" title="Sign in with Google">G+</a>
            <a href="#" className="auth-social-btn btn-github" title="Sign in with GitHub">
              <Code2 className="w-4 h-4" />
            </a>
          </div>

          {/* Links */}
          <div className="auth-links">
            <p><a href="#">I forgot my password</a></p>
            <p><Link to="/auth/register-v1">Register a new membership</Link></p>
          </div>

        </div>
      </div>
    </div>
  )
}
