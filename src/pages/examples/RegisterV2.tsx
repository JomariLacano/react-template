import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserPlus, Code2 } from 'lucide-react'
import InputGroup from '../../components/forms/InputGroup'

export default function RegisterV2() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)

  return (
    <div className="auth-v2-wrapper">
      {/* Left: Form */}
      <div className="auth-v2-form">
        <div className="auth-v2-form-inner">

          {/* Logo */}
          <div className="auth-logo">
            <Link to="/"><span>JL</span> Tempate</Link>
            <p>Register a new membership</p>
          </div>

          {/* Register Form */}
          <form onSubmit={(e) => e.preventDefault()}>
            <InputGroup value={fullName} onChange={setFullName} type="text" placeholder="Full Name" icon="User" />
            <InputGroup value={email} onChange={setEmail} type="email" placeholder="Email" icon="Mail" />
            <InputGroup value={password} onChange={setPassword} type="password" placeholder="Password" icon="Lock" />
            <InputGroup value={confirmPassword} onChange={setConfirmPassword} type="password" placeholder="Confirm Password" icon="Lock" />

            <div className="auth-terms">
              <input type="checkbox" id="terms" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} />
              <label htmlFor="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
            </div>

            <button type="submit" className="auth-btn auth-btn-primary">
              Register <UserPlus className="w-4 h-4" />
            </button>
          </form>

          {/* Social Login */}
          <div className="auth-divider">OR</div>

          <div className="auth-social-buttons">
            <a href="#" className="auth-social-btn btn-facebook" title="Sign up with Facebook">f</a>
            <a href="#" className="auth-social-btn btn-google" title="Sign up with Google">G+</a>
            <a href="#" className="auth-social-btn btn-github" title="Sign up with GitHub">
              <Code2 className="w-4 h-4" />
            </a>
          </div>

          {/* Links */}
          <div className="auth-links">
            <p><Link to="/auth/login-v2">I already have a membership</Link></p>
          </div>

        </div>
      </div>

      {/* Right: Decorative Panel */}
      <div className="auth-v2-panel">
        <div className="auth-v2-panel-content">
          <div className="panel-icon">
            <UserPlus className="w-20 h-20 mx-auto" />
          </div>
          <h2>Join Us Today!</h2>
          <p>Create your account to unlock all features. Manage your projects, collaborate with your team, and track your progress all in one place.</p>
        </div>
      </div>
    </div>
  )
}
