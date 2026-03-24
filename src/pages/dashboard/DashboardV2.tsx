import InfoBox from '@/components/widgets/InfoBox'
import AppCard from '@/components/widgets/AppCard'
import LineChart from '@/components/charts/LineChart'
import BarChart from '@/components/charts/BarChart'
import type { ChartData, ChartOptions } from 'chart.js'

// -- Revenue Line Chart data --
const revenueChartData: ChartData<'line'> = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Revenue',
      data: [8200, 9400, 7800, 11200, 10600, 13500, 12100, 15800, 14200, 16900, 15400, 18230],
      borderColor: '#0d6efd',
      backgroundColor: 'rgba(13, 110, 253, 0.15)',
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 7,
      pointBackgroundColor: '#0d6efd',
    },
    {
      label: 'Expenses',
      data: [4100, 4800, 3900, 5200, 4900, 6100, 5500, 7200, 6400, 7800, 7100, 8400],
      borderColor: '#dc3545',
      backgroundColor: 'rgba(220, 53, 69, 0.1)',
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 7,
      pointBackgroundColor: '#dc3545',
    },
    {
      label: 'Profit',
      data: [4100, 4600, 3900, 6000, 5700, 7400, 6600, 8600, 7800, 9100, 8300, 9830],
      borderColor: '#198754',
      borderDash: [5, 5],
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.4,
      pointRadius: 3,
      pointHoverRadius: 6,
      pointBackgroundColor: '#198754',
    },
  ],
}

const revenueChartOptions: ChartOptions<'line'> = {
  plugins: {
    legend: { labels: { usePointStyle: true } },
  },
  scales: {
    y: {
      ticks: {
        callback: (v) => '$' + (Number(v) / 1000) + 'k',
      },
    },
  },
}

// -- Monthly Bar Chart data --
const monthlyBarData: ChartData<'bar'> = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Online Sales',
      data: [4200, 5100, 3900, 6200, 5800, 7500, 6800, 8900, 7600, 9400, 8200, 10100],
      backgroundColor: '#0d6efd',
      borderRadius: 4,
    },
    {
      label: 'In-Store Sales',
      data: [2800, 3200, 2700, 3800, 3500, 4200, 3900, 5100, 4400, 5300, 4800, 5900],
      backgroundColor: '#0dcaf0',
      borderRadius: 4,
    },
    {
      label: 'Returns',
      data: [800, 900, 800, 800, 700, 1200, 600, 1200, 800, 1800, 1600, 1770],
      backgroundColor: '#dc3545',
      borderRadius: 4,
    },
  ],
}

const monthlyBarOptions: ChartOptions<'bar'> = {
  plugins: {
    legend: { labels: { usePointStyle: true } },
  },
  scales: {
    y: {
      ticks: {
        callback: (v) => '$' + (Number(v) / 1000) + 'k',
      },
    },
  },
}

// -- Recent Orders data --
const orders = [
  { id: '#ORD-7841', customer: 'John Doe', product: 'MacBook Pro 16"', amount: '$2,499.00', status: 'Completed', statusClass: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
  { id: '#ORD-7842', customer: 'Jane Smith', product: 'iPhone 15 Pro', amount: '$1,199.00', status: 'Processing', statusClass: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
  { id: '#ORD-7843', customer: 'Bob Wilson', product: 'AirPods Max', amount: '$549.00', status: 'Shipped', statusClass: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
  { id: '#ORD-7844', customer: 'Alice Brown', product: 'iPad Air M2', amount: '$799.00', status: 'Completed', statusClass: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
  { id: '#ORD-7845', customer: 'Charlie Davis', product: 'Apple Watch Ultra', amount: '$799.00', status: 'Cancelled', statusClass: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' },
  { id: '#ORD-7846', customer: 'Diana Evans', product: 'Magic Keyboard', amount: '$299.00', status: 'Processing', statusClass: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
]

// -- Goal Completion data --
const goals = [
  { label: 'Sales Target', value: 72, color: 'bg-primary' },
  { label: 'Customer Acquisition', value: 85, color: 'bg-success' },
  { label: 'Product Launches', value: 45, color: 'bg-warning' },
  { label: 'Market Expansion', value: 58, color: 'bg-danger' },
  { label: 'Customer Retention', value: 91, color: 'bg-info' },
  { label: 'Support Resolution', value: 67, color: 'bg-secondary' },
]

// -- Quick Stats data --
const quickStats = [
  { label: 'Avg. Order Value', value: '$85.40', color: 'text-primary' },
  { label: 'Conversion Rate', value: '3.8%', color: 'text-success' },
  { label: 'Cart Abandonment', value: '24.5%', color: 'text-danger' },
  { label: 'Return Rate', value: '5.2%', color: 'text-warning' },
]

export default function DashboardV2() {
  return (
    <>
      {/* Revenue/Expense Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <InfoBox
          icon="dollar-sign"
          iconBg="bg-primary"
          label="Total Revenue"
          value="$125,830"
          progressValue={72}
          progressColor="bg-primary"
          progressDescription="72% of target"
        />
        <InfoBox
          icon="credit-card"
          iconBg="bg-danger"
          label="Expenses"
          value="$48,250"
          progressValue={38}
          progressColor="bg-danger"
          progressDescription="38% of budget"
        />
        <InfoBox
          icon="trending-up"
          iconBg="bg-success"
          label="Net Profit"
          value="$77,580"
          progressValue={61}
          progressColor="bg-success"
          progressDescription="61% margin"
        />
        <InfoBox
          icon="users"
          iconBg="bg-warning"
          label="New Customers"
          value="2,340"
          progressValue={85}
          progressColor="bg-warning"
          progressDescription="85% growth"
        />
      </div>

      {/* Charts Row: Line + Bar side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <AppCard title="Revenue Overview" icon="trending-up" interactive>
          <LineChart data={revenueChartData} options={revenueChartOptions} height={300} />
        </AppCard>

        <AppCard title="Monthly Breakdown" icon="bar-chart-3" interactive>
          <BarChart data={monthlyBarData} options={monthlyBarOptions} height={300} />
        </AppCard>
      </div>

      {/* Bottom Row: Recent Orders + Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Recent Orders Table */}
        <div className="lg:col-span-8">
          <AppCard
            title="Recent Orders"
            icon="shopping-bag"
            interactive
            footer={
              <div className="text-center">
                <a href="#" className="text-sm text-primary hover:underline">View All Orders</a>
              </div>
            }
          >
            <div className="-mx-4 -my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                    <th className="text-left px-4 py-3 font-semibold">Order ID</th>
                    <th className="text-left px-4 py-3 font-semibold">Customer</th>
                    <th className="text-left px-4 py-3 font-semibold">Product</th>
                    <th className="text-right px-4 py-3 font-semibold">Amount</th>
                    <th className="text-center px-4 py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr
                      key={order.id}
                      className={index < orders.length - 1 ? 'border-b border-gray-100 dark:border-gray-700/50' : ''}
                    >
                      <td className="px-4 py-3 font-mono text-xs">{order.id}</td>
                      <td className="px-4 py-3">{order.customer}</td>
                      <td className="px-4 py-3">{order.product}</td>
                      <td className="text-right px-4 py-3 font-semibold">{order.amount}</td>
                      <td className="text-center px-4 py-3">
                        <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-full ${order.statusClass}`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AppCard>
        </div>

        {/* Progress Indicators */}
        <div className="lg:col-span-4">
          <AppCard title="Goal Completion" icon="target" interactive>
            {goals.map((goal, index) => (
              <div key={goal.label} className={index < goals.length - 1 ? 'mb-4' : ''}>
                <div className="flex justify-between mb-1 text-sm">
                  <span>{goal.label}</span>
                  <span className="font-semibold">{goal.value}%</span>
                </div>
                <div className="progress">
                  <div
                    className={`progress-bar progress-bar-striped progress-bar-animated ${goal.color}`}
                    style={{ width: goal.value + '%' }}
                  ></div>
                </div>
              </div>
            ))}
          </AppCard>

          <AppCard title="Quick Stats" icon="zap">
            {quickStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex items-center justify-between${index < quickStats.length - 1 ? ' mb-3 pb-3 border-b border-gray-100 dark:border-gray-700/50' : ''}`}
              >
                <span className="text-sm">{stat.label}</span>
                <span className={`font-semibold ${stat.color}`}>{stat.value}</span>
              </div>
            ))}
          </AppCard>
        </div>
      </div>
    </>
  )
}
