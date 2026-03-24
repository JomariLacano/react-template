import { useState, useMemo } from 'react'
import { Search, Mail, Phone, MessageCircle, Globe, Code2, Briefcase } from 'lucide-react'

interface Contact {
  name: string
  role: string
  email: string
  phone: string
  avatar: string
  social: { twitter: boolean; github: boolean; linkedin: boolean }
}

const contacts: Contact[] = [
  { name: 'Alexander Pierce', role: 'Software Engineer', email: 'alex.pierce@example.com', phone: '+1 (555) 012-3456', avatar: '/assets/img/user1-128x128.jpg', social: { twitter: true, github: true, linkedin: true } },
  { name: 'Sarah Johnson', role: 'UI/UX Designer', email: 'sarah.j@example.com', phone: '+1 (555) 234-5678', avatar: '/assets/img/user3-128x128.jpg', social: { twitter: true, github: false, linkedin: true } },
  { name: 'Michael Chen', role: 'Project Manager', email: 'm.chen@example.com', phone: '+1 (555) 345-6789', avatar: '/assets/img/user4-128x128.jpg', social: { twitter: false, github: true, linkedin: true } },
  { name: 'Emily Davis', role: 'Data Analyst', email: 'emily.d@example.com', phone: '+1 (555) 456-7890', avatar: '/assets/img/user5-128x128.jpg', social: { twitter: true, github: true, linkedin: false } },
  { name: 'Robert Wilson', role: 'DevOps Engineer', email: 'r.wilson@example.com', phone: '+1 (555) 567-8901', avatar: '/assets/img/user6-128x128.jpg', social: { twitter: false, github: true, linkedin: true } },
  { name: 'Jessica Martinez', role: 'Marketing Lead', email: 'j.martinez@example.com', phone: '+1 (555) 678-9012', avatar: '/assets/img/user7-128x128.jpg', social: { twitter: true, github: false, linkedin: true } },
  { name: 'Daniel Thompson', role: 'Backend Developer', email: 'd.thompson@example.com', phone: '+1 (555) 789-0123', avatar: '/assets/img/user8-128x128.jpg', social: { twitter: true, github: true, linkedin: true } },
  { name: 'Amanda Brown', role: 'QA Engineer', email: 'a.brown@example.com', phone: '+1 (555) 890-1234', avatar: '/assets/img/user1-128x128.jpg', social: { twitter: false, github: true, linkedin: false } },
]

export default function ContactsPage() {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    if (!search) return contacts
    const q = search.toLowerCase()
    return contacts.filter(
      c => c.name.toLowerCase().includes(q) || c.role.toLowerCase().includes(q) || c.email.toLowerCase().includes(q)
    )
  }, [search])

  return (
    <>
      {/* Search Bar */}
      <div className="mb-4">
        <div className="relative max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search contacts..."
            className="w-full pl-9 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
        {filtered.map((contact, i) => (
          <div key={i} className="card text-center">
            <div className="card-body pt-6">
              <img src={contact.avatar} alt={contact.name} className="w-20 h-20 rounded-full mx-auto mb-3 border-2 border-gray-200 dark:border-gray-700" />
              <h4 className="font-semibold text-base">{contact.name}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{contact.role}</p>

              <div className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-gray-400" />
                  <span className="truncate text-xs">{contact.email}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-xs">{contact.phone}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-2 mb-4">
                {contact.social.twitter && (
                  <a href="#" className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-600 flex items-center justify-center hover:bg-sky-200 dark:hover:bg-sky-900/50 transition">
                    <Globe className="w-3.5 h-3.5" />
                  </a>
                )}
                {contact.social.github && (
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                    <Code2 className="w-3.5 h-3.5" />
                  </a>
                )}
                {contact.social.linkedin && (
                  <a href="#" className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-900/50 transition">
                    <Briefcase className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 justify-center pt-3 border-t border-gray-100 dark:border-gray-700">
                <button className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition inline-flex items-center gap-1">
                  <Mail className="w-3 h-3" /> Email
                </button>
                <button className="px-3 py-1.5 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition inline-flex items-center gap-1">
                  <Phone className="w-3 h-3" /> Call
                </button>
                <button className="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-xs rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition inline-flex items-center gap-1">
                  <MessageCircle className="w-3 h-3" /> Chat
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
