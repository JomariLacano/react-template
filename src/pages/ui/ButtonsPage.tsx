import AppCard from '../../components/widgets/AppCard'
import {
  Plus, Save, Trash, Pencil, Download, Check, X, Star, Search, Settings,
  Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify,
  Link, Image
} from 'lucide-react'

export default function ButtonsPage() {
  return (
    <div>

      {/* Standard Buttons & Outline Buttons */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <AppCard title="Standard Buttons">
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-medium transition-colors">Primary</button>
            <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm font-medium transition-colors">Secondary</button>
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm font-medium transition-colors">Success</button>
            <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm font-medium transition-colors">Danger</button>
            <button className="px-4 py-2 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-600 text-sm font-medium transition-colors">Warning</button>
            <button className="px-4 py-2 bg-cyan-500 text-gray-900 rounded hover:bg-cyan-600 text-sm font-medium transition-colors">Info</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm font-medium transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Light</button>
            <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 text-sm font-medium transition-colors dark:bg-gray-600 dark:hover:bg-gray-500">Dark</button>
          </div>
        </AppCard>

        <AppCard title="Outline Buttons">
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white text-sm font-medium transition-colors">Primary</button>
            <button className="px-4 py-2 border-2 border-gray-600 text-gray-600 rounded hover:bg-gray-600 hover:text-white text-sm font-medium transition-colors dark:text-gray-400 dark:border-gray-400 dark:hover:bg-gray-400 dark:hover:text-gray-900">Secondary</button>
            <button className="px-4 py-2 border-2 border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white text-sm font-medium transition-colors">Success</button>
            <button className="px-4 py-2 border-2 border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white text-sm font-medium transition-colors">Danger</button>
            <button className="px-4 py-2 border-2 border-yellow-500 text-yellow-600 rounded hover:bg-yellow-500 hover:text-gray-900 text-sm font-medium transition-colors">Warning</button>
            <button className="px-4 py-2 border-2 border-cyan-500 text-cyan-600 rounded hover:bg-cyan-500 hover:text-gray-900 text-sm font-medium transition-colors">Info</button>
            <button className="px-4 py-2 border-2 border-gray-300 text-gray-600 rounded hover:bg-gray-200 text-sm font-medium transition-colors dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">Light</button>
            <button className="px-4 py-2 border-2 border-gray-900 text-gray-900 rounded hover:bg-gray-900 hover:text-white text-sm font-medium transition-colors dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-gray-900">Dark</button>
          </div>
        </AppCard>
      </div>

      {/* Button Sizes & Block Level */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <AppCard title="Button Sizes">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-base font-medium transition-colors">Large</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-medium transition-colors">Default</button>
            <button className="px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs font-medium transition-colors">Small</button>
            <button className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs font-medium transition-colors">Extra Small</button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white text-base font-medium transition-colors">Large</button>
            <button className="px-4 py-2 border-2 border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white text-sm font-medium transition-colors">Default</button>
            <button className="px-3 py-1.5 border-2 border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white text-xs font-medium transition-colors">Small</button>
            <button className="px-2 py-1 border-2 border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white text-xs font-medium transition-colors">Extra Small</button>
          </div>
        </AppCard>

        <AppCard title="Block Level Buttons">
          <div className="space-y-3">
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-medium transition-colors">Block Primary</button>
            <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm font-medium transition-colors">Block Success</button>
            <button className="w-full px-4 py-2 border-2 border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white text-sm font-medium transition-colors">Block Outline Danger</button>
          </div>
        </AppCard>
      </div>

      {/* Icon Buttons & Disabled/Loading */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <AppCard title="Icon Buttons">
          <h5 className="text-sm font-semibold mb-3">With Text</h5>
          <div className="flex flex-wrap gap-2 mb-4">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-medium transition-colors">
              <Plus className="w-4 h-4" /> Add New
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm font-medium transition-colors">
              <Save className="w-4 h-4" /> Save
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm font-medium transition-colors">
              <Trash className="w-4 h-4" /> Delete
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-600 text-sm font-medium transition-colors">
              <Pencil className="w-4 h-4" /> Edit
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-gray-900 rounded hover:bg-cyan-600 text-sm font-medium transition-colors">
              <Download className="w-4 h-4" /> Export
            </button>
          </div>

          <h5 className="text-sm font-semibold mb-3">Icon Only</h5>
          <div className="flex flex-wrap gap-2">
            <button className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              <Plus className="w-5 h-5" />
            </button>
            <button className="p-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
              <Check className="w-5 h-5" />
            </button>
            <button className="p-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
              <X className="w-5 h-5" />
            </button>
            <button className="p-2 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-600 transition-colors">
              <Star className="w-5 h-5" />
            </button>
            <button className="p-2 bg-cyan-500 text-gray-900 rounded hover:bg-cyan-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </AppCard>

        <AppCard title="Disabled & Loading States">
          <h5 className="text-sm font-semibold mb-3">Disabled</h5>
          <div className="flex flex-wrap gap-2 mb-4">
            <button disabled className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium opacity-50 cursor-not-allowed">Primary</button>
            <button disabled className="px-4 py-2 bg-green-600 text-white rounded text-sm font-medium opacity-50 cursor-not-allowed">Success</button>
            <button disabled className="px-4 py-2 bg-red-600 text-white rounded text-sm font-medium opacity-50 cursor-not-allowed">Danger</button>
            <button disabled className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded text-sm font-medium opacity-50 cursor-not-allowed">Outline</button>
          </div>

          <h5 className="text-sm font-semibold mb-3">Loading States</h5>
          <div className="flex flex-wrap gap-2">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium" disabled>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Loading...
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded text-sm font-medium" disabled>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Saving...
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded text-sm font-medium" disabled>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Deleting...
            </button>
          </div>
        </AppCard>
      </div>

      {/* Button Groups & Toolbar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <AppCard title="Button Groups">
          <h5 className="text-sm font-semibold mb-3">Basic Group</h5>
          <div className="inline-flex rounded mb-4" role="group">
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-l hover:bg-blue-700 transition-colors">Left</button>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium border-l border-blue-500 hover:bg-blue-700 transition-colors">Middle</button>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-r border-l border-blue-500 hover:bg-blue-700 transition-colors">Right</button>
          </div>

          <h5 className="text-sm font-semibold mb-3">Outline Group</h5>
          <div className="inline-flex rounded border-2 border-blue-600 mb-4" role="group">
            <button className="px-4 py-2 text-sm font-medium rounded-l bg-blue-600 text-white transition-colors">Active</button>
            <button className="px-4 py-2 text-blue-600 text-sm font-medium border-l-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors">Middle</button>
            <button className="px-4 py-2 text-blue-600 text-sm font-medium rounded-r border-l-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors">Right</button>
          </div>

          <h5 className="text-sm font-semibold mb-3">Mixed Colors</h5>
          <div className="inline-flex rounded" role="group">
            <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-l hover:bg-green-700 transition-colors">
              <Check className="w-4 h-4 inline" />
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-gray-900 text-sm font-medium hover:bg-yellow-600 transition-colors">
              <Pencil className="w-4 h-4 inline" />
            </button>
            <button className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-r hover:bg-red-700 transition-colors">
              <Trash className="w-4 h-4 inline" />
            </button>
          </div>
        </AppCard>

        <AppCard title="Button Toolbar">
          <h5 className="text-sm font-semibold mb-3">Toolbar with Groups</h5>
          <div className="flex flex-wrap gap-3 mb-4" role="toolbar">
            <div className="inline-flex rounded" role="group">
              <button className="px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-l hover:bg-blue-700 transition-colors">
                <Bold className="w-4 h-4" />
              </button>
              <button className="px-3 py-2 bg-blue-600 text-white text-sm font-medium border-l border-blue-500 hover:bg-blue-700 transition-colors">
                <Italic className="w-4 h-4" />
              </button>
              <button className="px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-r border-l border-blue-500 hover:bg-blue-700 transition-colors">
                <Underline className="w-4 h-4" />
              </button>
            </div>
            <div className="inline-flex rounded" role="group">
              <button className="px-3 py-2 bg-gray-600 text-white text-sm font-medium rounded-l hover:bg-gray-700 transition-colors">
                <AlignLeft className="w-4 h-4" />
              </button>
              <button className="px-3 py-2 bg-gray-600 text-white text-sm font-medium border-l border-gray-500 hover:bg-gray-700 transition-colors">
                <AlignCenter className="w-4 h-4" />
              </button>
              <button className="px-3 py-2 bg-gray-600 text-white text-sm font-medium border-l border-gray-500 hover:bg-gray-700 transition-colors">
                <AlignRight className="w-4 h-4" />
              </button>
              <button className="px-3 py-2 bg-gray-600 text-white text-sm font-medium rounded-r border-l border-gray-500 hover:bg-gray-700 transition-colors">
                <AlignJustify className="w-4 h-4" />
              </button>
            </div>
            <div className="inline-flex rounded" role="group">
              <button className="px-3 py-2 bg-green-600 text-white text-sm font-medium rounded-l hover:bg-green-700 transition-colors">
                <Link className="w-4 h-4" />
              </button>
              <button className="px-3 py-2 bg-green-600 text-white text-sm font-medium rounded-r border-l border-green-500 hover:bg-green-700 transition-colors">
                <Image className="w-4 h-4" />
              </button>
            </div>
          </div>

          <h5 className="text-sm font-semibold mb-3">Vertical Group</h5>
          <div className="inline-flex flex-col rounded" role="group">
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-t hover:bg-blue-700 transition-colors">Top</button>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium border-t border-blue-500 hover:bg-blue-700 transition-colors">Middle</button>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-b border-t border-blue-500 hover:bg-blue-700 transition-colors">Bottom</button>
          </div>
        </AppCard>
      </div>

      {/* Gradient Buttons */}
      <AppCard title="Gradient Buttons" cardClass="mb-6">
        <div className="flex flex-wrap gap-3">
          <button className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 text-sm font-medium transition-all shadow-md hover:shadow-lg">Primary Gradient</button>
          <button className="px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg hover:from-green-600 hover:to-green-800 text-sm font-medium transition-all shadow-md hover:shadow-lg">Success Gradient</button>
          <button className="px-5 py-2.5 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg hover:from-red-600 hover:to-red-800 text-sm font-medium transition-all shadow-md hover:shadow-lg">Danger Gradient</button>
          <button className="px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg hover:from-yellow-500 hover:to-orange-600 text-sm font-medium transition-all shadow-md hover:shadow-lg">Warning Gradient</button>
          <button className="px-5 py-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:from-cyan-500 hover:to-blue-600 text-sm font-medium transition-all shadow-md hover:shadow-lg">Info Gradient</button>
          <button className="px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 text-sm font-medium transition-all shadow-md hover:shadow-lg">Purple-Pink</button>
          <button className="px-5 py-2.5 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg hover:from-gray-800 hover:to-gray-950 text-sm font-medium transition-all shadow-md hover:shadow-lg">Dark Gradient</button>
        </div>
      </AppCard>

      {/* Rounded & Pill Buttons */}
      <AppCard title="Rounded & Pill Buttons" cardClass="mb-6">
        <div className="flex flex-wrap gap-3">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 text-sm font-medium transition-colors">Primary Pill</button>
          <button className="px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 text-sm font-medium transition-colors">Success Pill</button>
          <button className="px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 text-sm font-medium transition-colors">Danger Pill</button>
          <button className="px-5 py-2 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white text-sm font-medium transition-colors">Outline Pill</button>
          <button className="px-5 py-2 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white text-sm font-medium transition-colors">Outline Pill</button>
          <button className="px-5 py-2 border-2 border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white text-sm font-medium transition-colors">Outline Pill</button>
        </div>
      </AppCard>

    </div>
  )
}
