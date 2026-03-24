import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import DarkModeToggle from '@/components/ui/DarkModeToggle'

export default function AuthLayout() {
  useEffect(() => {
    document.body.className =
      'bg-gray-100 dark:bg-gray-900 font-sans text-gray-800 dark:text-gray-200'
    return () => {
      document.body.className = ''
    }
  }, [])

  return (
    <>
      <DarkModeToggle />
      <Outlet />
    </>
  )
}
