import { useMemo } from 'react'
import { PolarArea } from 'react-chartjs-2'
import { useThemeColors } from '@/hooks/useThemeColors'
import type { ChartData, ChartOptions } from 'chart.js'

interface PolarAreaChartProps {
  data: ChartData<'polarArea'>
  options?: ChartOptions<'polarArea'>
  height?: number
}

export default function PolarAreaChart({ data, options, height }: PolarAreaChartProps) {
  const { gridColor, labelColor } = useThemeColors()

  const mergedOptions = useMemo<ChartOptions<'polarArea'>>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          grid: { color: gridColor },
          ticks: { color: labelColor, backdropColor: 'transparent' },
          pointLabels: { color: labelColor },
          angleLines: { color: gridColor },
        },
      },
      plugins: {
        legend: { labels: { color: labelColor } },
      },
      ...options,
    }),
    [gridColor, labelColor, options],
  )

  return (
    <div style={height ? { height: `${height}px` } : undefined}>
      <PolarArea data={data} options={mergedOptions} />
    </div>
  )
}
