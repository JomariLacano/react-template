import { useState } from 'react'
import {
  UserPlus, Mail, Briefcase, GraduationCap, MapPin, Calendar, Globe,
  Activity, Settings, MessageCircle, GitPullRequest, Clock, Star, Upload, Bug
} from 'lucide-react'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'activity' | 'settings'>('activity')

  const skills = [
    { name: 'JavaScript / TypeScript', pct: 95, color: 'bg-primary' },
    { name: 'PHP / Laravel', pct: 90, color: 'bg-success' },
    { name: 'Python', pct: 75, color: 'bg-warning' },
    { name: 'UI / UX Design', pct: 65, color: 'bg-info' },
    { name: 'DevOps / CI/CD', pct: 80, color: 'bg-danger' },
  ]

  const [form, setForm] = useState({
    firstName: 'JL',
    lastName: 'Tempate',
    email: 'jl.tempate@example.com',
    bio: 'Full-stack developer with 10+ years of experience building web applications.',
    location: 'San Francisco, California',
    website: 'https://jltempate.dev',
  })

  function updateForm(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <>
      {/* Cover / Banner */}
      <div className="card overflow-hidden mb-4">
        <div className="h-48 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 relative">
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <div className="card-body relative -mt-16 pb-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4">
            <img src="/assets/img/user2-160x160.jpg" alt="User Avatar" className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg" />
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl font-bold">JL Tempate</h2>
              <p className="text-gray-500 dark:text-gray-400">Senior Software Engineer</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">
                <UserPlus className="w-4 h-4 inline mr-1" /> Follow
              </button>
              <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-sm rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                <Mail className="w-4 h-4 inline mr-1" /> Message
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center sm:justify-start gap-8 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <div className="text-xl font-bold text-blue-600">1,247</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Posts</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-blue-600">8,394</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-blue-600">542</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Following</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">

        {/* Left Column: About */}
        <div className="lg:col-span-1 space-y-4">

          {/* About Me Card */}
          <div className="card">
            <div className="card-header"><h3 className="card-title">About Me</h3></div>
            <div className="card-body text-sm">
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Full-stack developer with 10+ years of experience building web applications. Passionate about clean code, user experience, and open-source contributions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Briefcase className="w-4 h-4 text-gray-400" />
                  <span>Software Engineer at <strong>Tech Corp</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-gray-400" />
                  <span>B.Sc. in Computer Science, <strong>MIT</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>San Francisco, California</span>
                </li>
                <li className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>Member since <strong>Jan 2019</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-gray-400" />
                  <a href="#" className="text-blue-600 hover:underline">jltempate.dev</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Skills Card */}
          <div className="card">
            <div className="card-header"><h3 className="card-title">Skills</h3></div>
            <div className="card-body">
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-gray-500">{skill.pct}%</span>
                    </div>
                    <div className="progress progress-sm">
                      <div className={`progress-bar ${skill.color}`} style={{ width: `${skill.pct}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Notes Card */}
          <div className="card">
            <div className="card-header"><h3 className="card-title">Notes</h3></div>
            <div className="card-body text-sm text-gray-600 dark:text-gray-400">
              <p>Available for freelance projects. Preferred communication via email. Currently working on open-source admin dashboard templates.</p>
            </div>
          </div>

        </div>

        {/* Right Column: Activity & Tabs */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="card-header border-b-0">
              <ul className="flex gap-4 border-b border-gray-200 dark:border-gray-700 -mb-px">
                <li>
                  <button onClick={() => setActiveTab('activity')}
                    className={`py-2 px-1 border-b-2 text-sm font-medium transition ${activeTab === 'activity' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}>
                    <Activity className="w-4 h-4 inline mr-1" /> Activity
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('settings')}
                    className={`py-2 px-1 border-b-2 text-sm font-medium transition ${activeTab === 'settings' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}>
                    <Settings className="w-4 h-4 inline mr-1" /> Settings
                  </button>
                </li>
              </ul>
            </div>

            {/* Activity Tab */}
            <div className="card-body" style={{ display: activeTab === 'activity' ? 'block' : 'none' }}>
              <ul className="timeline">
                <li className="time-label"><span>Today</span></li>
                <li>
                  <div className="timeline-item">
                    <div className="timeline-icon bg-primary">
                      <MessageCircle className="w-3 h-3" />
                    </div>
                    <div className="timeline-header">
                      Commented on <a href="#">Project Alpha</a>
                      <span className="time"><Clock className="w-3 h-3 inline mr-1" />25 mins ago</span>
                    </div>
                    <div className="timeline-body">
                      Looks great! The new dashboard layout is much cleaner. Let's ship this in the next release.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-item">
                    <div className="timeline-icon bg-success">
                      <GitPullRequest className="w-3 h-3" />
                    </div>
                    <div className="timeline-header">
                      Merged pull request <a href="#">#482</a>
                      <span className="time"><Clock className="w-3 h-3 inline mr-1" />2 hours ago</span>
                    </div>
                    <div className="timeline-body">
                      feat: Add dark mode toggle to navigation bar
                    </div>
                  </div>
                </li>
                <li className="time-label"><span>Yesterday</span></li>
                <li>
                  <div className="timeline-item">
                    <div className="timeline-icon bg-warning">
                      <Star className="w-3 h-3" />
                    </div>
                    <div className="timeline-header">
                      Starred repository <a href="#">jl-tempate/core</a>
                      <span className="time"><Clock className="w-3 h-3 inline mr-1" />1 day ago</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-item">
                    <div className="timeline-icon bg-info">
                      <Upload className="w-3 h-3" />
                    </div>
                    <div className="timeline-header">
                      Uploaded 4 new photos to <a href="#">Spring Campaign</a>
                      <span className="time"><Clock className="w-3 h-3 inline mr-1" />1 day ago</span>
                    </div>
                    <div className="timeline-body">
                      <div className="flex gap-2 mt-2">
                        <img src="/assets/img/photo1.png" alt="Photo" className="w-16 h-16 rounded object-cover" />
                        <img src="/assets/img/photo2.png" alt="Photo" className="w-16 h-16 rounded object-cover" />
                        <img src="/assets/img/photo3.jpg" alt="Photo" className="w-16 h-16 rounded object-cover" />
                        <img src="/assets/img/photo4.jpg" alt="Photo" className="w-16 h-16 rounded object-cover" />
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-item">
                    <div className="timeline-icon bg-danger">
                      <Bug className="w-3 h-3" />
                    </div>
                    <div className="timeline-header">
                      Reported a bug in <a href="#">authentication module</a>
                      <span className="time"><Clock className="w-3 h-3 inline mr-1" />2 days ago</span>
                    </div>
                    <div className="timeline-body">
                      Session tokens are not being properly invalidated on logout when using the "Remember Me" feature.
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Settings Tab */}
            <div className="card-body" style={{ display: activeTab === 'settings' ? 'block' : 'none' }}>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">First Name</label>
                      <input type="text" value={form.firstName} onChange={(e) => updateForm('firstName', e.target.value)} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Last Name</label>
                      <input type="text" value={form.lastName} onChange={(e) => updateForm('lastName', e.target.value)} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" value={form.email} onChange={(e) => updateForm('email', e.target.value)} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Bio</label>
                    <textarea rows={3} value={form.bio} onChange={(e) => updateForm('bio', e.target.value)} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Location</label>
                    <input type="text" value={form.location} onChange={(e) => updateForm('location', e.target.value)} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Website</label>
                    <input type="url" value={form.website} onChange={(e) => updateForm('website', e.target.value)} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="pt-2">
                    <button type="button" className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">Save Changes</button>
                    <button type="button" className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-sm rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition ml-2">Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
