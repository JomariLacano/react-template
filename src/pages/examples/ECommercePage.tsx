import { useState, useMemo } from 'react'
import { LayoutGrid, List, SlidersHorizontal, ShoppingCart, Star } from 'lucide-react'

interface Product {
  name: string
  price: number
  rating: number
  reviews: number
  category: string
  image: string
  badge: string
}

const products: Product[] = [
  { name: 'Wireless Bluetooth Headphones', price: 79.99, rating: 4.5, reviews: 128, category: 'electronics', image: 'assets/img/product-headphones.jpg', badge: 'Sale' },
  { name: 'Premium Leather Backpack', price: 129.99, rating: 4.8, reviews: 89, category: 'accessories', image: 'assets/img/product-backpack.jpg', badge: '' },
  { name: 'Smart Fitness Watch', price: 199.99, rating: 4.3, reviews: 256, category: 'electronics', image: 'assets/img/product-watch.jpg', badge: 'New' },
  { name: 'Organic Cotton T-Shirt', price: 34.99, rating: 4.6, reviews: 412, category: 'clothing', image: 'assets/img/product-shirt.jpg', badge: '' },
  { name: 'Mechanical Keyboard RGB', price: 149.99, rating: 4.7, reviews: 67, category: 'electronics', image: 'assets/img/product-keyboard.jpg', badge: 'Hot' },
  { name: 'Canvas Sneakers', price: 59.99, rating: 4.2, reviews: 183, category: 'clothing', image: 'assets/img/product-sneakers.jpg', badge: 'Sale' },
  { name: 'Stainless Steel Water Bottle', price: 24.99, rating: 4.9, reviews: 534, category: 'accessories', image: 'assets/img/product-bottle.jpg', badge: '' },
  { name: 'Wireless Charging Pad', price: 39.99, rating: 4.4, reviews: 301, category: 'electronics', image: 'assets/img/product-charger.svg', badge: '' },
]

function stars(rating: number): ('full' | 'half' | 'empty')[] {
  return Array.from({ length: 5 }, (_, i) =>
    i < Math.floor(rating) ? 'full' : (i < rating ? 'half' : 'empty')
  )
}

function badgeColor(badge: string): string {
  if (badge === 'Sale') return 'bg-red-500'
  if (badge === 'New') return 'bg-green-500'
  if (badge === 'Hot') return 'bg-orange-500'
  return 'bg-blue-500'
}

export default function ECommercePage() {
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('name')
  const [showFilters, setShowFilters] = useState(true)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [minRating, setMinRating] = useState(0)

  const sorted = useMemo(() => {
    let list = [...products]
    if (selectedCategories.length > 0) {
      list = list.filter(p => selectedCategories.includes(p.category))
    }
    if (minRating > 0) {
      list = list.filter(p => p.rating >= minRating)
    }
    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price)
    else if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price)
    else if (sortBy === 'rating') list.sort((a, b) => b.rating - a.rating)
    else if (sortBy === 'popularity') list.sort((a, b) => b.reviews - a.reviews)
    else list.sort((a, b) => a.name.localeCompare(b.name))
    return list
  }, [selectedCategories, minRating, sortBy])

  function toggleCategory(cat: string) {
    setSelectedCategories((prev) => {
      const idx = prev.indexOf(cat)
      if (idx > -1) return prev.filter(c => c !== cat)
      return [...prev, cat]
    })
  }

  function resetFilters() {
    setSelectedCategories([])
    setMinRating(0)
    setSortBy('name')
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 mb-6">

      {/* Sidebar Filters */}
      {showFilters && (
        <div className="lg:w-64 shrink-0">
          <div className="card sticky top-4">
            <div className="card-header">
              <h3 className="card-title">Filters</h3>
            </div>
            <div className="card-body space-y-5">

              {/* Category */}
              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Category</h4>
                <label className="flex items-center gap-2 text-sm mb-1.5 cursor-pointer">
                  <input type="checkbox" onChange={() => toggleCategory('electronics')} checked={selectedCategories.includes('electronics')} className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500" />
                  Electronics
                </label>
                <label className="flex items-center gap-2 text-sm mb-1.5 cursor-pointer">
                  <input type="checkbox" onChange={() => toggleCategory('clothing')} checked={selectedCategories.includes('clothing')} className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500" />
                  Clothing
                </label>
                <label className="flex items-center gap-2 text-sm mb-1.5 cursor-pointer">
                  <input type="checkbox" onChange={() => toggleCategory('accessories')} checked={selectedCategories.includes('accessories')} className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500" />
                  Accessories
                </label>
              </div>

              {/* Rating Filter */}
              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Min Rating</h4>
                <div className="space-y-1">
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="radio" name="rating" value={0} checked={minRating === 0} onChange={() => setMinRating(0)} className="border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500" /> All
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="radio" name="rating" value={4} checked={minRating === 4} onChange={() => setMinRating(4)} className="border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500" /> 4+ Stars
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="radio" name="rating" value={4.5} checked={minRating === 4.5} onChange={() => setMinRating(4.5)} className="border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500" /> 4.5+ Stars
                  </label>
                </div>
              </div>

              {/* Reset */}
              <button onClick={resetFilters} className="w-full px-3 py-1.5 text-sm bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                Reset Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Product Area */}
      <div className="flex-1">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
          <div className="flex items-center gap-2">
            <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden px-3 py-1.5 text-sm bg-white dark:bg-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition inline-flex items-center gap-1">
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
            <p className="text-sm text-gray-500 dark:text-gray-400">Showing <strong>{sorted.length}</strong> products</p>
          </div>
          <div className="flex items-center gap-2">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="name">Sort by Name</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="popularity">Most Popular</option>
            </select>
            <div className="flex gap-1 bg-white dark:bg-gray-800 rounded p-0.5">
              <button onClick={() => setView('grid')} className={`p-1.5 rounded transition ${view === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-500'}`}>
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button onClick={() => setView('list')} className={`p-1.5 rounded transition ${view === 'list' ? 'bg-blue-600 text-white' : 'text-gray-500'}`}>
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Grid View */}
        <div style={{ display: view === 'grid' ? 'grid' : 'none' }} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {sorted.map((product, i) => (
            <div key={i} className="card overflow-hidden group">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                {product.badge && <span className={`${badgeColor(product.badge)} absolute top-2 left-2 text-white text-xs px-2 py-0.5 rounded font-medium`}>{product.badge}</span>}
              </div>
              <div className="card-body">
                <h4 className="font-semibold text-sm mb-1 line-clamp-1">{product.name}</h4>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex text-yellow-400">
                    {stars(product.rating).map((s, j) => (
                      <Star
                        key={j}
                        className={`w-3.5 h-3.5 ${s === 'full' ? 'fill-current' : s === 'half' ? 'fill-current opacity-50' : 'text-gray-300 dark:text-gray-600'}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">${product.price.toFixed(2)}</span>
                  <button className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition inline-flex items-center gap-1">
                    <ShoppingCart className="w-3 h-3" /> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* List View */}
        <div style={{ display: view === 'list' ? 'flex' : 'none' }} className="flex flex-col space-y-3">
          {sorted.map((product, i) => (
            <div key={i} className="card">
              <div className="card-body flex flex-col sm:flex-row gap-4">
                <div className="relative w-full sm:w-40 h-32 shrink-0 overflow-hidden rounded bg-gray-100 dark:bg-gray-800">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  {product.badge && <span className={`${badgeColor(product.badge)} absolute top-2 left-2 text-white text-xs px-2 py-0.5 rounded font-medium`}>{product.badge}</span>}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-base mb-1">{product.name}</h4>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex text-yellow-400">
                      {stars(product.rating).map((s, j) => (
                        <Star
                          key={j}
                          className={`w-3.5 h-3.5 ${s === 'full' ? 'fill-current' : 'text-gray-300 dark:text-gray-600'}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-400">{product.rating} ({product.reviews} reviews)</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">High-quality product with premium materials and excellent craftsmanship. Perfect for everyday use.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition inline-flex items-center gap-1">
                      <ShoppingCart className="w-4 h-4" /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
