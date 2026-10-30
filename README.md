# JL Tempate

**A reusable admin dashboard template built with React 18, TypeScript, Tailwind CSS, Zustand, and React Router.** Use it as the starting point for your next project.

<p align="center">
  <img src="docs/screenshots/dashboard-v1-light.png" alt="JL Tempate dashboard preview" width="100%">
</p>

<p align="center">
  <a href="#features">Features</a> &bull;
  <a href="#screenshots">Screenshots</a> &bull;
  <a href="#quick-start">Quick Start</a> &bull;
  <a href="#tech-stack">Tech Stack</a> &bull;
  <a href="#project-structure">Project Structure</a> &bull;
  <a href="#pages">Pages</a> &bull;
  <a href="#components">Components</a> &bull;
  <a href="#dark-mode">Dark Mode</a> &bull;
  <a href="#customization">Customization</a> &bull;
  <a href="#credits">Credits</a> &bull;
  <a href="#license">License</a>
</p>

---

## Features

- **41+ pages** — Dashboards, widgets, UI elements, forms, tables, charts, auth pages, error pages, layout demos, and more
- **React 18** — Functional components with hooks throughout
- **24 reusable components** — SmallBox, InfoBox, AppCard, DirectChat, DataTable, chart wrappers, modals, alerts, and more
- **Tailwind CSS v4** — CSS-first configuration with custom design tokens via `@theme`
- **Zustand** — Lightweight state management for sidebar, dark mode, layout, and accessibility
- **React Router 7** — SPA with nested layouts, lazy-loaded pages, and route handle metadata
- **Chart.js + react-chartjs-2** — Interactive charts with reactive dark mode color adaptation
- **Dark mode** — Three modes (Light / Dark / Auto) with `localStorage` persistence and system preference detection
- **Fully responsive** — Mobile-first design with collapsible sidebar, responsive grids, and touch-friendly interactions
- **Accessible** — WCAG 2.1 AA features: skip links, ARIA labels, keyboard navigation, reduced motion support
- **TypeScript** — Full type safety with shared interfaces and typed component props
- **Fast builds** — Vite-powered dev server with HMR and optimized production builds with code splitting

---

## Screenshots

### Dashboard — Light & Dark Mode

| Light Mode | Dark Mode |
|:---:|:---:|
| ![Dashboard Light](docs/screenshots/dashboard-v1-light.png) | ![Dashboard Dark](docs/screenshots/dashboard-v1-dark.png) |

### Dashboard Variants

| Dashboard v2 | Dashboard v3 |
|:---:|:---:|
| ![Dashboard v2](docs/screenshots/dashboard-v2.png) | ![Dashboard v3](docs/screenshots/dashboard-v3.png) |

### Widgets

| Small Box Widgets | Card Widgets |
|:---:|:---:|
| ![Small Boxes](docs/screenshots/widgets-small-box.png) | ![Cards](docs/screenshots/widgets-cards.png) |

### Charts

| Chart.js Charts | Inline/Sparkline Charts |
|:---:|:---:|
| ![ChartJS](docs/screenshots/charts-chartjs.png) | ![Inline Charts](docs/screenshots/charts-inline.png) |

### UI Elements

| General UI | Buttons | Modals |
|:---:|:---:|:---:|
| ![General UI](docs/screenshots/ui-general.png) | ![Buttons](docs/screenshots/ui-buttons.png) | ![Modals](docs/screenshots/ui-modals.png) |

### Forms & Tables

| Form Elements | Data Tables |
|:---:|:---:|
| ![Forms](docs/screenshots/forms-general.png) | ![Tables](docs/screenshots/tables-data.png) |

### Auth & Example Pages

| Login v1 | Login v2 | Profile |
|:---:|:---:|:---:|
| ![Login v1](docs/screenshots/login-v1.png) | ![Login v2](docs/screenshots/login-v2.png) | ![Profile](docs/screenshots/profile.png) |

| Invoice | 404 Error | RTL Layout |
|:---:|:---:|:---:|
| ![Invoice](docs/screenshots/invoice.png) | ![404](docs/screenshots/error-404.png) | ![RTL](docs/screenshots/layout-rtl.png) |

### Mobile Responsive

<p align="center">
  <img src="docs/screenshots/mobile-view.png" alt="Mobile View" width="280">
</p>

---

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)
- npm 9+

### Installation

```bash
# Clone your JL Tempate repository
git clone https://github.com/your-username/jl-tempate.git
cd jl-tempate

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

Output is in the `dist/` directory, ready to deploy to any static hosting service (Netlify, Vercel, Cloudflare Pages, etc.).

### Preview Production Build

```bash
npm run preview
```

---

## Tech Stack

| Technology | Version | Purpose |
|:---|:---|:---|
| [React](https://react.dev/) | 18.x | UI framework with functional components + hooks |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety |
| [Vite](https://vitejs.dev/) | 8.x | Build tool and dev server with HMR |
| [React Router](https://reactrouter.com/) | 7.x | SPA routing with nested layouts |
| [Zustand](https://zustand.docs.pmnd.rs/) | 5.x | Lightweight state management |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | CSS-first utility framework with `@theme` tokens |
| [Lucide React](https://lucide.dev/) | latest | 1500+ SVG icon components |
| [Chart.js](https://www.chartjs.org/) | 4.x | Interactive data visualization |
| [react-chartjs-2](https://react-chartjs-2.js.org/) | 5.x | React wrapper for Chart.js |

---

## Project Structure

```
src/
├── assets/
│   └── css/
│       ├── app.css                    # Tailwind v4 entry + @theme design tokens
│       ├── layout/                    # Grid: app-wrapper, header, sidebar, footer, main
│       ├── components/                # Widget CSS: cards, small-box, info-box, etc.
│       └── pages/                     # Page-specific CSS: auth, lockscreen
├── components/
│   ├── layout/                        # AppHeader, AppSidebar, AppFooter, ContentHeader,
│   │                                  #   SidebarMenu, SidebarMenuItem
│   ├── widgets/                       # SmallBox, InfoBox, AppCard, DirectChat
│   ├── ui/                            # AppAlert, AppModal, AppToast, AppCallout, DarkModeToggle
│   ├── charts/                        # LineChart, BarChart, DoughnutChart, PieChart,
│   │                                  #   RadarChart, PolarAreaChart, MixedChart
│   ├── forms/                         # InputGroup
│   └── tables/                        # DataTable (sort, search, paginate)
├── hooks/
│   ├── useCardWidget.ts               # Card collapse/maximize/remove logic
│   ├── useSlideToggle.ts              # Animate height open/close
│   ├── useFullscreen.ts               # Fullscreen API wrapper
│   ├── useThemeColors.ts              # Reactive chart colors for dark mode
│   └── useTodoList.ts                 # Todo state management
├── stores/
│   ├── sidebar.ts                     # useSidebarStore (Zustand)
│   ├── darkMode.ts                    # useDarkModeStore (Zustand)
│   ├── layout.ts                      # useLayoutStore (Zustand)
│   └── accessibility.ts               # useAccessibilityStore (Zustand)
├── layouts/
│   ├── DefaultLayout.tsx              # Sidebar + header + main + footer
│   ├── AuthLayout.tsx                 # Centered card, no sidebar
│   └── ErrorLayout.tsx                # Full-page error display
├── pages/                             # 41 page components organized by category
├── data/
│   └── navigation.ts                  # Typed sidebar menu structure
├── router/
│   └── index.tsx                      # React Router with nested layout routes
├── types/
│   └── index.ts                       # Shared TypeScript interfaces
└── main.tsx                           # App init: React DOM, Router, Chart.js, stores
```

---

## Pages

### Dashboards (3)
- **Dashboard v1** — Sales line chart, direct chat, visitor bar chart, small boxes, info boxes
- **Dashboard v2** — Revenue/expense charts, orders table, goal completion, quick stats
- **Dashboard v3** — Doughnut chart, interactive todo list, activity timeline, system metrics

### Widgets (3)
- **Small Box** — All color variants with icons and footer links
- **Info Box** — With and without progress bars
- **Cards** — Outlined, colored, tabbed, collapsed, loading overlay, interactive tools

### UI Elements (5)
- **General** — Alerts, badges, callouts, progress bars, spinners, dropdowns, accordion
- **Icons** — Searchable Lucide icons grid
- **Timeline** — Vertical timeline with mixed content
- **Buttons** — Solid, outline, sizes, groups, gradients, icon buttons, loading states
- **Modals** — Default, sized, scrollable, centered, colored headers, form modals

### Forms (2) &bull; Tables (2) &bull; Charts (2)

### Layout Variants (10) &bull; Auth & Error Pages (7) &bull; Example Pages (7)

**41 pages total** — dashboards, components, forms, charts, auth screens, and layout examples.

---

## Components

### Widget Components

| Component | Props | Description |
|:---|:---|:---|
| `SmallBox` | `bgColor`, `value`, `label`, `icon`, `link?`, `linkText?` | KPI stat widget |
| `InfoBox` | `icon`, `iconBg`, `label`, `value`, `progressValue?`, `progressColor?` | Metric box with optional progress |
| `AppCard` | `title?`, `icon?`, `interactive?`, `collapsed?`, `loading?`, `children`, `footer?`, `header?`, `tools?` | Universal card with collapse/maximize/remove |
| `DirectChat` | `title`, `variant?`, `messages`, `contacts`, `badgeCount?`, `onSend?` | Chat widget |

### UI Components

| Component | Props | Description |
|:---|:---|:---|
| `AppAlert` | `variant`, `icon?`, `title?`, `dismissible?`, `children` | Inline alert |
| `AppModal` | `open`, `onOpenChange`, `title`, `size?`, `children`, `footer?` | Dialog modal with portal |
| `AppToast` | `variant`, `title`, `message`, `autoDismiss?`, `delay?`, `onClose?` | Floating notification |
| `AppCallout` | `variant`, `title?`, `children` | Information block |
| `DataTable` | `columns`, `rows`, `searchable?`, `filterable?`, `pageSize?`, `renderCell?` | Sort, search, filter, paginate |
| `InputGroup` | `value`, `onChange`, `type?`, `icon?`, `iconPosition?` | Input with icon |

### Chart Components

All share: `data`, `options?`, `height?` props with reactive dark mode colors.

`LineChart` &bull; `BarChart` &bull; `DoughnutChart` &bull; `PieChart` &bull; `RadarChart` &bull; `PolarAreaChart` &bull; `MixedChart`

---

## Dark Mode

Three modes: **Light** (default), **Dark**, **Auto** (follows system preference).

```tsx
import { useDarkModeStore } from '@/stores/darkMode'

function MyComponent() {
  const { mode, toggle, setMode } = useDarkModeStore()

  return <button onClick={toggle}>Current: {mode}</button>
}
```

Toggle via the navbar icon. Persisted to `localStorage`. Charts reactively update colors.

---

## Customization

### Design Tokens

All tokens in `src/assets/css/app.css` via Tailwind v4's `@theme`:

```css
@theme {
  --color-primary: #0d6efd;
  --color-success: #198754;
  --sidebar-width: 250px;
  --header-height: 3.5rem;
  /* ... */
}
```

### Adding a New Page

1. Create `src/pages/custom/MyPage.tsx`
2. Add route in `src/router/index.tsx` with `handle: { activePage, pageTitle }`
3. Optionally add sidebar item in `src/data/navigation.ts`

---

## Credits

JL Tempate is an independently maintained React dashboard template. Its initial layout was inspired by [AdminLTE v4](https://github.com/ColorlibHQ/AdminLTE).

- **Original project:** [AdminLTE v4](https://github.com/ColorlibHQ/AdminLTE) by [ColorlibHQ](https://github.com/ColorlibHQ) (MIT License)
- [React](https://react.dev/) &bull; [Tailwind CSS](https://tailwindcss.com/) &bull; [Vite](https://vitejs.dev/) &bull; [Zustand](https://zustand.docs.pmnd.rs/) &bull; [Chart.js](https://www.chartjs.org/) &bull; [Lucide](https://lucide.dev/) &bull; [Inter font](https://rsms.me/inter/)

### Disclaimer

JL Tempate is not affiliated with or endorsed by AdminLTE or ColorlibHQ.

---

## Contributing

Contributions welcome! Fork, branch, commit, push, PR.

---

## License

[MIT](LICENSE). See the license file for original notices and permissions.
#   r e a c t - t e m p l a t e  
 