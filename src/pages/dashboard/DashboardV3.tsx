import { useState, useMemo } from 'react'
import {
  Clock, Mail, Check, AlertTriangle, UserPlus, Trash2, Plus,
} from 'lucide-react'
import SmallBox from '@/components/widgets/SmallBox'
import InfoBox from '@/components/widgets/InfoBox'
import AppCard from '@/components/widgets/AppCard'
import DoughnutChart from '@/components/charts/DoughnutChart'
import { useTodoList } from '@/hooks/useTodoList'
import type { ChartData, ChartOptions } from 'chart.js'
import type { TodoItem } from '@/types'

// -- Doughnut Chart data --
const doughnutData: ChartData<'doughnut'> = {
  labels: ['Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Other'],
  datasets: [
    {
      data: [35, 25, 20, 12, 8],
      backgroundColor: ['#0d6efd', '#198754', '#ffc107', '#dc3545', '#6c757d'],
      borderWidth: 3,
      hoverOffset: 8,
    },
  ],
}

const doughnutOptions: ChartOptions<'doughnut'> = {
  cutout: '60%',
  plugins: {
    legend: { display: false },
  },
}

const categoryLegend = [
  { label: 'Electronics', color: '#0d6efd', value: '35%' },
  { label: 'Clothing', color: '#198754', value: '25%' },
  { label: 'Home & Garden', color: '#ffc107', value: '20%' },
  { label: 'Sports', color: '#dc3545', value: '12%' },
  { label: 'Other', color: '#6c757d', value: '8%' },
]

// -- Todo List --
const initialTodos: TodoItem[] = [
  { id: 1, text: 'Review Q1 financial report', done: false, color: 'danger' },
  { id: 2, text: 'Update product inventory', done: true, color: 'warning' },
  { id: 3, text: 'Prepare marketing deck', done: false, color: 'primary' },
  { id: 4, text: 'Schedule team standup', done: true, color: 'success' },
  { id: 5, text: 'Deploy v2.3 hotfix', done: false, color: 'info' },
  { id: 6, text: 'Reply to client feedback', done: false, color: 'secondary' },
  { id: 7, text: 'Update SSL certificates', done: true, color: 'danger' },
  { id: 8, text: 'Optimize database queries', done: false, color: 'warning' },
]

// -- Timeline data --
const timeline = [
  {
    label: 'Today',
    items: [
      {
        icon: Mail,
        iconBg: 'bg-primary',
        header: '<a href="#">Sarah</a> sent you a message',
        time: '12 mins ago',
        body: 'Can you review the quarterly report before the meeting?',
      },
      {
        icon: Check,
        iconBg: 'bg-success',
        header: 'Order <a href="#">#ORD-7841</a> completed',
        time: '1 hr ago',
        body: 'Payment of $2,499.00 has been confirmed.',
      },
      {
        icon: AlertTriangle,
        iconBg: 'bg-warning',
        header: 'Server load warning',
        time: '2 hrs ago',
        body: 'CPU usage reached 89% on web-server-03. Auto-scaling triggered.',
      },
    ],
  },
  {
    label: 'Yesterday',
    items: [
      {
        icon: UserPlus,
        iconBg: 'bg-info',
        header: '5 new users registered',
        time: 'Yesterday',
        body: 'New signups from the social media campaign are performing well.',
      },
      {
        icon: Trash2,
        iconBg: 'bg-danger',
        header: 'Product <a href="#">SKU-4521</a> removed',
        time: 'Yesterday',
        body: 'Discontinued item removed from catalog by admin.',
      },
    ],
  },
]

export default function DashboardV3() {
  const { items: todos, remaining, newItem, setNewItem, addItem, toggleItem } = useTodoList(initialTodos)

  return (
    <>
      {/* Small Stat Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <SmallBox bgColor="bg-info" value="1,250" label="Total Products" icon="package" linkText="Manage products" />
        <SmallBox bgColor="bg-success" value="$32.5k" label="Monthly Revenue" icon="wallet" linkText="View report" />
        <SmallBox bgColor="bg-danger" value={18} label="Pending Tickets" icon="ticket" linkText="View tickets" />
        <SmallBox bgColor="bg-warning" value="87%" label="Satisfaction Rate" icon="smile" linkText="View reviews" />
      </div>

      {/* Middle Row: Chart + Todo + Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
        {/* Doughnut Chart */}
        <div className="lg:col-span-4">
          <AppCard title="Sales by Category" icon="pie-chart" interactive>
            <div className="relative mx-auto" style={{ maxWidth: '260px' }}>
              <DoughnutChart data={doughnutData} options={doughnutOptions} height={260} />
            </div>
            <div className="mt-4 space-y-2 text-sm">
              {categoryLegend.map((cat) => (
                <div key={cat.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }}></span>
                    <span>{cat.label}</span>
                  </div>
                  <span className="font-semibold">{cat.value}</span>
                </div>
              ))}
            </div>
          </AppCard>
        </div>

        {/* Todo List Widget */}
        <div className="lg:col-span-4">
          <AppCard
            header={
              <div className="flex items-center justify-between w-full">
                <h3 className="card-title">
                  <Check className="inline w-4 h-4 mr-1" />
                  Todo List
                </h3>
                <div className="card-tools">
                  <span className="text-xs mr-2">{remaining} pending</span>
                </div>
              </div>
            }
            footer={
              <div className="flex gap-2">
                <input
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  type="text"
                  placeholder="Add a new task..."
                  className="flex-1 px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded bg-transparent focus:border-primary focus:outline-none"
                  onKeyDown={(e) => { if (e.key === 'Enter') addItem() }}
                />
                <button
                  className="px-3 py-1.5 text-sm bg-primary text-white rounded hover:bg-blue-700 transition-colors"
                  onClick={addItem}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            }
          >
            <div className="-mx-4 -my-4">
              <ul className="divide-y divide-gray-100 dark:divide-gray-700/50">
                {todos.map((todo) => (
                  <li
                    key={todo.id}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={todo.done}
                      className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 accent-[var(--color-primary)]"
                      onChange={() => toggleItem(todo.id)}
                    />
                    <span
                      className={`flex-1 text-sm${todo.done ? ' line-through text-gray-400' : ''}`}
                    >{todo.text}</span>
                    <span
                      className="inline-block w-2 h-2 rounded-full"
                      style={{ backgroundColor: `var(--color-${todo.color})` }}
                    ></span>
                  </li>
                ))}
              </ul>
            </div>
          </AppCard>
        </div>

        {/* Timeline of Recent Activity */}
        <div className="lg:col-span-4">
          <AppCard title="Recent Activity" icon="clock" interactive>
            <div style={{ maxHeight: '460px', overflowY: 'auto' }}>
              <ul className="timeline">
                {timeline.map((section, sIndex) => (
                  <li key={sIndex}>
                    <li className="time-label">
                      <span>{section.label}</span>
                    </li>
                    {section.items.map((item, iIndex) => {
                      const Icon = item.icon
                      return (
                        <li key={`${sIndex}-${iIndex}`}>
                          <div className="timeline-item">
                            <span className={`timeline-icon ${item.iconBg}`}>
                              <Icon className="w-3 h-3" />
                            </span>
                            <div className="timeline-header">
                              <span dangerouslySetInnerHTML={{ __html: item.header }} />
                              <span className="time"><Clock className="inline w-3 h-3" /> {item.time}</span>
                            </div>
                            <div className="timeline-body">
                              {item.body}
                            </div>
                          </div>
                        </li>
                      )
                    })}
                  </li>
                ))}
              </ul>
            </div>
          </AppCard>
        </div>
      </div>

      {/* Info Boxes at Bottom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <InfoBox icon="cpu" iconBg="bg-info" label="CPU Usage" value="42%" progressValue={42} progressColor="bg-info" />
        <InfoBox icon="hard-drive" iconBg="bg-success" label="Disk Usage" value="68%" progressValue={68} progressColor="bg-success" />
        <InfoBox icon="memory-stick" iconBg="bg-warning" label="RAM Usage" value="73%" progressValue={73} progressColor="bg-warning" />
        <InfoBox icon="wifi" iconBg="bg-danger" label="Network I/O" value="124 Mbps" progressValue={55} progressColor="bg-danger" />
      </div>
    </>
  )
}
