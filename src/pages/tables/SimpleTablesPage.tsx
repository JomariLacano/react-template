import { Pencil, Trash2 } from 'lucide-react'
import AppCard from '@/components/widgets/AppCard'

export default function SimpleTablesPage() {
  return (
    <div className="w-full px-4">

      {/* Default & Striped */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <AppCard title="Default Table">
          <div className="-mx-5 -mb-5 -mt-1">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Role</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-700">
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3">John Doe</td>
                  <td className="px-4 py-3">john@example.com</td>
                  <td className="px-4 py-3">Admin</td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <td className="px-4 py-3">2</td>
                  <td className="px-4 py-3">Jane Smith</td>
                  <td className="px-4 py-3">jane@example.com</td>
                  <td className="px-4 py-3">Editor</td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <td className="px-4 py-3">3</td>
                  <td className="px-4 py-3">Bob Wilson</td>
                  <td className="px-4 py-3">bob@example.com</td>
                  <td className="px-4 py-3">User</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">4</td>
                  <td className="px-4 py-3">Alice Brown</td>
                  <td className="px-4 py-3">alice@example.com</td>
                  <td className="px-4 py-3">User</td>
                </tr>
              </tbody>
            </table>
          </div>
        </AppCard>

        <AppCard title="Striped Rows">
          <div className="-mx-5 -mb-5 -mt-1">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Product</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Stock</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, product: 'Laptop Pro 15', price: '$1,299.00', stock: '45' },
                  { id: 2, product: 'Wireless Mouse', price: '$29.99', stock: '230' },
                  { id: 3, product: 'USB-C Hub', price: '$49.99', stock: '112' },
                  { id: 4, product: 'Mechanical Keyboard', price: '$89.99', stock: '78' },
                  { id: 5, product: 'Monitor 27"', price: '$399.99', stock: '22' },
                ].map((row) => (
                  <tr key={row.id} className="even:bg-gray-50 dark:even:bg-gray-700/50">
                    <td className="px-4 py-3">{row.id}</td>
                    <td className="px-4 py-3">{row.product}</td>
                    <td className="px-4 py-3">{row.price}</td>
                    <td className="px-4 py-3">{row.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AppCard>
      </div>

      {/* Bordered & Hover */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <AppCard title="Bordered Table">
          <div className="-mx-5 -mb-5 -mt-1">
            <table className="w-full text-sm text-left border border-gray-300 dark:border-gray-700">
              <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-3 border border-gray-300 dark:border-gray-700">#</th>
                  <th className="px-4 py-3 border border-gray-300 dark:border-gray-700">Task</th>
                  <th className="px-4 py-3 border border-gray-300 dark:border-gray-700">Status</th>
                  <th className="px-4 py-3 border border-gray-300 dark:border-gray-700">Due Date</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, task: 'Design mockups', status: 'Complete', statusClass: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300', date: '2026-03-15' },
                  { id: 2, task: 'Frontend development', status: 'In Progress', statusClass: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300', date: '2026-04-01' },
                  { id: 3, task: 'API integration', status: 'Pending', statusClass: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300', date: '2026-04-15' },
                  { id: 4, task: 'Testing', status: 'Blocked', statusClass: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300', date: '2026-04-30' },
                ].map((row) => (
                  <tr key={row.id}>
                    <td className="px-4 py-3 border border-gray-300 dark:border-gray-700">{row.id}</td>
                    <td className="px-4 py-3 border border-gray-300 dark:border-gray-700">{row.task}</td>
                    <td className="px-4 py-3 border border-gray-300 dark:border-gray-700">
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${row.statusClass}`}>{row.status}</span>
                    </td>
                    <td className="px-4 py-3 border border-gray-300 dark:border-gray-700">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AppCard>

        <AppCard title="Hover Rows">
          <div className="-mx-5 -mb-5 -mt-1">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Country</th>
                  <th className="px-4 py-3">Capital</th>
                  <th className="px-4 py-3">Population</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, country: 'United States', capital: 'Washington D.C.', population: '331M', last: false },
                  { id: 2, country: 'Japan', capital: 'Tokyo', population: '126M', last: false },
                  { id: 3, country: 'Germany', capital: 'Berlin', population: '83M', last: false },
                  { id: 4, country: 'Brazil', capital: 'Brasilia', population: '212M', last: true },
                ].map((row) => (
                  <tr key={row.id} className={`${!row.last ? 'border-b dark:border-gray-700 ' : ''}hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer`}>
                    <td className="px-4 py-3">{row.id}</td>
                    <td className="px-4 py-3">{row.country}</td>
                    <td className="px-4 py-3">{row.capital}</td>
                    <td className="px-4 py-3">{row.population}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AppCard>
      </div>

      {/* Condensed & Responsive */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <AppCard title="Condensed / Small Table">
          <div className="-mx-5 -mb-5 -mt-1">
            <table className="w-full text-xs text-left">
              <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-3 py-2">#</th>
                  <th className="px-3 py-2">File</th>
                  <th className="px-3 py-2">Size</th>
                  <th className="px-3 py-2">Type</th>
                  <th className="px-3 py-2">Modified</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, file: 'report.pdf', size: '2.4 MB', type: 'PDF', modified: 'Mar 20, 2026' },
                  { id: 2, file: 'budget.xlsx', size: '540 KB', type: 'Excel', modified: 'Mar 18, 2026' },
                  { id: 3, file: 'photo.jpg', size: '1.8 MB', type: 'Image', modified: 'Mar 15, 2026' },
                  { id: 4, file: 'notes.txt', size: '12 KB', type: 'Text', modified: 'Mar 12, 2026' },
                  { id: 5, file: 'backup.zip', size: '45 MB', type: 'Archive', modified: 'Mar 10, 2026' },
                  { id: 6, file: 'app.js', size: '156 KB', type: 'JavaScript', modified: 'Mar 8, 2026' },
                ].map((row, idx, arr) => (
                  <tr key={row.id} className={idx < arr.length - 1 ? 'border-b dark:border-gray-700' : ''}>
                    <td className="px-3 py-1.5">{row.id}</td>
                    <td className="px-3 py-1.5">{row.file}</td>
                    <td className="px-3 py-1.5">{row.size}</td>
                    <td className="px-3 py-1.5">{row.type}</td>
                    <td className="px-3 py-1.5">{row.modified}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AppCard>

        <AppCard title="Responsive Table">
          <div className="-mx-5 -mb-5 -mt-1">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left min-w-[600px]">
                <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-4 py-3">#</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Department</th>
                    <th className="px-4 py-3">Position</th>
                    <th className="px-4 py-3">Salary</th>
                    <th className="px-4 py-3">Start Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: 1, name: 'Michael Johnson', dept: 'Engineering', pos: 'Senior Developer', salary: '$95,000', date: 'Jan 15, 2022' },
                    { id: 2, name: 'Sarah Williams', dept: 'Marketing', pos: 'Marketing Manager', salary: '$82,000', date: 'Mar 22, 2021' },
                    { id: 3, name: 'David Lee', dept: 'Design', pos: 'UX Designer', salary: '$78,000', date: 'Jun 10, 2023' },
                    { id: 4, name: 'Emily Chen', dept: 'Engineering', pos: 'DevOps Engineer', salary: '$90,000', date: 'Sep 5, 2022' },
                  ].map((row, idx, arr) => (
                    <tr key={row.id} className={idx < arr.length - 1 ? 'border-b dark:border-gray-700' : ''}>
                      <td className="px-4 py-3">{row.id}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{row.name}</td>
                      <td className="px-4 py-3">{row.dept}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{row.pos}</td>
                      <td className="px-4 py-3">{row.salary}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{row.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AppCard>
      </div>

      {/* Dark Table & Colored Rows */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <AppCard title="Dark Table">
          <div className="-mx-5 -mb-5 -mt-1">
            <table className="w-full text-sm text-left text-gray-200">
              <thead className="text-xs uppercase bg-gray-800">
                <tr>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Server</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Uptime</th>
                </tr>
              </thead>
              <tbody className="bg-gray-900">
                {[
                  { id: 1, server: 'web-prod-01', status: 'Online', statusColor: 'text-green-400', dotColor: 'bg-green-400', uptime: '99.98%' },
                  { id: 2, server: 'api-prod-01', status: 'Online', statusColor: 'text-green-400', dotColor: 'bg-green-400', uptime: '99.95%' },
                  { id: 3, server: 'db-prod-01', status: 'Degraded', statusColor: 'text-yellow-400', dotColor: 'bg-yellow-400', uptime: '98.20%' },
                  { id: 4, server: 'cache-prod-01', status: 'Offline', statusColor: 'text-red-400', dotColor: 'bg-red-400', uptime: '87.50%' },
                ].map((row, idx, arr) => (
                  <tr key={row.id} className={idx < arr.length - 1 ? 'border-b border-gray-700' : ''}>
                    <td className="px-4 py-3">{row.id}</td>
                    <td className="px-4 py-3">{row.server}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center gap-1 ${row.statusColor}`}>
                        <span className={`w-2 h-2 rounded-full ${row.dotColor}`}></span> {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">{row.uptime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AppCard>

        <AppCard title="Colored Table Rows">
          <div className="-mx-5 -mb-5 -mt-1">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Alert</th>
                  <th className="px-4 py-3">Severity</th>
                  <th className="px-4 py-3">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300">
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3">Deployment successful</td>
                  <td className="px-4 py-3">Info</td>
                  <td className="px-4 py-3">10:30 AM</td>
                </tr>
                <tr className="bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300">
                  <td className="px-4 py-3">2</td>
                  <td className="px-4 py-3">New user registered</td>
                  <td className="px-4 py-3">Notice</td>
                  <td className="px-4 py-3">11:15 AM</td>
                </tr>
                <tr className="bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300">
                  <td className="px-4 py-3">3</td>
                  <td className="px-4 py-3">High memory usage (85%)</td>
                  <td className="px-4 py-3">Warning</td>
                  <td className="px-4 py-3">12:00 PM</td>
                </tr>
                <tr className="bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300">
                  <td className="px-4 py-3">4</td>
                  <td className="px-4 py-3">Database connection failed</td>
                  <td className="px-4 py-3">Critical</td>
                  <td className="px-4 py-3">12:45 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </AppCard>
      </div>

      {/* Table Head Variants & Row Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <AppCard title="Table Head Variants">
          <div className="-mx-5 -mb-5 -mt-1 space-y-6">
            {/* Light head */}
            <div>
              <p className="px-4 pt-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Light Header</p>
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-100 dark:bg-gray-600">
                  <tr>
                    <th className="px-4 py-3">#</th>
                    <th className="px-4 py-3">Item</th>
                    <th className="px-4 py-3">Qty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-700">
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2">Widget A</td>
                    <td className="px-4 py-2">24</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">2</td>
                    <td className="px-4 py-2">Widget B</td>
                    <td className="px-4 py-2">18</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Dark head */}
            <div>
              <p className="px-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Dark Header</p>
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-white uppercase bg-gray-800 dark:bg-gray-900">
                  <tr>
                    <th className="px-4 py-3">#</th>
                    <th className="px-4 py-3">Item</th>
                    <th className="px-4 py-3">Qty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-700">
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2">Gadget X</td>
                    <td className="px-4 py-2">42</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">2</td>
                    <td className="px-4 py-2">Gadget Y</td>
                    <td className="px-4 py-2">35</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </AppCard>

        <AppCard title="Table with Row Actions">
          <div className="-mx-5 -mb-5 -mt-1">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">User</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, name: 'John Doe', email: 'john@example.com', avatar: 'assets/img/jl-user-01.svg', status: 'Active', statusClass: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300', last: false },
                  { id: 2, name: 'Jane Smith', email: 'jane@example.com', avatar: 'assets/img/jl-user-02.svg', status: 'Active', statusClass: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300', last: false },
                  { id: 3, name: 'Bob Wilson', email: 'bob@example.com', avatar: 'assets/img/jl-user-04.svg', status: 'Inactive', statusClass: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300', last: false },
                  { id: 4, name: 'Alice Brown', email: 'alice@example.com', avatar: 'assets/img/jl-user-06.svg', status: 'Banned', statusClass: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300', last: true },
                ].map((row) => (
                  <tr key={row.id} className={`${!row.last ? 'border-b dark:border-gray-700 ' : ''}hover:bg-gray-50 dark:hover:bg-gray-700`}>
                    <td className="px-4 py-3">{row.id}</td>
                    <td className="px-4 py-3 flex items-center gap-2">
                      <img src={row.avatar} alt={row.name} className="w-8 h-8 rounded-full" />
                      <div>
                        <p className="font-medium">{row.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{row.email}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${row.statusClass}`}>{row.status}</span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button className="inline-flex items-center px-2 py-1 text-xs font-medium text-primary bg-blue-50 dark:bg-blue-900/30 rounded hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors mr-1">
                        <Pencil className="w-3 h-3 mr-1" /> Edit
                      </button>
                      <button className="inline-flex items-center px-2 py-1 text-xs font-medium text-danger bg-red-50 dark:bg-red-900/30 rounded hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors">
                        <Trash2 className="w-3 h-3 mr-1" /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AppCard>
      </div>

    </div>
  )
}
