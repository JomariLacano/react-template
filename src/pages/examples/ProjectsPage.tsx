import { useState, useMemo } from 'react'
import { LayoutGrid, List, Calendar } from 'lucide-react'

interface Project {
  name: string
  desc: string
  status: 'active' | 'completed' | 'on-hold'
  progress: number
  deadline: string
  team: string[]
}

const projects: Project[] = [
  { name: 'JL Tempate Core', desc: 'Main dashboard framework with Tailwind CSS', status: 'active', progress: 78, deadline: 'Apr 15, 2026', team: ['assets/img/user1-128x128.jpg', 'assets/img/user3-128x128.jpg', 'assets/img/user5-128x128.jpg'] },
  { name: 'E-Commerce Module', desc: 'Product management and checkout flow', status: 'active', progress: 45, deadline: 'May 20, 2026', team: ['assets/img/user4-128x128.jpg', 'assets/img/user6-128x128.jpg'] },
  { name: 'Mobile App Redesign', desc: 'React Native mobile application overhaul', status: 'completed', progress: 100, deadline: 'Feb 28, 2026', team: ['assets/img/user1-128x128.jpg', 'assets/img/user7-128x128.jpg', 'assets/img/user8-128x128.jpg', 'assets/img/user3-128x128.jpg'] },
  { name: 'API Gateway v2', desc: 'Microservices API gateway with rate limiting', status: 'on-hold', progress: 32, deadline: 'Jun 10, 2026', team: ['assets/img/user5-128x128.jpg', 'assets/img/user6-128x128.jpg'] },
  { name: 'Analytics Dashboard', desc: 'Real-time analytics and reporting', status: 'active', progress: 62, deadline: 'Apr 30, 2026', team: ['assets/img/user1-128x128.jpg', 'assets/img/user4-128x128.jpg', 'assets/img/user8-128x128.jpg'] },
  { name: 'Design System', desc: 'Unified component library and style guide', status: 'completed', progress: 100, deadline: 'Jan 15, 2026', team: ['assets/img/user3-128x128.jpg', 'assets/img/user7-128x128.jpg'] },
  { name: 'CI/CD Pipeline', desc: 'Automated testing and deployment workflow', status: 'active', progress: 88, deadline: 'Mar 31, 2026', team: ['assets/img/user5-128x128.jpg'] },
  { name: 'Data Migration', desc: 'Legacy database migration to PostgreSQL', status: 'on-hold', progress: 15, deadline: 'Jul 01, 2026', team: ['assets/img/user6-128x128.jpg', 'assets/img/user8-128x128.jpg', 'assets/img/user1-128x128.jpg'] },
]

function statusColor(s: string): string {
  if (s === 'active') return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
  if (s === 'completed') return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
  return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
}

function progressColor(p: number): string {
  if (p >= 80) return 'bg-success'
  if (p >= 50) return 'bg-primary'
  if (p >= 30) return 'bg-warning'
  return 'bg-danger'
}

function statusLabel(s: string): string {
  return s.replace('-', ' ')
}

export default function ProjectsPage() {
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [filter, setFilter] = useState('all')

  const filteredProjects = useMemo(() =>
    filter === 'all' ? projects : projects.filter(p => p.status === filter),
    [filter]
  )

  return (
    <>
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setFilter('all')} className={`px-3 py-1.5 text-sm rounded transition ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>All</button>
          <button onClick={() => setFilter('active')} className={`px-3 py-1.5 text-sm rounded transition ${filter === 'active' ? 'bg-green-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>Active</button>
          <button onClick={() => setFilter('completed')} className={`px-3 py-1.5 text-sm rounded transition ${filter === 'completed' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>Completed</button>
          <button onClick={() => setFilter('on-hold')} className={`px-3 py-1.5 text-sm rounded transition ${filter === 'on-hold' ? 'bg-yellow-500 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>On Hold</button>
        </div>
        <div className="flex gap-1 bg-white dark:bg-gray-800 rounded p-0.5">
          <button onClick={() => setView('grid')} className={`p-1.5 rounded transition ${view === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-500'}`}>
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button onClick={() => setView('list')} className={`p-1.5 rounded transition ${view === 'list' ? 'bg-blue-600 text-white' : 'text-gray-500'}`}>
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Grid View */}
      <div style={{ display: view === 'grid' ? 'grid' : 'none' }} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
        {filteredProjects.map((project, i) => (
          <div key={i} className="card">
            <div className="card-body">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-semibold text-base">{project.name}</h4>
                <span className={`${statusColor(project.status)} px-2 py-0.5 text-xs rounded-full font-medium capitalize`}>{statusLabel(project.status)}</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{project.desc}</p>
              {/* Progress */}
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-500 dark:text-gray-400">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <div className="progress progress-sm">
                  <div className={`progress-bar ${progressColor(project.progress)}`} style={{ width: `${project.progress}%` }}></div>
                </div>
              </div>
              {/* Footer */}
              <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-700">
                <div className="flex -space-x-2">
                  {project.team.slice(0, 3).map((avatar, j) => (
                    <img key={j} src={avatar} className="w-7 h-7 rounded-full border-2 border-white dark:border-gray-800" alt="Team member" />
                  ))}
                  {project.team.length > 3 && (
                    <div className="w-7 h-7 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-xs font-medium">
                      +{project.team.length - 3}
                    </div>
                  )}
                </div>
                <div className="text-xs text-gray-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{project.deadline}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* List View */}
      <div style={{ display: view === 'list' ? 'block' : 'none' }} className="card mb-6">
        <div className="card-body p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="py-3 px-4 text-left font-semibold text-gray-500 dark:text-gray-400">Project</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-500 dark:text-gray-400">Team</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-500 dark:text-gray-400 hidden md:table-cell">Progress</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-500 dark:text-gray-400">Status</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-500 dark:text-gray-400 hidden sm:table-cell">Deadline</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((project, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-3 px-4">
                      <p className="font-medium">{project.name}</p>
                      <p className="text-xs text-gray-400">{project.desc}</p>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex -space-x-2">
                        {project.team.slice(0, 3).map((avatar, j) => (
                          <img key={j} src={avatar} className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800" alt="Team member" />
                        ))}
                        {project.team.length > 3 && (
                          <div className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-[10px] font-medium">
                            +{project.team.length - 3}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4 hidden md:table-cell">
                      <div className="flex items-center gap-2 min-w-[120px]">
                        <div className="progress progress-sm flex-1">
                          <div className={`progress-bar ${progressColor(project.progress)}`} style={{ width: `${project.progress}%` }}></div>
                        </div>
                        <span className="text-xs font-medium w-8">{project.progress}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`${statusColor(project.status)} px-2 py-0.5 text-xs rounded-full font-medium capitalize`}>{statusLabel(project.status)}</span>
                    </td>
                    <td className="py-3 px-4 text-xs text-gray-400 hidden sm:table-cell">{project.deadline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
