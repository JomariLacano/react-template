import { useState, useMemo } from 'react'
import { X } from 'lucide-react'

interface GalleryImage {
  src: string
  title: string
  category: string
  desc: string
}

const categories = ['all', 'nature', 'urban', 'art', 'products'] as const

const images: GalleryImage[] = [
  { src: '/assets/img/photo1.png', title: 'Mountain Sunrise', category: 'nature', desc: 'Beautiful sunrise over the mountains' },
  { src: '/assets/img/photo2.png', title: 'City Skyline', category: 'urban', desc: 'Modern city skyline at dusk' },
  { src: '/assets/img/photo3.jpg', title: 'Forest Path', category: 'nature', desc: 'A winding path through autumn forest' },
  { src: '/assets/img/photo4.jpg', title: 'Abstract Art', category: 'art', desc: 'Colorful abstract digital artwork' },
  { src: '/assets/img/prod-1.jpg', title: 'Product Showcase', category: 'products', desc: 'Featured product photography' },
  { src: '/assets/img/prod-2.jpg', title: 'Tech Gadget', category: 'products', desc: 'Latest tech gadget close-up' },
  { src: '/assets/img/prod-3.jpg', title: 'Office Space', category: 'urban', desc: 'Modern workspace design' },
  { src: '/assets/img/prod-4.jpg', title: 'Creative Design', category: 'art', desc: 'Minimalist creative design' },
  { src: '/assets/img/prod-5.jpg', title: 'Nature Reserve', category: 'nature', desc: 'Peaceful nature reserve landscape' },
  { src: '/assets/img/boxed-bg.jpg', title: 'Texture Pattern', category: 'art', desc: 'Seamless texture pattern background' },
  { src: '/assets/img/photo1.png', title: 'Lakeside View', category: 'nature', desc: 'Calm lake reflecting the sky' },
  { src: '/assets/img/photo2.png', title: 'Downtown Night', category: 'urban', desc: 'City lights at night' },
]

export default function GalleryPage() {
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState(false)
  const [currentImage, setCurrentImage] = useState('')
  const [currentTitle, setCurrentTitle] = useState('')

  const filteredImages = useMemo(() =>
    filter === 'all' ? images : images.filter(img => img.category === filter),
    [filter]
  )

  function openLightbox(img: GalleryImage) {
    setCurrentImage(img.src)
    setCurrentTitle(img.title)
    setLightbox(true)
  }

  function closeLightbox() {
    setLightbox(false)
  }

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 text-sm rounded transition font-medium capitalize ${filter === cat ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          >
            {cat === 'all' ? 'All' : cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
        {filteredImages.map((img, index) => (
          <div
            key={`${img.title}-${index}`}
            className="card overflow-hidden group cursor-pointer"
            onClick={() => openLightbox(img)}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <h4 className="text-white font-semibold text-sm">{img.title}</h4>
                  <p className="text-white/70 text-xs">{img.desc}</p>
                </div>
              </div>
            </div>
            <div className="p-3">
              <h4 className="text-sm font-medium truncate">{img.title}</h4>
              <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">{img.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={(e) => { if (e.target === e.currentTarget) closeLightbox() }}
        >
          <div className="relative max-w-4xl w-full">
            <button onClick={closeLightbox} className="absolute -top-10 right-0 text-white hover:text-gray-300 transition">
              <X className="w-6 h-6" />
            </button>
            <img src={currentImage} alt={currentTitle} className="w-full max-h-[80vh] object-contain rounded-lg" />
            <p className="text-white text-center mt-3 font-medium">{currentTitle}</p>
          </div>
        </div>
      )}
    </>
  )
}
