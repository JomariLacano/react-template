import { useState, useMemo } from 'react'
import { CheckCircle, AlertCircle, AlertTriangle } from 'lucide-react'
import AppCard from '@/components/widgets/AppCard'

export default function ValidationFormsPage() {
  // -- HTML5 Validation --
  const [h5Submitted, setH5Submitted] = useState(false)
  function handleH5Submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setH5Submitted(true)
    const form = e.target as HTMLFormElement
    if (form.checkValidity()) {
      alert('Form is valid!')
    }
  }

  // -- Real-time Validation --
  const [rt, setRt] = useState({
    username: '',
    email: '',
    password: '',
    usernameTouched: false,
    emailTouched: false,
    passwordTouched: false,
  })

  const usernameValid = rt.username.length >= 3
  const usernameError = useMemo(() => {
    if (!rt.usernameTouched || rt.username === '') return ''
    return usernameValid ? '' : 'Username must be at least 3 characters'
  }, [rt.usernameTouched, rt.username, usernameValid])

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rt.email)
  const emailError = useMemo(() => {
    if (!rt.emailTouched || rt.email === '') return ''
    return emailValid ? '' : 'Please enter a valid email address'
  }, [rt.emailTouched, rt.email, emailValid])

  const passwordValid = rt.password.length >= 8
  const passwordStrength = useMemo(() => {
    if (rt.password.length === 0) return ''
    if (rt.password.length < 6) return 'weak'
    if (rt.password.length < 10 && /[A-Z]/.test(rt.password) && /[0-9]/.test(rt.password)) return 'medium'
    if (rt.password.length >= 10 && /[A-Z]/.test(rt.password) && /[0-9]/.test(rt.password) && /[^A-Za-z0-9]/.test(rt.password)) return 'strong'
    return 'medium'
  }, [rt.password])
  const passwordError = useMemo(() => {
    if (!rt.passwordTouched || rt.password === '') return ''
    return passwordValid ? '' : 'Password must be at least 8 characters'
  }, [rt.passwordTouched, rt.password, passwordValid])

  const rtFormValid = usernameValid && emailValid && passwordValid

  // -- Complete Registration Form --
  const [regForm, setRegForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    zip: '',
    agree: false,
  })
  const [regErrors, setRegErrors] = useState<Record<string, string>>({})
  const [regSubmitted, setRegSubmitted] = useState(false)

  function validateReg() {
    const errors: Record<string, string> = {}
    if (!regForm.firstName.trim()) errors.firstName = 'First name is required'
    if (!regForm.lastName.trim()) errors.lastName = 'Last name is required'
    if (!regForm.email.trim()) errors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(regForm.email)) errors.email = 'Invalid email'
    if (!regForm.city.trim()) errors.city = 'City is required'
    if (!regForm.state) errors.state = 'Please select a state'
    if (!regForm.zip.trim()) errors.zip = 'Zip is required'
    else if (!/^\d{5}$/.test(regForm.zip)) errors.zip = 'Must be 5 digits'
    if (!regForm.agree) errors.agree = 'You must agree to the terms'
    setRegErrors(errors)
    return Object.keys(errors).length === 0
  }

  function submitReg(e: React.FormEvent) {
    e.preventDefault()
    setRegSubmitted(true)
    if (validateReg()) {
      alert('Registration successful!')
    }
  }

  function updateReg(field: string, value: string | boolean) {
    setRegForm((prev) => ({ ...prev, [field]: value }))
  }

  function updateRt(field: string, value: string | boolean) {
    setRt((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="w-full px-4">

      {/* HTML5 Validation & Validation States */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <AppCard title="HTML5 Built-in Validation">
          <form noValidate onSubmit={handleH5Submit}>
            <div className="mb-4">
              <label htmlFor="h5Name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name <span className="text-danger">*</span></label>
              <input type="text" id="h5Name" required minLength={2} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 invalid:[&:not(:placeholder-shown)]:border-danger invalid:[&:not(:placeholder-shown)]:focus:ring-danger valid:[&:not(:placeholder-shown)]:border-success valid:[&:not(:placeholder-shown)]:focus:ring-success" placeholder="Enter your name" />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Minimum 2 characters required</p>
            </div>
            <div className="mb-4">
              <label htmlFor="h5Email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email <span className="text-danger">*</span></label>
              <input type="email" id="h5Email" required className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 invalid:[&:not(:placeholder-shown)]:border-danger invalid:[&:not(:placeholder-shown)]:focus:ring-danger valid:[&:not(:placeholder-shown)]:border-success valid:[&:not(:placeholder-shown)]:focus:ring-success" placeholder="user@example.com" />
            </div>
            <div className="mb-4">
              <label htmlFor="h5Phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
              <input type="tel" id="h5Phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 invalid:[&:not(:placeholder-shown)]:border-danger valid:[&:not(:placeholder-shown)]:border-success" placeholder="123-456-7890" />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Format: 123-456-7890</p>
            </div>
            <div className="mb-4">
              <label htmlFor="h5Url" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Website</label>
              <input type="url" id="h5Url" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 invalid:[&:not(:placeholder-shown)]:border-danger valid:[&:not(:placeholder-shown)]:border-success" placeholder="https://example.com" />
            </div>
            <button type="submit" className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">Submit</button>
          </form>
        </AppCard>

        <AppCard title="Validation States">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Valid Input</label>
              <input type="text" defaultValue="Correct value" className="w-full px-3 py-2 border border-success rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-success dark:text-gray-200" />
              <p className="mt-1 text-xs text-success flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Looks good!
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Invalid Input</label>
              <input type="text" defaultValue="Wrong" className="w-full px-3 py-2 border border-danger rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-danger dark:text-gray-200" />
              <p className="mt-1 text-xs text-danger flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> Please enter at least 5 characters.
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Warning Input</label>
              <input type="text" defaultValue="Maybe" className="w-full px-3 py-2 border border-warning rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-warning dark:text-gray-200" />
              <p className="mt-1 text-xs text-warning flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" /> This value could cause issues.
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Valid Select</label>
              <select className="w-full px-3 py-2 border border-success rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-success dark:text-gray-200">
                <option value="1">Valid option selected</option>
              </select>
              <p className="mt-1 text-xs text-success flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Great choice!
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Invalid Textarea</label>
              <textarea rows={2} className="w-full px-3 py-2 border border-danger rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-danger dark:text-gray-200 resize-y"></textarea>
              <p className="mt-1 text-xs text-danger flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> This field is required.
              </p>
            </div>
          </div>
        </AppCard>
      </div>

      {/* Real-time Validation & Complete Registration Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <AppCard title="Real-time Validation">
          <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted!') }}>
            <div className="mb-4">
              <label htmlFor="rtUsername" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Username</label>
              <input
                type="text"
                id="rtUsername"
                value={rt.username}
                onBlur={() => updateRt('usernameTouched', true)}
                onChange={(e) => { updateRt('username', e.target.value); updateRt('usernameTouched', true) }}
                className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 ${
                  rt.usernameTouched && usernameValid ? 'border-success focus:ring-success' : ''
                } ${usernameError ? 'border-danger focus:ring-danger' : ''}`}
                placeholder="Enter username"
              />
              {usernameError && <p className="mt-1 text-xs text-danger">{usernameError}</p>}
              {rt.usernameTouched && usernameValid && <p className="mt-1 text-xs text-success">Username is available!</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="rtEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="rtEmail"
                value={rt.email}
                onBlur={() => updateRt('emailTouched', true)}
                onChange={(e) => { updateRt('email', e.target.value); updateRt('emailTouched', true) }}
                className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 ${
                  rt.emailTouched && emailValid ? 'border-success focus:ring-success' : ''
                } ${emailError ? 'border-danger focus:ring-danger' : ''}`}
                placeholder="Enter email"
              />
              {emailError && <p className="mt-1 text-xs text-danger">{emailError}</p>}
              {rt.emailTouched && emailValid && <p className="mt-1 text-xs text-success">Valid email format!</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="rtPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
              <input
                type="password"
                id="rtPassword"
                value={rt.password}
                onBlur={() => updateRt('passwordTouched', true)}
                onChange={(e) => { updateRt('password', e.target.value); updateRt('passwordTouched', true) }}
                className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 ${
                  rt.passwordTouched && passwordValid ? 'border-success focus:ring-success' : ''
                } ${passwordError ? 'border-danger focus:ring-danger' : ''}`}
                placeholder="Enter password"
              />
              {passwordError && <p className="mt-1 text-xs text-danger">{passwordError}</p>}
              {/* Password strength indicator */}
              {rt.password.length > 0 && (
                <div className="mt-2">
                  <div className="flex gap-1 mb-1">
                    <div className={`h-1 flex-1 rounded-full ${passwordStrength === 'weak' ? 'bg-danger' : passwordStrength === 'medium' ? 'bg-warning' : passwordStrength === 'strong' ? 'bg-success' : 'bg-gray-200 dark:bg-gray-600'}`}></div>
                    <div className={`h-1 flex-1 rounded-full ${passwordStrength === 'medium' ? 'bg-warning' : passwordStrength === 'strong' ? 'bg-success' : 'bg-gray-200 dark:bg-gray-600'}`}></div>
                    <div className={`h-1 flex-1 rounded-full ${passwordStrength === 'strong' ? 'bg-success' : 'bg-gray-200 dark:bg-gray-600'}`}></div>
                  </div>
                  <p className={`text-xs ${
                    passwordStrength === 'weak' ? 'text-danger' :
                    passwordStrength === 'medium' ? 'text-warning' :
                    passwordStrength === 'strong' ? 'text-success' : ''
                  }`}>
                    {passwordStrength ? passwordStrength.charAt(0).toUpperCase() + passwordStrength.slice(1) + ' password' : ''}
                  </p>
                </div>
              )}
            </div>
            <button
              type="submit"
              disabled={!rtFormValid}
              className={`px-4 py-2 text-white text-sm font-medium rounded-md transition-colors ${
                rtFormValid ? 'bg-primary hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
              }`}
            >Submit</button>
          </form>
        </AppCard>

        <AppCard title="Complete Registration Form">
          <form onSubmit={submitReg}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name <span className="text-danger">*</span></label>
                <input
                  type="text"
                  value={regForm.firstName}
                  onChange={(e) => updateReg('firstName', e.target.value)}
                  className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 ${
                    regSubmitted && regErrors.firstName ? 'border-danger focus:ring-danger' : regSubmitted && !regErrors.firstName ? 'border-success focus:ring-success' : ''
                  }`}
                  placeholder="John"
                />
                {regSubmitted && regErrors.firstName && <p className="mt-1 text-xs text-danger">{regErrors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name <span className="text-danger">*</span></label>
                <input
                  type="text"
                  value={regForm.lastName}
                  onChange={(e) => updateReg('lastName', e.target.value)}
                  className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 ${
                    regSubmitted && regErrors.lastName ? 'border-danger focus:ring-danger' : regSubmitted && !regErrors.lastName ? 'border-success focus:ring-success' : ''
                  }`}
                  placeholder="Doe"
                />
                {regSubmitted && regErrors.lastName && <p className="mt-1 text-xs text-danger">{regErrors.lastName}</p>}
              </div>
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email <span className="text-danger">*</span></label>
              <input
                type="email"
                value={regForm.email}
                onChange={(e) => updateReg('email', e.target.value)}
                className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 ${
                  regSubmitted && regErrors.email ? 'border-danger focus:ring-danger' : regSubmitted && !regErrors.email ? 'border-success focus:ring-success' : ''
                }`}
                placeholder="john@example.com"
              />
              {regSubmitted && regErrors.email && <p className="mt-1 text-xs text-danger">{regErrors.email}</p>}
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
              <input
                type="tel"
                value={regForm.phone}
                onChange={(e) => updateReg('phone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200"
                placeholder="123-456-7890"
              />
            </div>
            <div className="grid grid-cols-6 gap-3 mb-3">
              <div className="col-span-3">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">City <span className="text-danger">*</span></label>
                <input
                  type="text"
                  value={regForm.city}
                  onChange={(e) => updateReg('city', e.target.value)}
                  className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 ${
                    regSubmitted && regErrors.city ? 'border-danger focus:ring-danger' : regSubmitted && !regErrors.city ? 'border-success focus:ring-success' : ''
                  }`}
                  placeholder="New York"
                />
                {regSubmitted && regErrors.city && <p className="mt-1 text-xs text-danger">{regErrors.city}</p>}
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">State <span className="text-danger">*</span></label>
                <select
                  value={regForm.state}
                  onChange={(e) => updateReg('state', e.target.value)}
                  className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 ${
                    regSubmitted && regErrors.state ? 'border-danger focus:ring-danger' : regSubmitted && !regErrors.state ? 'border-success focus:ring-success' : ''
                  }`}
                >
                  <option value="">Choose...</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                  <option value="TX">Texas</option>
                  <option value="FL">Florida</option>
                </select>
                {regSubmitted && regErrors.state && <p className="mt-1 text-xs text-danger">{regErrors.state}</p>}
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Zip <span className="text-danger">*</span></label>
                <input
                  type="text"
                  value={regForm.zip}
                  onChange={(e) => updateReg('zip', e.target.value)}
                  className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 ${
                    regSubmitted && regErrors.zip ? 'border-danger focus:ring-danger' : regSubmitted && !regErrors.zip ? 'border-success focus:ring-success' : ''
                  }`}
                  placeholder="10001"
                />
                {regSubmitted && regErrors.zip && <p className="mt-1 text-xs text-danger">{regErrors.zip}</p>}
              </div>
            </div>
            <div className="mb-4">
              <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input type="checkbox" checked={regForm.agree} onChange={(e) => updateReg('agree', e.target.checked)} className="w-4 h-4 accent-primary rounded border-gray-300" /> I agree to the <a href="#" className="text-primary hover:underline">terms and conditions</a>
              </label>
              {regSubmitted && regErrors.agree && <p className="mt-1 text-xs text-danger">{regErrors.agree}</p>}
            </div>
            <button type="submit" className="px-4 py-2 bg-success text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors">Register</button>
          </form>
        </AppCard>
      </div>

    </div>
  )
}
