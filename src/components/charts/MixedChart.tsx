import { useMemo } from 'react'
import { Chart } from 'react-chartjs-2'
import { useThemeColors } from '@/hooks/useThemeColors'
import type { ChartData, ChartOptions } from 'chart.js'

interface MixedChartProps {
  data: ChartData<'bar' | 'line'>
  options?: ChartOptions<'bar' | 'line'>
  height?: number
}

export default function MixedChart({ data, options, height }: MixedChartProps) {
  const { gridColor, labelColor, borderColor } = useThemeColors()

  const mergedOptions = useMemo<ChartOptions<'bar' | 'line'>>(
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
      <Chart type="bar" data={data} options={mergedOptions} />
    </div>
  )
}
