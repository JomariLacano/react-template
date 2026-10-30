import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LogIn, Code2, ShieldCheck } from 'lucide-react'
import InputGroup from '../../components/forms/InputGroup'

export default function LoginV2() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <div className="auth-v2-wrapper">
      {/* Left: Form */}
      <div className="auth-v2-form">
        <div className="auth-v2-form-inner">

          {/* Logo */}
          <div className="auth-logo">
            <Link to="/"><span>JL</span> Tempate</Link>
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
            <p><Link to="/auth/register-v2">Register a new membership</Link></p>
          </div>

        </div>
      </div>

      {/* Right: Decorative Panel */}
      <div className="auth-v2-panel">
        <div className="auth-v2-panel-content">
          <div className="panel-icon">
            <ShieldCheck className="w-20 h-20 mx-auto" />
          </div>
          <h2>Welcome Back!</h2>
          <p>Sign in to access your dashboard, manage settings, and stay connected with your team. Your data is secure with us.</p>
        </div>
      </div>
    </div>
  )
}
