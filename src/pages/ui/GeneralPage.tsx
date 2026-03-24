import { useState } from 'react'
import AppCallout from '@/components/ui/AppCallout'
import AppCard from '@/components/widgets/AppCard'
import {
  Info, CheckCircle, AlertTriangle, AlertCircle, Bell, Moon, X,
  ChevronDown, Mail, Check,
} from 'lucide-react'

export default function GeneralPage() {
  // Dismissible alert visibility
  const [showDismissInfo, setShowDismissInfo] = useState(true)
  const [showDismissSuccess, setShowDismissSuccess] = useState(true)
  const [showDismissWarning, setShowDismissWarning] = useState(true)
  const [showDismissDanger, setShowDismissDanger] = useState(true)
  const [showDismissCyan, setShowDismissCyan] = useState(true)
  const [showDismissDark, setShowDismissDark] = useState(true)

  // Accordion state
  const [activeAccordion, setActiveAccordion] = useState<number | null>(1)

  // Collapse states
  const [collapseA, setCollapseA] = useState(false)
  const [collapseB, setCollapseB] = useState(false)
  const [collapseC, setCollapseC] = useState(false)

  // Dropdown states
  const [dropdownBlue, setDropdownBlue] = useState(false)
  const [dropdownGreen, setDropdownGreen] = useState(false)
  const [dropdownRed, setDropdownRed] = useState(false)
  const [splitBlue, setSplitBlue] = useState(false)
  const [splitGreen, setSplitGreen] = useState(false)

  return (
    <div>
      {/* Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <AppCard title="Alerts">
          <div className="bg-blue-100 border border-blue-400 text-blue-800 dark:bg-blue-900/30 dark:border-blue-700 dark:text-blue-300 px-4 py-3 rounded mb-3 flex items-center gap-2" role="alert">
            <Info className="w-5 h-5 shrink-0" />
            <span><strong>Info!</strong> This is an informational alert message.</span>
          </div>
          <div className="bg-green-100 border border-green-400 text-green-800 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300 px-4 py-3 rounded mb-3 flex items-center gap-2" role="alert">
            <CheckCircle className="w-5 h-5 shrink-0" />
            <span><strong>Success!</strong> Your action has been completed successfully.</span>
          </div>
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 dark:bg-yellow-900/30 dark:border-yellow-700 dark:text-yellow-300 px-4 py-3 rounded mb-3 flex items-center gap-2" role="alert">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <span><strong>Warning!</strong> Please review this important notice.</span>
          </div>
          <div className="bg-red-100 border border-red-400 text-red-800 dark:bg-red-900/30 dark:border-red-700 dark:text-red-300 px-4 py-3 rounded mb-3 flex items-center gap-2" role="alert">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span><strong>Danger!</strong> Something went wrong. Please try again.</span>
          </div>
          <div className="bg-gray-100 border border-gray-400 text-gray-800 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 px-4 py-3 rounded mb-3 flex items-center gap-2" role="alert">
            <Bell className="w-5 h-5 shrink-0" />
            <span><strong>Secondary!</strong> A secondary alert for general notices.</span>
          </div>
          <div className="bg-gray-800 border border-gray-900 text-white dark:bg-gray-900 dark:border-gray-700 px-4 py-3 rounded flex items-center gap-2" role="alert">
            <Moon className="w-5 h-5 shrink-0" />
            <span><strong>Dark!</strong> A dark themed alert message.</span>
          </div>
        </AppCard>

        <AppCard title="Dismissible Alerts">
          {showDismissInfo && (
            <div className="bg-blue-100 border border-blue-400 text-blue-800 dark:bg-blue-900/30 dark:border-blue-700 dark:text-blue-300 px-4 py-3 rounded mb-3 flex items-center justify-between transition-opacity" role="alert">
              <span>This alert can be dismissed. Click the X!</span>
              <button onClick={() => setShowDismissInfo(false)} className="ml-2 text-blue-600 hover:text-blue-800 dark:text-blue-400"><X className="w-4 h-4" /></button>
            </div>
          )}
          {showDismissSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-800 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300 px-4 py-3 rounded mb-3 flex items-center justify-between transition-opacity" role="alert">
              <span>Success! This dismissible alert confirms your action.</span>
              <button onClick={() => setShowDismissSuccess(false)} className="ml-2 text-green-600 hover:text-green-800 dark:text-green-400"><X className="w-4 h-4" /></button>
            </div>
          )}
          {showDismissWarning && (
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 dark:bg-yellow-900/30 dark:border-yellow-700 dark:text-yellow-300 px-4 py-3 rounded mb-3 flex items-center justify-between transition-opacity" role="alert">
              <span>Warning! This is a dismissible warning alert.</span>
              <button onClick={() => setShowDismissWarning(false)} className="ml-2 text-yellow-600 hover:text-yellow-800 dark:text-yellow-400"><X className="w-4 h-4" /></button>
            </div>
          )}
          {showDismissDanger && (
            <div className="bg-red-100 border border-red-400 text-red-800 dark:bg-red-900/30 dark:border-red-700 dark:text-red-300 px-4 py-3 rounded mb-3 flex items-center justify-between transition-opacity" role="alert">
              <span>Danger! Something needs your attention.</span>
              <button onClick={() => setShowDismissDanger(false)} className="ml-2 text-red-600 hover:text-red-800 dark:text-red-400"><X className="w-4 h-4" /></button>
            </div>
          )}
          {showDismissCyan && (
            <div className="bg-cyan-100 border border-cyan-400 text-cyan-800 dark:bg-cyan-900/30 dark:border-cyan-700 dark:text-cyan-300 px-4 py-3 rounded mb-3 flex items-center justify-between transition-opacity" role="alert">
              <span>Info! A helpful piece of information for you.</span>
              <button onClick={() => setShowDismissCyan(false)} className="ml-2 text-cyan-600 hover:text-cyan-800 dark:text-cyan-400"><X className="w-4 h-4" /></button>
            </div>
          )}
          {showDismissDark && (
            <div className="bg-gray-800 border border-gray-900 text-white dark:bg-gray-900 dark:border-gray-700 px-4 py-3 rounded flex items-center justify-between transition-opacity" role="alert">
              <span>Dark! A dismissible dark-themed alert.</span>
              <button onClick={() => setShowDismissDark(false)} className="ml-2 text-gray-400 hover:text-white"><X className="w-4 h-4" /></button>
            </div>
          )}
        </AppCard>
      </div>

      {/* Badges */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <AppCard title="Badges">
          <h5 className="text-sm font-semibold mb-2">Color Variants</h5>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-600 text-white">Primary</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-gray-600 text-white">Secondary</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-green-600 text-white">Success</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-red-600 text-white">Danger</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-yellow-500 text-gray-900">Warning</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-cyan-500 text-gray-900">Info</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200">Light</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-gray-900 text-white dark:bg-gray-600">Dark</span>
          </div>
          <h5 className="text-sm font-semibold mb-2">Pill Badges</h5>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-blue-600 text-white">Primary</span>
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-green-600 text-white">Success</span>
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-red-600 text-white">Danger</span>
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-yellow-500 text-gray-900">Warning</span>
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-cyan-500 text-gray-900">Info</span>
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-gray-900 text-white dark:bg-gray-600">Dark</span>
          </div>
          <h5 className="text-sm font-semibold mb-2">Badges with Icons</h5>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-medium bg-blue-600 text-white"><Mail className="w-3 h-3" /> 4 Messages</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-medium bg-green-600 text-white"><Check className="w-3 h-3" /> Verified</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-medium bg-red-600 text-white"><X className="w-3 h-3" /> Removed</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-medium bg-yellow-500 text-gray-900"><AlertTriangle className="w-3 h-3" /> Warning</span>
          </div>
        </AppCard>

        <AppCard title="Badge Sizes &amp; Usage">
          <h5 className="text-sm font-semibold mb-2">Heading Badges</h5>
          <h1 className="text-2xl font-bold mb-2">Heading 1 <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-600 text-white align-middle">New</span></h1>
          <h2 className="text-xl font-bold mb-2">Heading 2 <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-green-600 text-white align-middle">New</span></h2>
          <h3 className="text-lg font-bold mb-2">Heading 3 <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-600 text-white align-middle">New</span></h3>
          <h4 className="text-base font-bold mb-2">Heading 4 <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-500 text-gray-900 align-middle">New</span></h4>
          <h5 className="text-sm font-semibold mb-2 mt-4">Button with Badge</h5>
          <div className="flex flex-wrap gap-2">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
              Notifications <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-red-600 rounded-full">4</span>
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">
              Messages <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-yellow-500 text-gray-900 rounded-full">7</span>
            </button>
          </div>
        </AppCard>
      </div>

      {/* Callouts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <AppCard title="Callouts">
          <AppCallout variant="info" title="Info Callout">
            This is an info callout. Use it to provide helpful information or tips to the user.
          </AppCallout>
          <AppCallout variant="success" title="Success Callout">
            This is a success callout. Useful for confirming completed actions or positive feedback.
          </AppCallout>
          <AppCallout variant="warning" title="Warning Callout">
            This is a warning callout. Use it to draw attention to potentially problematic situations.
          </AppCallout>
          <AppCallout variant="danger" title="Danger Callout">
            This is a danger callout. Use it for critical warnings or error descriptions.
          </AppCallout>
          <AppCallout variant="primary" title="Primary Callout">
            This is a primary callout. Good for highlighting important content with brand colors.
          </AppCallout>
        </AppCard>

        {/* Tooltips */}
        <AppCard title="Tooltips">
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">Hover over the buttons to see tooltips in different directions.</p>
          <div className="flex flex-wrap gap-3">
            <div className="relative group">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Tooltip Top</button>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Tooltip on top
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
            <div className="relative group">
              <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm">Tooltip Right</button>
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Tooltip on right
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
              </div>
            </div>
            <div className="relative group">
              <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">Tooltip Bottom</button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Tooltip on bottom
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-900"></div>
              </div>
            </div>
            <div className="relative group">
              <button className="px-4 py-2 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-600 text-sm">Tooltip Left</button>
              <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-3 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Tooltip on left
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
              </div>
            </div>
          </div>
        </AppCard>
      </div>

      {/* Progress Bars */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <AppCard title="Progress Bars">
          <h5 className="text-sm font-semibold mb-2">Color Variants</h5>
          <div className="progress mb-2"><div className="progress-bar bg-primary" style={{ width: '25%' }}></div></div>
          <div className="progress mb-2"><div className="progress-bar bg-success" style={{ width: '50%' }}></div></div>
          <div className="progress mb-2"><div className="progress-bar bg-warning" style={{ width: '75%' }}></div></div>
          <div className="progress mb-2"><div className="progress-bar bg-danger" style={{ width: '100%' }}></div></div>
          <div className="progress mb-2"><div className="progress-bar bg-info" style={{ width: '40%' }}></div></div>
          <div className="progress mb-4"><div className="progress-bar bg-secondary" style={{ width: '60%' }}></div></div>
          <h5 className="text-sm font-semibold mb-2">With Labels</h5>
          <div className="progress progress-lg mb-2"><div className="progress-bar bg-primary has-label" style={{ width: '25%' }}>25%</div></div>
          <div className="progress progress-lg mb-2"><div className="progress-bar bg-success has-label" style={{ width: '50%' }}>50%</div></div>
          <div className="progress progress-lg mb-4"><div className="progress-bar bg-danger has-label" style={{ width: '75%' }}>75%</div></div>
          <h5 className="text-sm font-semibold mb-2">Stacked</h5>
          <div className="progress progress-lg">
            <div className="progress-bar bg-success has-label" style={{ width: '15%' }}>15%</div>
            <div className="progress-bar bg-warning has-label" style={{ width: '30%' }}>30%</div>
            <div className="progress-bar bg-danger has-label" style={{ width: '20%' }}>20%</div>
          </div>
        </AppCard>

        <AppCard title="Progress Bar Variants">
          <h5 className="text-sm font-semibold mb-2">Size Variants</h5>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Extra Small (.progress-xs)</p>
          <div className="progress progress-xs mb-2"><div className="progress-bar bg-primary" style={{ width: '60%' }}></div></div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Small (.progress-sm)</p>
          <div className="progress progress-sm mb-2"><div className="progress-bar bg-success" style={{ width: '60%' }}></div></div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Default</p>
          <div className="progress mb-2"><div className="progress-bar bg-warning" style={{ width: '60%' }}></div></div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Large (.progress-lg)</p>
          <div className="progress progress-lg mb-2"><div className="progress-bar bg-danger" style={{ width: '60%' }}></div></div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Extra Large (.progress-xxl)</p>
          <div className="progress progress-xxl mb-4"><div className="progress-bar bg-info" style={{ width: '60%' }}></div></div>
          <h5 className="text-sm font-semibold mb-2">Striped</h5>
          <div className="progress mb-2"><div className="progress-bar bg-primary progress-bar-striped" style={{ width: '40%' }}></div></div>
          <div className="progress mb-4"><div className="progress-bar bg-success progress-bar-striped" style={{ width: '60%' }}></div></div>
          <h5 className="text-sm font-semibold mb-2">Animated Stripes</h5>
          <div className="progress mb-2"><div className="progress-bar bg-primary progress-bar-striped progress-bar-animated" style={{ width: '45%' }}></div></div>
          <div className="progress"><div className="progress-bar bg-danger progress-bar-striped progress-bar-animated" style={{ width: '70%' }}></div></div>
        </AppCard>
      </div>

      {/* Spinners */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <AppCard title="Spinners">
          <h5 className="text-sm font-semibold mb-3">Border Spinners</h5>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <div className="w-8 h-8 border-4 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
            <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
            <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
            <div className="w-8 h-8 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h5 className="text-sm font-semibold mb-3">Growing Spinners</h5>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full animate-pulse"></div>
            <div className="w-8 h-8 bg-gray-600 rounded-full animate-pulse"></div>
            <div className="w-8 h-8 bg-green-600 rounded-full animate-pulse"></div>
            <div className="w-8 h-8 bg-red-600 rounded-full animate-pulse"></div>
            <div className="w-8 h-8 bg-yellow-500 rounded-full animate-pulse"></div>
            <div className="w-8 h-8 bg-cyan-500 rounded-full animate-pulse"></div>
          </div>
          <h5 className="text-sm font-semibold mb-3">Sizes</h5>
          <div className="flex flex-wrap items-center gap-4">
            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <div className="w-6 h-6 border-3 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </AppCard>

        {/* Dropdowns */}
        <AppCard title="Dropdowns">
          <h5 className="text-sm font-semibold mb-3">Basic Dropdowns</h5>
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="relative">
              <button onClick={() => setDropdownBlue(!dropdownBlue)} className="inline-flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                Dropdown <ChevronDown className="w-4 h-4" />
              </button>
              {dropdownBlue && (
                <div className="absolute z-10 mt-1 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border dark:border-gray-700">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-md">Action</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Another action</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Something else</a>
                  <hr className="border-gray-200 dark:border-gray-700" />
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-md">Separated link</a>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => setDropdownGreen(!dropdownGreen)} className="inline-flex items-center gap-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">
                Success <ChevronDown className="w-4 h-4" />
              </button>
              {dropdownGreen && (
                <div className="absolute z-10 mt-1 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border dark:border-gray-700">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-md">Action</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Another action</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-md">Something else</a>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => setDropdownRed(!dropdownRed)} className="inline-flex items-center gap-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm">
                Danger <ChevronDown className="w-4 h-4" />
              </button>
              {dropdownRed && (
                <div className="absolute z-10 mt-1 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border dark:border-gray-700">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-md">Action</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Another action</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-md">Something else</a>
                </div>
              )}
            </div>
          </div>

          <h5 className="text-sm font-semibold mb-3">Split Button Dropdown</h5>
          <div className="flex flex-wrap gap-3">
            <div className="relative inline-flex">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-l hover:bg-blue-700 text-sm">Action</button>
              <button onClick={() => setSplitBlue(!splitBlue)} className="px-2 py-2 bg-blue-700 text-white rounded-r hover:bg-blue-800 border-l border-blue-500">
                <ChevronDown className="w-4 h-4" />
              </button>
              {splitBlue && (
                <div className="absolute right-0 z-10 mt-1 top-full w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border dark:border-gray-700">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-md">Action</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Another action</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-md">Something else</a>
                </div>
              )}
            </div>
            <div className="relative inline-flex">
              <button className="px-4 py-2 bg-green-600 text-white rounded-l hover:bg-green-700 text-sm">Action</button>
              <button onClick={() => setSplitGreen(!splitGreen)} className="px-2 py-2 bg-green-700 text-white rounded-r hover:bg-green-800 border-l border-green-500">
                <ChevronDown className="w-4 h-4" />
              </button>
              {splitGreen && (
                <div className="absolute right-0 z-10 mt-1 top-full w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border dark:border-gray-700">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-md">Action</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Another action</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-md">Something else</a>
                </div>
              )}
            </div>
          </div>
        </AppCard>
      </div>

      {/* Pagination */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <AppCard title="Pagination">
          <h5 className="text-sm font-semibold mb-3">Default</h5>
          <nav className="mb-4">
            <ul className="inline-flex -space-x-px text-sm">
              <li><a href="#" className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">Previous</a></li>
              <li><a href="#" className="px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">1</a></li>
              <li><a href="#" className="px-3 py-2 border border-gray-300 dark:border-gray-600 bg-blue-600 text-white border-blue-600">2</a></li>
              <li><a href="#" className="px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">3</a></li>
              <li><a href="#" className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-r-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">Next</a></li>
            </ul>
          </nav>
          <h5 className="text-sm font-semibold mb-3">Large</h5>
          <nav className="mb-4">
            <ul className="inline-flex -space-x-px text-base">
              <li><a href="#" className="px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-l-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">Previous</a></li>
              <li><a href="#" className="px-4 py-2.5 border border-gray-300 dark:border-gray-600 bg-blue-600 text-white border-blue-600">1</a></li>
              <li><a href="#" className="px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">2</a></li>
              <li><a href="#" className="px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">3</a></li>
              <li><a href="#" className="px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-r-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">Next</a></li>
            </ul>
          </nav>
          <h5 className="text-sm font-semibold mb-3">Small</h5>
          <nav>
            <ul className="inline-flex -space-x-px text-xs">
              <li><a href="#" className="px-2 py-1.5 border border-gray-300 dark:border-gray-600 rounded-l-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">Prev</a></li>
              <li><a href="#" className="px-2 py-1.5 border border-gray-300 dark:border-gray-600 bg-blue-600 text-white border-blue-600">1</a></li>
              <li><a href="#" className="px-2 py-1.5 border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">2</a></li>
              <li><a href="#" className="px-2 py-1.5 border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">3</a></li>
              <li><a href="#" className="px-2 py-1.5 border border-gray-300 dark:border-gray-600 rounded-r-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">Next</a></li>
            </ul>
          </nav>
        </AppCard>

        {/* List Groups */}
        <AppCard title="List Groups">
          <h5 className="text-sm font-semibold mb-3">Basic List Group</h5>
          <ul className="border rounded dark:border-gray-700 divide-y dark:divide-gray-700 mb-4">
            <li className="px-4 py-2.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-medium">Active Item</li>
            <li className="px-4 py-2.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">Second Item</li>
            <li className="px-4 py-2.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">Third Item</li>
            <li className="px-4 py-2.5 bg-white dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed">Disabled Item</li>
            <li className="px-4 py-2.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">Fifth Item</li>
          </ul>
          <h5 className="text-sm font-semibold mb-3">With Badges</h5>
          <ul className="border rounded dark:border-gray-700 divide-y dark:divide-gray-700 mb-4">
            <li className="px-4 py-2.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex justify-between items-center">
              Inbox <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-600 text-white">14</span>
            </li>
            <li className="px-4 py-2.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex justify-between items-center">
              Starred <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-500 text-gray-900">2</span>
            </li>
            <li className="px-4 py-2.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex justify-between items-center">
              Sent <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-600 text-white">1</span>
            </li>
          </ul>
          <h5 className="text-sm font-semibold mb-3">Custom Content</h5>
          <ul className="border rounded dark:border-gray-700 divide-y dark:divide-gray-700">
            <li className="px-4 py-3 bg-white dark:bg-gray-800">
              <div className="flex justify-between mb-1">
                <h6 className="text-sm font-semibold text-gray-800 dark:text-gray-200">List group heading</h6>
                <small className="text-gray-500 text-xs">3 days ago</small>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Some placeholder content in a paragraph.</p>
            </li>
            <li className="px-4 py-3 bg-white dark:bg-gray-800">
              <div className="flex justify-between mb-1">
                <h6 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Another heading</h6>
                <small className="text-gray-500 text-xs">5 days ago</small>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">More content for the second item in this list.</p>
            </li>
          </ul>
        </AppCard>
      </div>

      {/* Accordion / Collapse */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <AppCard title="Accordion">
          <div className="border rounded dark:border-gray-700 divide-y dark:divide-gray-700">
            {[1, 2, 3].map((n) => (
              <div key={n}>
                <button onClick={() => setActiveAccordion(activeAccordion === n ? null : n)} className="w-full flex justify-between items-center px-4 py-3 text-left text-sm font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <span>Accordion Item #{n}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeAccordion === n ? 'rotate-180' : ''}`} />
                </button>
                {activeAccordion === n && (
                  <div className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border-t dark:border-gray-700">
                    {n === 1 && "This is the first item's accordion body. It is shown by default. You can toggle each section by clicking the header."}
                    {n === 2 && "This is the second item's accordion body. It is hidden by default and only shown when the header is clicked."}
                    {n === 3 && "This is the third item's accordion body. Only one item can be open at a time, creating an accordion behavior."}
                  </div>
                )}
              </div>
            ))}
          </div>
        </AppCard>

        <AppCard title="Collapse (Independent)">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Each section can be toggled independently.</p>
          <div className="space-y-3">
            <div>
              <button onClick={() => setCollapseA(!collapseA)} className="w-full flex justify-between items-center px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                <span>Toggle Section A</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${collapseA ? 'rotate-180' : ''}`} />
              </button>
              {collapseA && (
                <div className="mt-1 p-4 bg-gray-50 dark:bg-gray-800 rounded border dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400">
                  Content for section A. This collapses independently of other sections.
                </div>
              )}
            </div>
            <div>
              <button onClick={() => setCollapseB(!collapseB)} className="w-full flex justify-between items-center px-4 py-2 bg-green-600 text-white rounded text-sm hover:bg-green-700">
                <span>Toggle Section B</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${collapseB ? 'rotate-180' : ''}`} />
              </button>
              {collapseB && (
                <div className="mt-1 p-4 bg-gray-50 dark:bg-gray-800 rounded border dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400">
                  Content for section B. Each section has its own toggle state.
                </div>
              )}
            </div>
            <div>
              <button onClick={() => setCollapseC(!collapseC)} className="w-full flex justify-between items-center px-4 py-2 bg-red-600 text-white rounded text-sm hover:bg-red-700">
                <span>Toggle Section C</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${collapseC ? 'rotate-180' : ''}`} />
              </button>
              {collapseC && (
                <div className="mt-1 p-4 bg-gray-50 dark:bg-gray-800 rounded border dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400">
                  Content for section C. Multiple sections can be open simultaneously.
                </div>
              )}
            </div>
          </div>
        </AppCard>
      </div>
    </div>
  )
}
