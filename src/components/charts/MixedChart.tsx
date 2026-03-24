import { useMemo } from 'react'
import { Bar } from 'react-chartjs-2'
import { useThemeColors } from '@/hooks/useThemeColors'
import type { ChartData, ChartOptions } from 'chart.js'

interface MixedChartProps {
  data: ChartData<'bar'>
  options?: ChartOptions<'bar'>
  height?: number
}

export default function MixedChart({ data, options, height }: MixedChartProps) {
  const { gridColor, labelColor, borderColor } = useThemeColors()

  const mergedOptions = useMemo<ChartOptions<'bar'>>(
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
      <Bar data={data} options={mergedOptions} />
    </div>
  )
}
