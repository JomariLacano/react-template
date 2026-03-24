import { useDarkModeStore } from '@/stores/darkMode'
import { Sun, Moon, Monitor } from 'lucide-react'

export default function DarkModeToggle() {
  const mode = useDarkModeStore((s) => s.mode)
  const toggle = useDarkModeStore((s) => s.toggle)

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggle}
        title="Toggle dark mode"
        className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <Sun
          className="w-5 h-5"
          style={{ display: mode === 'light' ? undefined : 'none' }}
        />
        <Moon
          className="w-5 h-5"
          style={{ display: mode === 'dark' ? undefined : 'none' }}
        />
        <Monitor
          className="w-5 h-5"
          style={{ display: mode === 'auto' ? undefined : 'none' }}
        />
      </button>
    </div>
  )
}
