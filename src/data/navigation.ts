import type { NavigationSection } from '@/types'

export const navigation: NavigationSection[] = [
  {
    header: 'MAIN NAVIGATION',
    items: [
      {
        label: 'Dashboard',
        icon: 'gauge',
        children: [
          { label: 'Dashboard v1', href: '/', activePage: 'index' },
          { label: 'Dashboard v2', href: '/dashboard-v2', activePage: 'index2' },
          { label: 'Dashboard v3', href: '/dashboard-v3', activePage: 'index3' },
        ],
      },
      {
        label: 'Widgets',
        icon: 'puzzle',
        children: [
          { label: 'Small Box', href: '/widgets/small-box', activePage: 'widgets-small-box' },
          { label: 'Info Box', href: '/widgets/info-box', activePage: 'widgets-info-box' },
          { label: 'Cards', href: '/widgets/cards', activePage: 'widgets-cards' },
        ],
      },
    ],
  },
  {
    header: 'LAYOUT OPTIONS',
    items: [
      {
        label: 'Layout Options',
        icon: 'layout',
        children: [
          { label: 'Default Sidebar', href: '/layout/unfixed-sidebar', activePage: 'layout-unfixed-sidebar' },
          { label: 'Fixed Sidebar', href: '/layout/fixed-sidebar', activePage: 'layout-fixed-sidebar' },
          { label: 'Fixed Header', href: '/layout/fixed-header', activePage: 'layout-fixed-header' },
          { label: 'Fixed Footer', href: '/layout/fixed-footer', activePage: 'layout-fixed-footer' },
          { label: 'Fixed Complete', href: '/layout/fixed-complete', activePage: 'layout-fixed-complete' },
          { label: 'Custom Area', href: '/layout/custom-area', activePage: 'layout-custom-area' },
          { label: 'Sidebar Mini', href: '/layout/sidebar-mini', activePage: 'layout-sidebar-mini' },
          { label: 'Collapsed Sidebar', href: '/layout/collapsed-sidebar', activePage: 'layout-collapsed-sidebar' },
          { label: 'Logo Switch', href: '/layout/logo-switch', activePage: 'layout-logo-switch' },
          { label: 'RTL Layout', href: '/layout/rtl', activePage: 'layout-rtl' },
        ],
      },
    ],
  },
  {
    header: 'COMPONENTS',
    items: [
      {
        label: 'UI Elements',
        icon: 'palette',
        children: [
          { label: 'General', href: '/ui/general', activePage: 'ui-general' },
          { label: 'Icons', href: '/ui/icons', activePage: 'ui-icons' },
          { label: 'Buttons', href: '/ui/buttons', activePage: 'ui-buttons' },
          { label: 'Timeline', href: '/ui/timeline', activePage: 'ui-timeline' },
          { label: 'Modals', href: '/ui/modals', activePage: 'ui-modals' },
        ],
      },
      {
        label: 'Forms',
        icon: 'file-edit',
        children: [
          { label: 'General Elements', href: '/forms/general', activePage: 'forms-general' },
          { label: 'Validation', href: '/forms/validation', activePage: 'forms-validation' },
        ],
      },
      {
        label: 'Tables',
        icon: 'table',
        children: [
          { label: 'Simple Tables', href: '/tables/simple', activePage: 'tables-simple' },
          { label: 'Data Tables', href: '/tables/data', activePage: 'tables-data' },
        ],
      },
    ],
  },
  {
    header: 'EXAMPLES',
    items: [
      {
        label: 'Charts',
        icon: 'bar-chart-3',
        children: [
          { label: 'ChartJS', href: '/charts/chartjs', activePage: 'charts-chartjs' },
          { label: 'Inline Charts', href: '/charts/inline', activePage: 'charts-inline' },
        ],
      },
      {
        label: 'Pages',
        icon: 'book-open',
        children: [
          { label: 'Login', href: '/auth/login-v1' },
          { label: 'Register', href: '/auth/register-v1' },
          { label: 'Profile', href: '/examples/profile', activePage: 'examples-profile' },
          { label: 'Invoice', href: '/examples/invoice', activePage: 'examples-invoice' },
          { label: 'Gallery', href: '/examples/gallery', activePage: 'examples-gallery' },
          { label: 'Search Results', href: '/examples/search', activePage: 'examples-search' },
          { label: 'Projects', href: '/examples/projects', activePage: 'examples-projects' },
          { label: 'Contacts', href: '/examples/contacts', activePage: 'examples-contacts' },
          { label: 'E-Commerce', href: '/examples/e-commerce', activePage: 'examples-ecommerce' },
          { label: '404 Error', href: '/error/404' },
          { label: '500 Error', href: '/error/500' },
        ],
      },
    ],
  },
]
