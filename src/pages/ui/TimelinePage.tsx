import AppCard from '../../components/widgets/AppCard'
import {
  Mail, Check, AlertTriangle, X, Info, Clock, Image, Tag, BarChart3,
  List, MessageCircle, Eye
} from 'lucide-react'

export default function TimelinePage() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">

        {/* Basic Timeline */}
        <AppCard title="Basic Timeline">
          <ul className="timeline">
            {/* Time label */}
            <li className="time-label">
              <span>10 Feb. 2025</span>
            </li>

            {/* Timeline item 1 */}
            <li>
              <div className="timeline-item">
                <div className="timeline-icon bg-primary">
                  <Mail className="w-3 h-3" />
                </div>
                <div className="timeline-header">
                  <a href="#">Support Team</a> sent you an email
                  <span className="time"><Clock className="w-3 h-3 inline mr-1" />5 mins ago</span>
                </div>
                <div className="timeline-body">
                  Your request has been received and is being reviewed. Our team will get back to you within 24 hours.
                </div>
                <div className="timeline-footer">
                  <a href="#" className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700">Read More</a>
                </div>
              </div>
            </li>

            {/* Timeline item 2 */}
            <li>
              <div className="timeline-item">
                <div className="timeline-icon bg-success">
                  <Check className="w-3 h-3" />
                </div>
                <div className="timeline-header">
                  <a href="#">John Doe</a> completed a task
                  <span className="time"><Clock className="w-3 h-3 inline mr-1" />2 hours ago</span>
                </div>
                <div className="timeline-body">
                  The quarterly report has been finalized and submitted for review.
                </div>
              </div>
            </li>

            {/* Timeline item 3 */}
            <li>
              <div className="timeline-item">
                <div className="timeline-icon bg-warning">
                  <AlertTriangle className="w-3 h-3" />
                </div>
                <div className="timeline-header">
                  System generated a <a href="#">warning alert</a>
                  <span className="time"><Clock className="w-3 h-3 inline mr-1" />4 hours ago</span>
                </div>
                <div className="timeline-body">
                  Server load exceeded 80% threshold. Auto-scaling triggered to handle increased traffic.
                </div>
              </div>
            </li>

            {/* Time label */}
            <li className="time-label">
              <span>9 Feb. 2025</span>
            </li>

            {/* Timeline item 4 */}
            <li>
              <div className="timeline-item">
                <div className="timeline-icon bg-danger">
                  <X className="w-3 h-3" />
                </div>
                <div className="timeline-header">
                  <a href="#">Admin</a> deleted a user account
                  <span className="time"><Clock className="w-3 h-3 inline mr-1" />1 day ago</span>
                </div>
                <div className="timeline-body">
                  User account "testuser42" was permanently removed from the system after inactivity period.
                </div>
              </div>
            </li>

            {/* Timeline item 5 */}
            <li>
              <div className="timeline-item">
                <div className="timeline-icon bg-info">
                  <Info className="w-3 h-3" />
                </div>
                <div className="timeline-header">
                  <a href="#">System</a> performed maintenance
                  <span className="time"><Clock className="w-3 h-3 inline mr-1" />1 day ago</span>
                </div>
                <div className="timeline-body">
                  Scheduled database optimization completed successfully. No downtime occurred.
                </div>
              </div>
            </li>
          </ul>
        </AppCard>

        {/* Timeline with Mixed Content */}
        <AppCard title="Timeline with Mixed Content">
          <ul className="timeline">
            <li className="time-label">
              <span>Today</span>
            </li>

            {/* Item with image */}
            <li>
              <div className="timeline-item">
                <div className="timeline-icon bg-primary">
                  <Image className="w-3 h-3" />
                </div>
                <div className="timeline-header">
                  <a href="#">Sarah</a> uploaded new photos
                  <span className="time"><Clock className="w-3 h-3 inline mr-1" />30 mins ago</span>
                </div>
                <div className="timeline-body">
                  <p className="mb-2">New product images for the spring catalog.</p>
                  <div className="flex gap-2">
                    <div className="w-16 h-16 rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <Image className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="w-16 h-16 rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <Image className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="w-16 h-16 rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <Image className="w-6 h-6 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Item with badges */}
            <li>
              <div className="timeline-item">
                <div className="timeline-icon bg-success">
                  <Tag className="w-3 h-3" />
                </div>
                <div className="timeline-header">
                  <a href="#">Project</a> tags updated
                  <span className="time"><Clock className="w-3 h-3 inline mr-1" />1 hour ago</span>
                </div>
                <div className="timeline-body">
                  <p className="mb-2">New labels assigned to Project Alpha:</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-600 text-white">Frontend</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-600 text-white">In Progress</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-500 text-gray-900">Priority</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-600 text-white">Urgent</span>
                  </div>
                </div>
              </div>
            </li>

            <li className="time-label">
              <span>Yesterday</span>
            </li>

            {/* Item with progress */}
            <li>
              <div className="timeline-item">
                <div className="timeline-icon bg-info">
                  <BarChart3 className="w-3 h-3" />
                </div>
                <div className="timeline-header">
                  <a href="#">Sprint Review</a> completed
                  <span className="time"><Clock className="w-3 h-3 inline mr-1" />Yesterday</span>
                </div>
                <div className="timeline-body">
                  <p className="mb-2">Sprint progress: 85% of planned stories completed.</p>
                  <div className="progress progress-sm mb-2">
                    <div className="progress-bar bg-success" style={{ width: '85%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500">17 of 20 stories done</p>
                </div>
                <div className="timeline-footer">
                  <a href="#" className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-500 text-gray-900 text-xs rounded hover:bg-cyan-600">
                    <Eye className="w-3 h-3" /> View Report
                  </a>
                </div>
              </div>
            </li>

            {/* Item with list */}
            <li>
              <div className="timeline-item">
                <div className="timeline-icon bg-secondary">
                  <List className="w-3 h-3" />
                </div>
                <div className="timeline-header">
                  <a href="#">Meeting Notes</a> shared
                  <span className="time"><Clock className="w-3 h-3 inline mr-1" />Yesterday</span>
                </div>
                <div className="timeline-body">
                  <p className="mb-2 font-medium">Action items from team standup:</p>
                  <ul className="list-disc list-inside text-xs space-y-1 text-gray-600 dark:text-gray-400">
                    <li>Review pull requests by EOD</li>
                    <li>Update deployment documentation</li>
                    <li>Schedule client demo for next week</li>
                    <li>Fix critical bug in authentication module</li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Item with comment thread */}
            <li>
              <div className="timeline-item">
                <div className="timeline-icon bg-warning">
                  <MessageCircle className="w-3 h-3" />
                </div>
                <div className="timeline-header">
                  <a href="#">Discussion</a> on feature request
                  <span className="time"><Clock className="w-3 h-3 inline mr-1" />2 days ago</span>
                </div>
                <div className="timeline-body">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shrink-0">J</div>
                      <div className="bg-gray-50 dark:bg-gray-700 rounded p-2 text-xs flex-1">
                        <span className="font-semibold">John:</span> We should add dark mode support to the dashboard.
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold shrink-0">S</div>
                      <div className="bg-gray-50 dark:bg-gray-700 rounded p-2 text-xs flex-1">
                        <span className="font-semibold">Sarah:</span> Agreed! I can start on the CSS variables this sprint.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="timeline-footer">
                  <a href="#" className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-500 text-gray-900 text-xs rounded hover:bg-yellow-600">
                    <MessageCircle className="w-3 h-3" /> Reply
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </AppCard>

      </div>
    </div>
  )
}
