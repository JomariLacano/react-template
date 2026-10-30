import { useState } from 'react'
import { TrendingUp } from 'lucide-react'
import SmallBox from '@/components/widgets/SmallBox'
import InfoBox from '@/components/widgets/InfoBox'
import AppCard from '@/components/widgets/AppCard'
import DirectChat from '@/components/widgets/DirectChat'
import LineChart from '@/components/charts/LineChart'
import BarChart from '@/components/charts/BarChart'
import type { ChartData, ChartOptions } from 'chart.js'
import type { ChatMessage, ChatContact } from '@/types'

// -- Sales chart data --
const salesChartData: ChartData<'line'> = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'This Year',
      data: [3800, 5200, 4100, 6500, 5800, 7200, 6100, 8400, 7600, 9200, 8100, 10500],
      borderColor: '#0d6efd',
      backgroundColor: 'rgba(13,110,253,0.1)',
      fill: true,
      tension: 0.4,
      pointRadius: 3,
      pointHoverRadius: 6,
    },
    {
      label: 'Last Year',
      data: [2400, 3500, 3200, 4100, 3900, 4800, 4200, 5600, 5100, 6800, 5900, 7200],
      borderColor: '#6c757d',
      backgroundColor: 'rgba(108,117,125,0.1)',
      fill: true,
      tension: 0.4,
      pointRadius: 3,
      pointHoverRadius: 6,
    },
  ],
}

const salesChartOptions: ChartOptions<'line'> = {
  scales: {
    y: {
      ticks: {
        callback: (v) => '$' + (Number(v) / 1000) + 'k',
      },
    },
  },
}

// -- Visitors chart data --
const visitorsChartData: ChartData<'bar'> = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Organic',
      data: [1200, 1900, 1500, 2100, 1800, 2400, 2200, 2800, 2500, 3100, 2900, 3500],
      backgroundColor: '#0d6efd',
      borderRadius: 4,
    },
    {
      label: 'Direct',
      data: [800, 1100, 900, 1300, 1200, 1500, 1400, 1800, 1600, 2000, 1900, 2300],
      backgroundColor: '#198754',
      borderRadius: 4,
    },
    {
      label: 'Referral',
      data: [400, 600, 500, 700, 650, 800, 750, 1000, 900, 1100, 1000, 1200],
      backgroundColor: '#ffc107',
      borderRadius: 4,
    },
  ],
}

// -- Direct Chat data --
const initialChatMessages: ChatMessage[] = [
  {
    name: 'JL Tempate',
    avatar: 'assets/img/jl-user-01.svg',
    text: "Is this template really free? That's unbelievable!",
    time: '23 Jan 2:00 pm',
    side: 'left',
  },
  {
    name: 'Sarah Bullock',
    avatar: 'assets/img/jl-user-02.svg',
    text: 'You better believe it!',
    time: '23 Jan 2:05 pm',
    side: 'right',
  },
  {
    name: 'JL Tempate',
    avatar: 'assets/img/jl-user-01.svg',
    text: 'Working with JL Tempate on a great new app! Wanna join?',
    time: '23 Jan 5:37 pm',
    side: 'left',
  },
]

const chatContacts: ChatContact[] = [
  { name: 'Count Dracula', avatar: 'assets/img/jl-user-01.svg', status: '2/28/2023' },
  { name: 'Sarah Doe', avatar: 'assets/img/jl-user-06.svg', status: '2/23/2023' },
  { name: 'Nadia Jolie', avatar: 'assets/img/jl-user-02.svg', status: '2/20/2023' },
  { name: 'Nora S. Vans', avatar: 'assets/img/jl-user-04.svg', status: '2/10/2023' },
]

// -- Products table data --
const products = [
  { name: 'Call of Duty', price: '$49.99', sales: '210 Sold', color: 'text-danger' },
  { name: 'Need for Speed', price: '$39.99', sales: '120 Sold', color: 'text-warning' },
  { name: 'Grand Theft Auto', price: '$59.99', sales: '340 Sold', color: 'text-success' },
  { name: 'Minecraft', price: '$29.99', sales: '490 Sold', color: 'text-primary' },
  { name: 'FIFA 24', price: '$44.99', sales: '180 Sold', color: 'text-info' },
]

export default function DashboardV1() {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(initialChatMessages)

  function handleChatSend(text: string) {
    setChatMessages((prev) => [
      ...prev,
      {
        name: 'Sarah Bullock',
        avatar: 'assets/img/jl-user-02.svg',
        text,
        time: 'Just now',
        side: 'right',
      },
    ])
  }

  return (
    <>
      {/* Small Boxes (Stat Boxes) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <SmallBox bgColor="bg-primary" value={150} label="New Orders" icon="shopping-cart" />
        <SmallBox bgColor="bg-success" value="53%" label="Bounce Rate" icon="bar-chart-2" />
        <SmallBox bgColor="bg-warning" value={44} label="User Registrations" icon="user-plus" />
        <SmallBox bgColor="bg-danger" value={65} label="Unique Visitors" icon="pie-chart" />
      </div>

      {/* Main Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Sales Chart */}
        <div className="lg:col-span-7">
          <AppCard
            title="Sales"
            icon="bar-chart-3"
            interactive
            footer={
              <div className="grid grid-cols-4 text-center text-sm">
                <div>
                  <p className="text-gray-500">Orders</p>
                  <p className="font-semibold">1,200</p>
                </div>
                <div>
                  <p className="text-gray-500">Revenue</p>
                  <p className="font-semibold">$18.2k</p>
                </div>
                <div>
                  <p className="text-gray-500">Avg Price</p>
                  <p className="font-semibold">$15.19</p>
                </div>
                <div>
                  <p className="text-gray-500">Products</p>
                  <p className="font-semibold">28</p>
                </div>
              </div>
            }
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-3xl font-bold">$18,230.00</p>
              <p className="text-success text-sm">
                <TrendingUp className="inline w-4 h-4" /> 33.1% Since last month
              </p>
            </div>
            <LineChart data={salesChartData} options={salesChartOptions} height={250} />
          </AppCard>
        </div>

        {/* Direct Chat */}
        <div className="lg:col-span-5">
          <DirectChat
            title="Direct Chat"
            variant="primary"
            messages={chatMessages}
            contacts={chatContacts}
            badgeCount={3}
            onSend={handleChatSend}
          />
        </div>
      </div>

      {/* Visitors Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4">
        <div className="lg:col-span-7">
          <AppCard
            title="Visitors"
            icon="globe"
            interactive
            footer={
              <div className="grid grid-cols-4 gap-2 text-sm">
                <div className="text-center">
                  <span className="inline-block w-3 h-3 rounded-full bg-primary mr-1"></span>
                  <span>USA</span>
                  <p className="font-semibold">35%</p>
                </div>
                <div className="text-center">
                  <span className="inline-block w-3 h-3 rounded-full bg-success mr-1"></span>
                  <span>India</span>
                  <p className="font-semibold">25%</p>
                </div>
                <div className="text-center">
                  <span className="inline-block w-3 h-3 rounded-full bg-warning mr-1"></span>
                  <span>UK</span>
                  <p className="font-semibold">20%</p>
                </div>
                <div className="text-center">
                  <span className="inline-block w-3 h-3 rounded-full bg-danger mr-1"></span>
                  <span>Others</span>
                  <p className="font-semibold">20%</p>
                </div>
              </div>
            }
          >
            <BarChart data={visitorsChartData} height={250} />
          </AppCard>
        </div>

        {/* Products Overview */}
        <div className="lg:col-span-5">
          <AppCard title="Products Overview" icon="package" interactive>
            <div className="-mx-4 -my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left px-4 py-2 font-semibold">Product</th>
                    <th className="text-right px-4 py-2 font-semibold">Price</th>
                    <th className="text-right px-4 py-2 font-semibold">Sales</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr
                      key={index}
                      className={index < products.length - 1 ? 'border-b border-gray-100 dark:border-gray-700/50' : ''}
                    >
                      <td className="px-4 py-2">{product.name}</td>
                      <td className="text-right px-4 py-2">{product.price}</td>
                      <td className="text-right px-4 py-2">
                        <span className={product.color}>{product.sales}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AppCard>
        </div>
      </div>

      {/* Info Boxes Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <InfoBox icon="mail" iconBg="bg-primary" label="Messages" value="1,410" />
        <InfoBox icon="bookmark" iconBg="bg-success" label="Bookmarks" value="410" />
        <InfoBox icon="upload" iconBg="bg-warning" label="Uploads" value="13,648" />
        <InfoBox icon="thumbs-up" iconBg="bg-danger" label="Likes" value="93,139" />
      </div>
    </>
  )
}
