import { useMemo } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { useThemeColors } from '@/hooks/useThemeColors'
import type { ChartData, ChartOptions } from 'chart.js'

interface DoughnutChartProps {
  data: ChartData<'doughnut'>
  options?: ChartOptions<'doughnut'>
  height?: number
}

export default function DoughnutChart({ data, options, height }: DoughnutChartProps) {
  const { labelColor } = useThemeColors()

  const mergedOptions = useMemo<ChartOptions<'doughnut'>>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: labelColor } },
      },
      ...options,
    }),
    [labelColor, options],
  )

  return (
    <div style={height ? { height: `${height}px` } : undefined}>
      <Doughnut data={data} options={mergedOptions} />
    </div>
  )
}
