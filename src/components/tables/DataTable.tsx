import { useState, useMemo, useEffect, type ReactNode } from 'react'
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'
import type { DataColumn } from '@/types'

interface DataTableProps {
  columns: DataColumn[]
  rows: Record<string, any>[]
  searchable?: boolean
  filterable?: boolean
  filterKey?: string
  filterOptions?: string[]
  pageSize?: number
  renderCell?: Record<string, (row: Record<string, any>, value: any) => ReactNode>
  emptyMessage?: ReactNode
}

export default function DataTable({
  columns,
  rows,
  searchable = false,
  filterable = false,
  filterKey,
  filterOptions = [],
  pageSize = 10,
  renderCell,
  emptyMessage,
}: DataTableProps) {
  const [sortKey, setSortKey] = useState('')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')
  const [searchQuery, setSearchQuery] = useState('')
  const [filterValue, setFilterValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // Reset to page 1 when search or filter changes
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, filterValue])

  const filteredRows = useMemo(() => {
    let result = rows

    // Apply search (case-insensitive across all columns)
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter((row) =>
        columns.some((col) => {
          const val = row[col.key]
          return val != null && String(val).toLowerCase().includes(query)
        }),
      )
    }

    // Apply filter (exact match on filterKey)
    if (filterValue && filterKey) {
      result = result.filter(
        (row) => String(row[filterKey]) === filterValue,
      )
    }

    return result
  }, [rows, searchQuery, filterValue, filterKey, columns])

  const sortedRows = useMemo(() => {
    if (!sortKey) return filteredRows

    return [...filteredRows].sort((a, b) => {
      const aVal = a[sortKey]
      const bVal = b[sortKey]

      if (aVal == null && bVal == null) return 0
      if (aVal == null) return sortDir === 'asc' ? -1 : 1
      if (bVal == null) return sortDir === 'asc' ? 1 : -1

      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDir === 'asc' ? aVal - bVal : bVal - aVal
      }

      const cmp = String(aVal).localeCompare(String(bVal))
      return sortDir === 'asc' ? cmp : -cmp
    })
  }, [filteredRows, sortKey, sortDir])

  const pagedRows = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return sortedRows.slice(start, start + pageSize)
  }, [sortedRows, currentPage, pageSize])

  const totalPages = useMemo(
    () => Math.ceil(filteredRows.length / pageSize),
    [filteredRows.length, pageSize],
  )

  function sort(key: string) {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
  }

  return (
    <div>
      {/* Controls row */}
      {(searchable || filterable) && (
        <div className="flex items-center justify-between gap-4 mb-4">
          {filterable && (
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600 dark:text-gray-400">
                Filter:
              </label>
              <select
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                className="px-3 py-1.5 text-sm border rounded-md bg-white dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="">All</option>
                {filterOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          )}
          {searchable && (
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600 dark:text-gray-400">
                Search:
              </label>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                placeholder="Search..."
                className="px-3 py-1.5 text-sm border rounded-md bg-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          )}
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`px-4 py-3${col.sortable !== false ? ' cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors' : ''}`}
                  onClick={() =>
                    col.sortable !== false && sort(col.key)
                  }
                >
                  <span className="flex items-center gap-1">
                    {col.label}
                    {col.sortable !== false && (
                      <>
                        {sortKey !== col.key ? (
                          <ArrowUpDown className="w-3 h-3" />
                        ) : sortDir === 'asc' ? (
                          <ArrowUp className="w-3 h-3" />
                        ) : (
                          <ArrowDown className="w-3 h-3" />
                        )}
                      </>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pagedRows.map((row, i) => (
              <tr
                key={i}
                className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3">
                    {renderCell?.[col.key]
                      ? renderCell[col.key](row, row[col.key])
                      : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
            {pagedRows.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-8 text-center text-gray-500"
                >
                  {emptyMessage || 'No results found.'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4 text-sm">
          <div className="text-gray-500 dark:text-gray-400">
            Showing {(currentPage - 1) * pageSize + 1} to{' '}
            {Math.min(currentPage * pageSize, filteredRows.length)} of{' '}
            {filteredRows.length} entries
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage <= 1}
              className="px-3 py-1 rounded border dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded border dark:border-gray-600 ${page === currentPage ? 'bg-primary text-white border-primary' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                >
                  {page}
                </button>
              ),
            )}
            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage >= totalPages}
              className="px-3 py-1 rounded border dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
