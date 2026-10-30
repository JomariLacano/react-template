import { createHashRouter, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import DefaultLayout from '@/layouts/DefaultLayout'
import AuthLayout from '@/layouts/AuthLayout'
import ErrorLayout from '@/layouts/ErrorLayout'

// Lazy load all pages
const DashboardV1 = lazy(() => import('@/pages/dashboard/DashboardV1'))
const DashboardV2 = lazy(() => import('@/pages/dashboard/DashboardV2'))
const DashboardV3 = lazy(() => import('@/pages/dashboard/DashboardV3'))

const SmallBoxPage = lazy(() => import('@/pages/widgets/SmallBoxPage'))
const InfoBoxPage = lazy(() => import('@/pages/widgets/InfoBoxPage'))
const CardsPage = lazy(() => import('@/pages/widgets/CardsPage'))

const GeneralPage = lazy(() => import('@/pages/ui/GeneralPage'))
const IconsPage = lazy(() => import('@/pages/ui/IconsPage'))
const TimelinePage = lazy(() => import('@/pages/ui/TimelinePage'))
const ButtonsPage = lazy(() => import('@/pages/ui/ButtonsPage'))
const ModalsPage = lazy(() => import('@/pages/ui/ModalsPage'))

const GeneralFormsPage = lazy(() => import('@/pages/forms/GeneralFormsPage'))
const ValidationFormsPage = lazy(() => import('@/pages/forms/ValidationFormsPage'))

const SimpleTablesPage = lazy(() => import('@/pages/tables/SimpleTablesPage'))
const DataTablesPage = lazy(() => import('@/pages/tables/DataTablesPage'))

const ChartJsPage = lazy(() => import('@/pages/charts/ChartJsPage'))
const InlinePage = lazy(() => import('@/pages/charts/InlinePage'))

const FixedSidebarPage = lazy(() => import('@/pages/layout/FixedSidebarPage'))
const FixedHeaderPage = lazy(() => import('@/pages/layout/FixedHeaderPage'))
const FixedFooterPage = lazy(() => import('@/pages/layout/FixedFooterPage'))
const FixedCompletePage = lazy(() => import('@/pages/layout/FixedCompletePage'))
const CollapsedSidebarPage = lazy(() => import('@/pages/layout/CollapsedSidebarPage'))
const SidebarMiniPage = lazy(() => import('@/pages/layout/SidebarMiniPage'))
const UnfixedSidebarPage = lazy(() => import('@/pages/layout/UnfixedSidebarPage'))
const CustomAreaPage = lazy(() => import('@/pages/layout/CustomAreaPage'))
const LogoSwitchPage = lazy(() => import('@/pages/layout/LogoSwitchPage'))
const RtlPage = lazy(() => import('@/pages/layout/RtlPage'))

const ProfilePage = lazy(() => import('@/pages/examples/ProfilePage'))
const InvoicePage = lazy(() => import('@/pages/examples/InvoicePage'))
const GalleryPage = lazy(() => import('@/pages/examples/GalleryPage'))
const SearchPage = lazy(() => import('@/pages/examples/SearchPage'))
const ProjectsPage = lazy(() => import('@/pages/examples/ProjectsPage'))
const ContactsPage = lazy(() => import('@/pages/examples/ContactsPage'))
const ECommercePage = lazy(() => import('@/pages/examples/ECommercePage'))

const LoginV1 = lazy(() => import('@/pages/examples/LoginV1'))
const LoginV2 = lazy(() => import('@/pages/examples/LoginV2'))
const RegisterV1 = lazy(() => import('@/pages/examples/RegisterV1'))
const RegisterV2 = lazy(() => import('@/pages/examples/RegisterV2'))
const Lockscreen = lazy(() => import('@/pages/examples/Lockscreen'))

const Error404 = lazy(() => import('@/pages/examples/Error404'))
const Error500 = lazy(() => import('@/pages/examples/Error500'))

const router = createHashRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Suspense fallback={null}><DashboardV1 /></Suspense>,
        handle: { activePage: 'index', pageTitle: 'Dashboard v1' },
      },
      {
        path: 'dashboard-v2',
        element: <Suspense fallback={null}><DashboardV2 /></Suspense>,
        handle: { activePage: 'index2', pageTitle: 'Dashboard v2' },
      },
      {
        path: 'dashboard-v3',
        element: <Suspense fallback={null}><DashboardV3 /></Suspense>,
        handle: { activePage: 'index3', pageTitle: 'Dashboard v3' },
      },
      {
        path: 'widgets/small-box',
        element: <Suspense fallback={null}><SmallBoxPage /></Suspense>,
        handle: { activePage: 'widgets-small-box', pageTitle: 'Small Box' },
      },
      {
        path: 'widgets/info-box',
        element: <Suspense fallback={null}><InfoBoxPage /></Suspense>,
        handle: { activePage: 'widgets-info-box', pageTitle: 'Info Box' },
      },
      {
        path: 'widgets/cards',
        element: <Suspense fallback={null}><CardsPage /></Suspense>,
        handle: { activePage: 'widgets-cards', pageTitle: 'Cards' },
      },
      {
        path: 'ui/general',
        element: <Suspense fallback={null}><GeneralPage /></Suspense>,
        handle: { activePage: 'ui-general', pageTitle: 'General UI' },
      },
      {
        path: 'ui/icons',
        element: <Suspense fallback={null}><IconsPage /></Suspense>,
        handle: { activePage: 'ui-icons', pageTitle: 'Icons' },
      },
      {
        path: 'ui/timeline',
        element: <Suspense fallback={null}><TimelinePage /></Suspense>,
        handle: { activePage: 'ui-timeline', pageTitle: 'Timeline' },
      },
      {
        path: 'ui/buttons',
        element: <Suspense fallback={null}><ButtonsPage /></Suspense>,
        handle: { activePage: 'ui-buttons', pageTitle: 'Buttons' },
      },
      {
        path: 'ui/modals',
        element: <Suspense fallback={null}><ModalsPage /></Suspense>,
        handle: { activePage: 'ui-modals', pageTitle: 'Modals' },
      },
      {
        path: 'forms/general',
        element: <Suspense fallback={null}><GeneralFormsPage /></Suspense>,
        handle: { activePage: 'forms-general', pageTitle: 'General Forms' },
      },
      {
        path: 'forms/validation',
        element: <Suspense fallback={null}><ValidationFormsPage /></Suspense>,
        handle: { activePage: 'forms-validation', pageTitle: 'Form Validation' },
      },
      {
        path: 'tables/simple',
        element: <Suspense fallback={null}><SimpleTablesPage /></Suspense>,
        handle: { activePage: 'tables-simple', pageTitle: 'Simple Tables' },
      },
      {
        path: 'tables/data',
        element: <Suspense fallback={null}><DataTablesPage /></Suspense>,
        handle: { activePage: 'tables-data', pageTitle: 'Data Tables' },
      },
      {
        path: 'charts/chartjs',
        element: <Suspense fallback={null}><ChartJsPage /></Suspense>,
        handle: { activePage: 'charts-chartjs', pageTitle: 'ChartJS' },
      },
      {
        path: 'charts/inline',
        element: <Suspense fallback={null}><InlinePage /></Suspense>,
        handle: { activePage: 'charts-inline', pageTitle: 'Inline Charts' },
      },
      {
        path: 'layout/fixed-sidebar',
        element: <Suspense fallback={null}><FixedSidebarPage /></Suspense>,
        handle: { activePage: 'layout-fixed-sidebar', pageTitle: 'Fixed Sidebar' },
      },
      {
        path: 'layout/fixed-header',
        element: <Suspense fallback={null}><FixedHeaderPage /></Suspense>,
        handle: { activePage: 'layout-fixed-header', pageTitle: 'Fixed Header' },
      },
      {
        path: 'layout/fixed-footer',
        element: <Suspense fallback={null}><FixedFooterPage /></Suspense>,
        handle: { activePage: 'layout-fixed-footer', pageTitle: 'Fixed Footer' },
      },
      {
        path: 'layout/fixed-complete',
        element: <Suspense fallback={null}><FixedCompletePage /></Suspense>,
        handle: { activePage: 'layout-fixed-complete', pageTitle: 'Fixed Complete' },
      },
      {
        path: 'layout/collapsed-sidebar',
        element: <Suspense fallback={null}><CollapsedSidebarPage /></Suspense>,
        handle: { activePage: 'layout-collapsed-sidebar', pageTitle: 'Collapsed Sidebar' },
      },
      {
        path: 'layout/sidebar-mini',
        element: <Suspense fallback={null}><SidebarMiniPage /></Suspense>,
        handle: { activePage: 'layout-sidebar-mini', pageTitle: 'Sidebar Mini' },
      },
      {
        path: 'layout/unfixed-sidebar',
        element: <Suspense fallback={null}><UnfixedSidebarPage /></Suspense>,
        handle: { activePage: 'layout-unfixed-sidebar', pageTitle: 'Default Sidebar' },
      },
      {
        path: 'layout/custom-area',
        element: <Suspense fallback={null}><CustomAreaPage /></Suspense>,
        handle: { activePage: 'layout-custom-area', pageTitle: 'Custom Area' },
      },
      {
        path: 'layout/logo-switch',
        element: <Suspense fallback={null}><LogoSwitchPage /></Suspense>,
        handle: { activePage: 'layout-logo-switch', pageTitle: 'Logo Switch' },
      },
      {
        path: 'layout/rtl',
        element: <Suspense fallback={null}><RtlPage /></Suspense>,
        handle: { activePage: 'layout-rtl', pageTitle: 'RTL Layout' },
      },
      {
        path: 'examples/profile',
        element: <Suspense fallback={null}><ProfilePage /></Suspense>,
        handle: { activePage: 'examples-profile', pageTitle: 'Profile' },
      },
      {
        path: 'examples/invoice',
        element: <Suspense fallback={null}><InvoicePage /></Suspense>,
        handle: { activePage: 'examples-invoice', pageTitle: 'Invoice' },
      },
      {
        path: 'examples/gallery',
        element: <Suspense fallback={null}><GalleryPage /></Suspense>,
        handle: { activePage: 'examples-gallery', pageTitle: 'Gallery' },
      },
      {
        path: 'examples/search',
        element: <Suspense fallback={null}><SearchPage /></Suspense>,
        handle: { activePage: 'examples-search', pageTitle: 'Search Results' },
      },
      {
        path: 'examples/projects',
        element: <Suspense fallback={null}><ProjectsPage /></Suspense>,
        handle: { activePage: 'examples-projects', pageTitle: 'Projects' },
      },
      {
        path: 'examples/contacts',
        element: <Suspense fallback={null}><ContactsPage /></Suspense>,
        handle: { activePage: 'examples-contacts', pageTitle: 'Contacts' },
      },
      {
        path: 'examples/e-commerce',
        element: <Suspense fallback={null}><ECommercePage /></Suspense>,
        handle: { activePage: 'examples-ecommerce', pageTitle: 'E-Commerce' },
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login-v1',
        element: <Suspense fallback={null}><LoginV1 /></Suspense>,
      },
      {
        path: 'login-v2',
        element: <Suspense fallback={null}><LoginV2 /></Suspense>,
      },
      {
        path: 'register-v1',
        element: <Suspense fallback={null}><RegisterV1 /></Suspense>,
      },
      {
        path: 'register-v2',
        element: <Suspense fallback={null}><RegisterV2 /></Suspense>,
      },
      {
        path: 'lockscreen',
        element: <Suspense fallback={null}><Lockscreen /></Suspense>,
      },
    ],
  },
  {
    path: '/error',
    element: <ErrorLayout />,
    children: [
      {
        path: '404',
        element: <Suspense fallback={null}><Error404 /></Suspense>,
      },
      {
        path: '500',
        element: <Suspense fallback={null}><Error500 /></Suspense>,
      },
    ],
  },
  { path: '*', element: <Navigate to="/error/404" replace /> },
])

export default router
