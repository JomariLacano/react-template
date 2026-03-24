import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Chart, registerables } from 'chart.js'
import router from './router'
import { initDarkMode } from './stores/darkMode'
import { initLayout } from './stores/layout'
import { initSidebar } from './stores/sidebar'
import { initAccessibility } from './stores/accessibility'

import './assets/css/app.css'

Chart.register(...registerables)

// Initialize stores
initDarkMode()
initLayout()
initSidebar()
initAccessibility()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
