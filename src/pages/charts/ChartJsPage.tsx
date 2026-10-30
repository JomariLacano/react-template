import AppCard from '@/components/widgets/AppCard'
import LineChart from '@/components/charts/LineChart'
import BarChart from '@/components/charts/BarChart'
import DoughnutChart from '@/components/charts/DoughnutChart'
import PieChart from '@/components/charts/PieChart'
import RadarChart from '@/components/charts/RadarChart'
import PolarAreaChart from '@/components/charts/PolarAreaChart'
import MixedChart from '@/components/charts/MixedChart'
import type { ChartData, ChartOptions } from 'chart.js'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']

// -- Line Chart --
const lineData: ChartData<'line'> = {
  labels: months,
  datasets: [
    {
      label: 'Revenue',
      data: [12000, 19000, 15000, 25000, 22000, 30000, 28000],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59,130,246,0.1)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Expenses',
      data: [8000, 11000, 9000, 14000, 12000, 16000, 15000],
      borderColor: '#ef4444',
      backgroundColor: 'rgba(239,68,68,0.1)',
      fill: true,
      tension: 0.4,
    },
  ],
}

// -- Bar Chart --
const barData: ChartData<'bar'> = {
  labels: months,
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55, 72],
      backgroundColor: 'rgba(59,130,246,0.7)',
      borderColor: '#3b82f6',
      borderWidth: 1,
    },
    {
      label: 'Returns',
      data: [5, 8, 12, 6, 9, 4, 7],
      backgroundColor: 'rgba(239,68,68,0.7)',
      borderColor: '#ef4444',
      borderWidth: 1,
    },
  ],
}

// -- Horizontal Bar Chart --
const horizontalBarData: ChartData<'bar'> = {
  labels: ['JavaScript', 'Python', 'PHP', 'Java', 'TypeScript', 'Go', 'Rust'],
  datasets: [
    {
      label: 'Popularity (%)',
      data: [67, 44, 21, 35, 39, 14, 10],
      backgroundColor: [
        'rgba(59,130,246,0.7)',
        'rgba(34,197,94,0.7)',
        'rgba(168,85,247,0.7)',
        'rgba(239,68,68,0.7)',
        'rgba(6,182,212,0.7)',
        'rgba(245,158,11,0.7)',
        'rgba(236,72,153,0.7)',
      ],
      borderWidth: 0,
    },
  ],
}

const horizontalBarOptions: ChartOptions<'bar'> = {
  indexAxis: 'y',
}

// -- Doughnut Chart --
const doughnutData: ChartData<'doughnut'> = {
  labels: ['Direct', 'Social', 'Referral', 'Organic', 'Email'],
  datasets: [
    {
      data: [35, 25, 20, 15, 5],
      backgroundColor: ['#3b82f6', '#22c55e', '#f59e0b', '#8b5cf6', '#ef4444'],
      borderWidth: 2,
    },
  ],
}

const doughnutOptions: ChartOptions<'doughnut'> = {
  plugins: {
    legend: { position: 'bottom', labels: { padding: 16 } },
  },
}

// -- Pie Chart --
const pieData: ChartData<'pie'> = {
  labels: ['Chrome', 'Firefox', 'Safari', 'Edge', 'Other'],
  datasets: [
    {
      data: [45, 20, 18, 12, 5],
      backgroundColor: ['#3b82f6', '#f97316', '#a855f7', '#22d3ee', '#6b7280'],
      borderWidth: 2,
    },
  ],
}

const pieOptions: ChartOptions<'pie'> = {
  plugins: {
    legend: { position: 'bottom', labels: { padding: 16 } },
  },
}

// -- Radar Chart --
const radarData: ChartData<'radar'> = {
  labels: ['Speed', 'Reliability', 'Comfort', 'Safety', 'Efficiency', 'Design'],
  datasets: [
    {
      label: 'Product A',
      data: [85, 90, 70, 88, 75, 82],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59,130,246,0.2)',
      pointBackgroundColor: '#3b82f6',
    },
    {
      label: 'Product B',
      data: [70, 75, 90, 72, 85, 95],
      borderColor: '#22c55e',
      backgroundColor: 'rgba(34,197,94,0.2)',
      pointBackgroundColor: '#22c55e',
    },
  ],
}

// -- Polar Area Chart --
const polarData: ChartData<'polarArea'> = {
  labels: ['Red', 'Green', 'Yellow', 'Blue', 'Purple'],
  datasets: [
    {
      data: [11, 16, 7, 14, 9],
      backgroundColor: [
        'rgba(239,68,68,0.6)',
        'rgba(34,197,94,0.6)',
        'rgba(234,179,8,0.6)',
        'rgba(59,130,246,0.6)',
        'rgba(168,85,247,0.6)',
      ],
      borderWidth: 1,
    },
  ],
}

const polarOptions: ChartOptions<'polarArea'> = {
  plugins: {
    legend: { position: 'bottom', labels: { padding: 16 } },
  },
}

// -- Mixed Chart --
const mixedData: ChartData<'bar' | 'line'> = {
  labels: months,
  datasets: [
    {
      label: 'Page Views',
      data: [4500, 5200, 4800, 6100, 5800, 7200, 6900],
      backgroundColor: 'rgba(59,130,246,0.6)',
      borderColor: '#3b82f6',
      borderWidth: 1,
      order: 2,
    },
    {
      label: 'Conversion Rate (%)',
      data: [3.2, 3.8, 3.5, 4.1, 3.9, 4.5, 4.3],
      type: 'line' as const,
      borderColor: '#f59e0b',
      backgroundColor: 'transparent',
      yAxisID: 'y1',
      tension: 0.4,
      pointBackgroundColor: '#f59e0b',
      order: 1,
    },
  ],
}

const mixedOptions: ChartOptions<'bar'> = {
  scales: {
    y: {
      position: 'left',
      title: { display: true, text: 'Page Views' },
    },
    y1: {
      position: 'right',
      title: { display: true, text: 'Conversion %' },
      grid: { display: false },
    },
  },
}

export default function ChartJsPage() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* Line Chart */}
        <AppCard title="Line Chart">
          <LineChart data={lineData} height={300} />
        </AppCard>

        {/* Bar Chart */}
        <AppCard title="Bar Chart">
          <BarChart data={barData} height={300} />
        </AppCard>

        {/* Horizontal Bar Chart */}
        <AppCard title="Horizontal Bar Chart">
          <BarChart data={horizontalBarData} options={horizontalBarOptions} height={300} />
        </AppCard>

        {/* Doughnut Chart */}
        <AppCard title="Doughnut Chart">
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <DoughnutChart data={doughnutData} options={doughnutOptions} height={300} />
            </div>
          </div>
        </AppCard>

        {/* Pie Chart */}
        <AppCard title="Pie Chart">
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <PieChart data={pieData} options={pieOptions} height={300} />
            </div>
          </div>
        </AppCard>

        {/* Radar Chart */}
        <AppCard title="Radar Chart">
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <RadarChart data={radarData} height={300} />
            </div>
          </div>
        </AppCard>

        {/* Polar Area Chart */}
        <AppCard title="Polar Area Chart">
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <PolarAreaChart data={polarData} options={polarOptions} height={300} />
            </div>
          </div>
        </AppCard>

        {/* Mixed Line & Bar Chart */}
        <AppCard title="Mixed Line & Bar Chart">
          <MixedChart data={mixedData} options={mixedOptions} height={300} />
        </AppCard>

      </div>
    </div>
  )
}
