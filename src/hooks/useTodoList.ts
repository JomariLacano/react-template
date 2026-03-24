import { useState, useMemo, useCallback, useRef } from 'react'
import type { TodoItem } from '@/types'

export type TodoFilter = 'all' | 'active' | 'completed'

export function useTodoList(initialItems: TodoItem[] = []) {
  const [items, setItems] = useState<TodoItem[]>([...initialItems])
  const [newItem, setNewItem] = useState('')
  const [filter, setFilter] = useState<TodoFilter>('all')
  const nextIdRef = useRef(
    initialItems.length > 0
      ? Math.max(...initialItems.map((item) => item.id)) + 1
      : 1,
  )

  const filtered = useMemo<TodoItem[]>(() => {
    if (filter === 'active') return items.filter((item) => !item.done)
    if (filter === 'completed') return items.filter((item) => item.done)
    return items
  }, [items, filter])

  const remaining = useMemo<number>(
    () => items.filter((item) => !item.done).length,
    [items],
  )

  const addItem = useCallback(() => {
    const text = newItem.trim()
    if (!text) return
    setItems((prev) => [
      ...prev,
      {
        id: nextIdRef.current++,
        text,
        done: false,
        color: '',
        priority: 'medium',
      },
    ])
    setNewItem('')
  }, [newItem])

  const removeItem = useCallback((id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const toggleItem = useCallback((id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    )
  }, [])

  const clearCompleted = useCallback(() => {
    setItems((prev) => prev.filter((item) => !item.done))
  }, [])

  return {
    items,
    filtered,
    remaining,
    filter,
    setFilter,
    newItem,
    setNewItem,
    addItem,
    removeItem,
    toggleItem,
    clearCompleted,
  }
}
