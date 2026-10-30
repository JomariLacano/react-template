import { useState } from 'react'
import { RefreshCw } from 'lucide-react'
import AppCard from '@/components/widgets/AppCard'
import DirectChat from '@/components/widgets/DirectChat'
import type { ChatMessage, ChatContact } from '@/types'

// Chat data
const chatMessages: ChatMessage[] = [
  {
    name: 'JL Tempate',
    avatar: '/assets/img/user1-128x128.jpg',
    text: "Is this template really free? That's amazing!",
    time: '23 Jan 2:00 pm',
    side: 'left',
  },
  {
    name: 'Sarah Bullock',
    avatar: '/assets/img/user3-128x128.jpg',
    text: "You bet! It's built with Tailwind CSS and Alpine.js.",
    time: '23 Jan 2:05 pm',
    side: 'right',
  },
  {
    name: 'JL Tempate',
    avatar: '/assets/img/user1-128x128.jpg',
    text: "That's great. I've been looking for something like this for a while. Thanks for sharing!",
    time: '23 Jan 5:37 pm',
    side: 'left',
  },
]

const chatContacts: ChatContact[] = [
  { name: 'JL Tempate', avatar: '/assets/img/user1-128x128.jpg', status: 'Online' },
  { name: 'Sarah Bullock', avatar: '/assets/img/user3-128x128.jpg', status: 'Online' },
  { name: 'Nora Silvester', avatar: '/assets/img/user5-128x128.jpg', status: 'Offline' },
]

export default function CardsPage() {
  // Tab state for tabbed cards
  const [activeTab1, setActiveTab1] = useState('tab1')
  const [activeTab2, setActiveTab2] = useState('settings')

  // Loading state
  const [cardLoading, setCardLoading] = useState(true)

  return (
    <div>
      {/* Section: Default Card with Tools */}
      <h4 className="text-lg font-semibold mb-3">Default Card with Tools</h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <AppCard
          title="Collapsible Card"
          icon="settings"
          interactive
          footer={<span className="text-sm text-gray-500">Card Footer</span>}
        >
          <p>This card can be collapsed, maximized, and removed using the tool buttons in the header. Click the minus icon to collapse, the expand icon to maximize, or the X to remove this card entirely.</p>
        </AppCard>

        <AppCard title="Maximizable Card" icon="bar-chart-3" interactive>
          <p>Click the expand button to see this card go full-screen. Press Escape or click the expand button again to return to normal size.</p>
        </AppCard>
      </div>

      {/* Section: Outlined Cards */}
      <h4 className="text-lg font-semibold mb-3">Outlined Cards</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <AppCard title="Primary Outline" cardClass="card-outline card-outline-primary">
          <p>A card with a primary colored top border for visual distinction.</p>
        </AppCard>
        <AppCard title="Success Outline" cardClass="card-outline card-outline-success">
          <p>A card with a success colored top border, ideal for positive information.</p>
        </AppCard>
        <AppCard title="Warning Outline" cardClass="card-outline card-outline-warning">
          <p>A card with a warning colored top border for cautionary content.</p>
        </AppCard>
        <AppCard title="Danger Outline" cardClass="card-outline card-outline-danger">
          <p>A card with a danger colored top border for critical alerts.</p>
        </AppCard>
        <AppCard title="Info Outline" cardClass="card-outline card-outline-info">
          <p>A card with an info colored top border for informational content.</p>
        </AppCard>
        <AppCard title="Secondary Outline" cardClass="card-outline card-outline-secondary">
          <p>A card with a secondary colored top border for neutral content.</p>
        </AppCard>
      </div>

      {/* Section: Background Colored Cards */}
      <h4 className="text-lg font-semibold mb-3">Background Colored Cards</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <AppCard title="Primary Card" cardClass="bg-primary">
          <p>A fully colored primary background card. Text is automatically set to white for readability.</p>
        </AppCard>
        <AppCard title="Success Card" cardClass="bg-success">
          <p>A success themed card with green background, suitable for positive messages.</p>
        </AppCard>
        <AppCard title="Warning Card" cardClass="bg-warning">
          <p>A warning themed card with yellow background. Note the dark text for contrast.</p>
        </AppCard>
        <AppCard title="Danger Card" cardClass="bg-danger">
          <p>A danger themed card with red background for critical or error content.</p>
        </AppCard>
        <AppCard title="Info Card" cardClass="bg-info">
          <p>An info themed card with cyan background for informational content.</p>
        </AppCard>
        <AppCard title="Secondary Card" cardClass="bg-secondary">
          <p>A secondary themed card with gray background for neutral content.</p>
        </AppCard>
      </div>

      {/* Section: Card with Tabs */}
      <h4 className="text-lg font-semibold mb-3">Card with Tabs</h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div className="card">
          <div className="card-header with-tabs">
            <ul className="card-tabs">
              <li>
                <a href="#" className={`nav-link${activeTab1 === 'tab1' ? ' active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveTab1('tab1') }}>Tab 1</a>
              </li>
              <li>
                <a href="#" className={`nav-link${activeTab1 === 'tab2' ? ' active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveTab1('tab2') }}>Tab 2</a>
              </li>
              <li>
                <a href="#" className={`nav-link${activeTab1 === 'tab3' ? ' active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveTab1('tab3') }}>Tab 3</a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <div style={{ display: activeTab1 === 'tab1' ? undefined : 'none' }}>
              <p>Content for the first tab. This demonstrates the tabbed card interface powered by Vue.js.</p>
            </div>
            <div style={{ display: activeTab1 === 'tab2' ? undefined : 'none' }}>
              <p>Content for the second tab. Each tab can hold different content and is toggled client-side.</p>
            </div>
            <div style={{ display: activeTab1 === 'tab3' ? undefined : 'none' }}>
              <p>Content for the third tab. Tabs are styled to match the JL Tempate design language.</p>
            </div>
          </div>
        </div>

        <div className="card card-outline card-outline-primary">
          <div className="card-header with-tabs">
            <ul className="card-tabs">
              <li>
                <a href="#" className={`nav-link${activeTab2 === 'settings' ? ' active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveTab2('settings') }}>Settings</a>
              </li>
              <li>
                <a href="#" className={`nav-link${activeTab2 === 'profile' ? ' active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveTab2('profile') }}>Profile</a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <div style={{ display: activeTab2 === 'settings' ? undefined : 'none' }}>
              <p>Application settings would go here. This card combines the outlined style with tabs.</p>
            </div>
            <div style={{ display: activeTab2 === 'profile' ? undefined : 'none' }}>
              <p>User profile information displayed in tab two of an outlined card.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Collapsed Card */}
      <h4 className="text-lg font-semibold mb-3">Collapsed Card</h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <AppCard
          title="Initially Collapsed"
          icon="chevron-down"
          interactive
          collapsed={true}
          footer={<span className="text-sm text-gray-500">Hidden footer that appears when expanded.</span>}
        >
          <p>This card starts collapsed. Click the plus button in the header to expand and see this content. The body and footer are hidden until expanded.</p>
        </AppCard>

        <AppCard title="Initially Expanded" icon="chevron-up" interactive>
          <p>This card starts expanded (default state). Click the minus button to collapse it.</p>
        </AppCard>
      </div>

      {/* Section: Card with Loading Overlay */}
      <h4 className="text-lg font-semibold mb-3">Card with Loading Overlay</h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <AppCard
          loading={cardLoading}
          header={
            <div className="flex items-center justify-between w-full">
              <h3 className="card-title">Loading State</h3>
              <div className="card-tools">
                <button className="btn-tool" onClick={() => setCardLoading(!cardLoading)}>
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>
          }
        >
          <p>This card shows a loading overlay. Click the refresh icon to toggle the loading state on and off.</p>
        </AppCard>

        <AppCard title="No Loading">
          <p>A regular card without a loading overlay, for comparison. The loading overlay sits on top of the card content with a semi-transparent background.</p>
        </AppCard>
      </div>

      {/* Section: Direct Chat Widget */}
      <h4 className="text-lg font-semibold mb-3">Direct Chat Widget</h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <DirectChat
          title="Direct Chat"
          variant="primary"
          messages={chatMessages}
          contacts={chatContacts}
          badgeCount={3}
        />
      </div>
    </div>
  )
}
