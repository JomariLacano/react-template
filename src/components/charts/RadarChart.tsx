import { useMemo } from 'react'
import { Radar } from 'react-chartjs-2'
import { useThemeColors } from '@/hooks/useThemeColors'
import type { ChartData, ChartOptions } from 'chart.js'

interface RadarChartProps {
  data: ChartData<'radar'>
  options?: ChartOptions<'radar'>
  height?: number
}

export default function RadarChart({ data, options, height }: RadarChartProps) {
  const { gridColor, labelColor } = useThemeColors()

  const mergedOptions = useMemo<ChartOptions<'radar'>>(
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
      <Radar data={data} options={mergedOptions} />
    </div>
  )
}
