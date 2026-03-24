// Navigation
export interface NavigationItem {
  label: string
  icon?: string
  href?: string
  activePage?: string
  children?: NavigationItem[]
}

export interface NavigationSection {
  header: string
  items: NavigationItem[]
}

// Direct Chat
export interface ChatMessage {
  name: string
  avatar: string
  text: string
  time: string
  side: 'left' | 'right'
}

export interface ChatContact {
  name: string
  avatar: string
  status: string
}

// Todo List
export interface TodoItem {
  id: number
  text: string
  done: boolean
  color: string
  priority?: 'low' | 'medium' | 'high'
}

// DataTable
export interface DataColumn {
  key: string
  label: string
  sortable?: boolean
}
