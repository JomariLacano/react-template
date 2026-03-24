import { useMemo } from 'react'
import { Pie } from 'react-chartjs-2'
import { useThemeColors } from '@/hooks/useThemeColors'
import type { ChartData, ChartOptions } from 'chart.js'

interface PieChartProps {
  data: ChartData<'pie'>
  options?: ChartOptions<'pie'>
  height?: number
}

export default function PieChart({ data, options, height }: PieChartProps) {
  const { labelColor } = useThemeColors()

  const mergedOptions = useMemo<ChartOptions<'pie'>>(
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
      <Pie data={data} options={mergedOptions} />
    </div>
  )
}
