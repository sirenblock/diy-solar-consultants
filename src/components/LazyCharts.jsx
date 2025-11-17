import React from 'react'
import dynamic from 'next/dynamic'

/**
 * Lazy-loaded chart components to reduce initial bundle size
 * Recharts is a heavy library (~100KB gzipped) and should only be loaded when needed
 */

// Loading placeholder component
const ChartLoadingPlaceholder = () => (
  <div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
    <div className="text-gray-500 text-sm">Loading chart...</div>
  </div>
)

// Dynamically import chart components
export const LazyLineChart = dynamic(
  () => import('recharts').then((mod) => mod.LineChart),
  {
    loading: () => <ChartLoadingPlaceholder />,
    ssr: false, // Disable SSR for charts as they're interactive
  }
)

export const LazyLine = dynamic(
  () => import('recharts').then((mod) => mod.Line),
  { ssr: false }
)

export const LazyBarChart = dynamic(
  () => import('recharts').then((mod) => mod.BarChart),
  {
    loading: () => <ChartLoadingPlaceholder />,
    ssr: false,
  }
)

export const LazyBar = dynamic(
  () => import('recharts').then((mod) => mod.Bar),
  { ssr: false }
)

export const LazyXAxis = dynamic(
  () => import('recharts').then((mod) => mod.XAxis),
  { ssr: false }
)

export const LazyYAxis = dynamic(
  () => import('recharts').then((mod) => mod.YAxis),
  { ssr: false }
)

export const LazyCartesianGrid = dynamic(
  () => import('recharts').then((mod) => mod.CartesianGrid),
  { ssr: false }
)

export const LazyTooltip = dynamic(
  () => import('recharts').then((mod) => mod.Tooltip),
  { ssr: false }
)

export const LazyLegend = dynamic(
  () => import('recharts').then((mod) => mod.Legend),
  { ssr: false }
)

export const LazyResponsiveContainer = dynamic(
  () => import('recharts').then((mod) => mod.ResponsiveContainer),
  { ssr: false }
)
