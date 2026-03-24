import { useMemo } from 'react'
import { Line } from 'react-chartjs-2'
import { useThemeColors } from '@/hooks/useThemeColors'
import type { ChartData, ChartOptions } from 'chart.js'

interface LineChartProps {
  data: ChartData<'line'>
  options?: ChartOptions<'line'>
  height?: number
}

export default function LineChart({ data, options, height }: LineChartProps) {
  const { gridColor, labelColor, borderColor } = useThemeColors()

  const mergedOptions = useMemo<ChartOptions<'line'>>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: { color: gridColor },
          ticks: { color: labelColor },
          border: { color: borderColor },
        },
        y: {
          grid: { color: gridColor },
          ticks: { color: labelColor },
          border: { color: borderColor },
        },
      },
      plugins: {
        legend: { labels: { color: labelColor } },
      },
      ...options,
    }),
    [gridColor, labelColor, borderColor, options],
  )

  return (
    <div style={height ? { height: `${height}px` } : undefined}>
      <Line data={data} options={mergedOptions} />
    </div>
  )
}
