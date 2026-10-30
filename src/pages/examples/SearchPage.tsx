import { useState } from 'react'
import { Search, Globe, Image, Newspaper, ChevronLeft, ChevronRight } from 'lucide-react'

export default function SearchPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'images' | 'news'>('all')
  const [query, setQuery] = useState('JL Tempate dashboard')
  const [currentPage, setCurrentPage] = useState(1)

  const allResults = [
    {
      title: 'JL Tempate - React Dashboard Template',
      url: 'https://jltempate.dev/docs/getting-started',
      desc: 'A responsive admin dashboard built with React, TypeScript, and Tailwind CSS. Includes reusable UI components, dark mode, multiple layouts, and Chart.js integration.',
    },
    {
      title: 'Getting Started with JL Tempate - Installation Guide',
      url: 'https://jltempate.dev/docs/installation',
      desc: 'Learn how to install and configure JL Tempate in your project with npm and get started with the included dashboard pages and components.',
    },
    {
      title: 'Dashboard Components & Widgets - JL Tempate Docs',
      url: 'https://jltempate.dev/docs/widgets',
      desc: 'Explore small boxes, info boxes, cards, direct chat, and timeline widgets. Each component comes with multiple style variants and dark mode support.',
    },
    {
      title: 'Building Custom Themes - JL Tempate Customization',
      url: 'https://jltempate.dev/docs/theming',
      desc: 'Customize colors, fonts, spacing, and component styles using Tailwind CSS configuration. Create your own branded theme in minutes.',
    },
    {
      title: 'JL Tempate vs Other Admin Templates - Comparison 2026',
      url: 'https://blog.example.com/admin-template-comparison',
      desc: 'A comparison of popular admin dashboard templates, covering features, performance, and developer experience.',
    },
    {
      title: 'Chart.js Integration in JL Tempate',
      url: 'https://jltempate.dev/docs/charts',
      desc: 'Learn to create line, bar, doughnut, radar, and polar area charts using Chart.js. Includes responsive chart cards and inline sparkline examples.',
    },
  ]

  const imageResults = [
    { src: 'assets/img/gallery-mountain.jpg', label: 'Mountain Range' },
    { src: 'assets/img/gallery-city.jpg', label: 'City Skyline' },
    { src: 'assets/img/gallery-forest.jpg', label: 'Forest Path' },
    { src: 'assets/img/gallery-abstract.jpg', label: 'Abstract Art' },
    { src: 'assets/img/product-headphones.jpg', label: 'Wireless Headphones' },
    { src: 'assets/img/product-backpack.jpg', label: 'Travel Backpack' },
    { src: 'assets/img/product-watch.jpg', label: 'Minimal Wristwatch' },
    { src: 'assets/img/product-shirt.jpg', label: 'Cotton T-Shirt' },
  ]

  const newsResults = [
    {
      title: 'JL Tempate 1.0 Released with Full Dark Mode Support',
      source: 'TechNews - March 10, 2026',
      desc: 'The popular open-source admin template now features complete dark mode, improved accessibility, and 20 new UI components...',
      thumb: 'assets/img/gallery-mountain.jpg',
    },
    {
      title: 'Top 10 Admin Dashboards for 2026 - JL Tempate Makes the List',
      source: 'WebDev Weekly - February 28, 2026',
      desc: 'Our annual roundup of admin dashboard templates includes JL Tempate as a pick for React and Tailwind CSS projects...',
      thumb: 'assets/img/gallery-city.jpg',
    },
    {
      title: 'How JL Tempate Simplifies Admin Panel Development',
      source: 'Dev.to - February 15, 2026',
      desc: 'A look at how JL Tempate combines reusable React components with Tailwind CSS to speed up admin panel development...',
      thumb: 'assets/img/gallery-forest.jpg',
    },
  ]

  const pages = [1, 2, 3, 48]

  return (
    <>
      {/* Search Bar */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="px-6 py-2.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition font-medium">Search</button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-4 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setActiveTab('all')}
          className={`py-2 px-1 border-b-2 text-sm font-medium transition ${activeTab === 'all' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
        >
          <Globe className="w-4 h-4 inline mr-1" /> All Results
        </button>
        <button
          onClick={() => setActiveTab('images')}
          className={`py-2 px-1 border-b-2 text-sm font-medium transition ${activeTab === 'images' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
        >
          <Image className="w-4 h-4 inline mr-1" /> Images
        </button>
        <button
          onClick={() => setActiveTab('news')}
          className={`py-2 px-1 border-b-2 text-sm font-medium transition ${activeTab === 'news' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
        >
          <Newspaper className="w-4 h-4 inline mr-1" /> News
        </button>
      </div>

      {/* Results Count */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        Found <strong className="text-gray-700 dark:text-gray-200">2,847</strong> results for "<span className="font-medium">{query}</span>"
      </p>

      {/* All Results Tab */}
      <div style={{ display: activeTab === 'all' ? 'block' : 'none' }} className="space-y-4 mb-6">
        {allResults.map((result, i) => (
          <div key={i} className="card">
            <div className="card-body">
              <a href="#" className="text-blue-600 hover:underline font-semibold text-base">{result.title}</a>
              <p className="text-xs text-green-600 dark:text-green-400 mt-0.5">{result.url}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{result.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Images Tab */}
      <div style={{ display: activeTab === 'images' ? 'block' : 'none' }} className="mb-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {imageResults.map((img, i) => (
            <div key={i} className="group cursor-pointer">
              <img src={img.src} alt="Screenshot" className="w-full aspect-square object-cover rounded-lg group-hover:opacity-80 transition" />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">{img.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* News Tab */}
      <div style={{ display: activeTab === 'news' ? 'block' : 'none' }} className="space-y-4 mb-6">
        {newsResults.map((news, i) => (
          <div key={i} className="card">
            <div className="card-body flex gap-4">
              <img src={news.thumb} alt="Thumbnail" className="w-24 h-20 object-cover rounded shrink-0 hidden sm:block" />
              <div>
                <a href="#" className="text-blue-600 hover:underline font-semibold">{news.title}</a>
                <p className="text-xs text-gray-400 mt-0.5">{news.source}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{news.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav className="flex justify-center mb-6">
        <ul className="flex items-center gap-1">
          <li>
            <button className="px-3 py-2 text-sm rounded text-gray-400 cursor-not-allowed" disabled>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </li>
          {pages.map((page) => (
            <li key={page}>
              {page === 48 && currentPage < 4 && (
                <span className="px-2 text-gray-400">...</span>
              )}
              <button
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 text-sm rounded transition min-w-[36px] ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
              >
                {page}
              </button>
            </li>
          ))}
          <li>
            <button className="px-3 py-2 text-sm rounded bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <ChevronRight className="w-4 h-4" />
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}
