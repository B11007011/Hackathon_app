"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useState, useEffect } from 'react'

// Water Usage Trend Chart
export function WaterUsageTrendChart() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const waterUsageData = [
    { month: '5月', usage: 1950, average: 2300 },
    { month: '6月', usage: 1800, average: 2300 },
    { month: '7月', usage: 1650, average: 2300 },
    { month: '8月', usage: 1730, average: 2300 },
    { month: '9月', usage: 1500, average: 2300 },
    { month: '10月', usage: 1240, average: 2300 },
  ]

  // Apply CSS variables for chart colors
  useEffect(() => {
    document.documentElement.style.setProperty('--color-usage', '#3b82f6');
    document.documentElement.style.setProperty('--color-average', '#94a3b8');
  }, []);

  return (
    <Card>
      <CardHeader className="pb-2 p-3 sm:p-6">
        <CardTitle className="text-sm sm:text-base">水足跡用量趨勢</CardTitle>
      </CardHeader>
      <CardContent className="p-0 sm:p-0">
        {mounted ? (
          <div className="h-[300px] w-full pt-3 sm:pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={waterUsageData}
                margin={{ top: 10, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [
                    `${value} L`, 
                    name === 'usage' ? '您的用量' : '平均用量'
                  ]}
                  labelFormatter={(label) => `${label}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="usage" 
                  stroke="var(--color-usage)" 
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                  name="usage"
                />
                <Line 
                  type="monotone" 
                  dataKey="average" 
                  stroke="var(--color-average)" 
                  strokeWidth={2} 
                  strokeDasharray="5 5"
                  name="average"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="h-[300px] w-full flex items-center justify-center">
            <div className="text-sm text-muted-foreground">Loading chart...</div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// Product Category Water Footprint Chart
export function ProductCategoryChart() {
  const data = [
    { name: "服裝", footprint: 2500 },
    { name: "食品", footprint: 1800 },
    { name: "電子產品", footprint: 1200 },
    { name: "家居用品", footprint: 900 },
    { name: "個人護理", footprint: 600 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>各類別水足跡</CardTitle>
        <CardDescription>不同產品類別的平均水足跡</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            footprint: {
              label: "水足跡 (公升)",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="h-[300px]"
        >
          <BarChart width={533} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="footprint" fill="var(--color-footprint)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

// Water Tax Allocation Chart
export function WaterTaxAllocationChart() {
  const data = [
    { name: "地區排水基建", value: 60, color: "#3b82f6" },
    { name: "雨水回收系統", value: 30, color: "#06b6d4" },
    { name: "民眾回饋基金", value: 10, color: "#10b981" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>水稅分配</CardTitle>
        <CardDescription>水稅收入的分配比例</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="h-[300px] w-full max-w-[500px]">
          <PieChart width={500} height={300}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend />
          </PieChart>
        </div>
      </CardContent>
    </Card>
  )
}

// Environmental Impact Radar Chart
export function EnvironmentalImpactChart() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const environmentalData = [
    { subject: '節水量', A: 80, B: 60, fullMark: 100 },
    { subject: '減碳量', A: 75, B: 60, fullMark: 100 },
    { subject: '資源循環', A: 60, B: 55, fullMark: 100 },
    { subject: '生態保護', A: 70, B: 50, fullMark: 100 },
    { subject: '綠色消費', A: 80, B: 60, fullMark: 100 },
    { subject: '環保意識', A: 90, B: 70, fullMark: 100 },
  ];

  // Custom render for polar angle axis labels to make them responsive
  const renderPolarAngleAxis = (props: any) => {
    const { cx, cy, payload, x, y } = props;
    return (
      <g className="recharts-polar-angle-axis-tick">
        <text 
          x={x} 
          y={y} 
          textAnchor="middle" 
          className="text-xs sm:text-sm" 
          fill="currentColor" 
          style={{ fontSize: 'var(--font-size, 10px)' }}
        >
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <Card>
      <CardHeader className="pb-2 p-3 sm:p-6">
        <CardTitle className="text-sm sm:text-base">環保影響雷達圖</CardTitle>
      </CardHeader>
      <CardContent className="p-0 sm:p-0">
        {mounted ? (
          <div className="h-[320px] sm:h-[350px] w-full flex justify-center pt-0 sm:pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart 
                cx="50%" 
                cy="50%" 
                outerRadius="60%" 
                data={environmentalData}
                margin={{ top: 0, right: 15, bottom: 25, left: 15 }}
              >
                <PolarGrid gridType="circle" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={renderPolarAngleAxis}
                  tickLine={false}
                  style={{ fontSize: '10px' }}
                />
                <PolarRadiusAxis tickCount={4} />
                <Tooltip 
                  formatter={(value, name) => [
                    `${value}`, 
                    name === "您的表現" ? "您的表現" : "平均水平"
                  ]}
                  labelFormatter={(label) => `${label}`}
                  contentStyle={{ fontSize: '12px' }}
                />
                <Radar 
                  name="您的表現" 
                  dataKey="A" 
                  stroke="#3b82f6" 
                  fill="#3b82f6" 
                  fillOpacity={0.6} 
                />
                <Radar 
                  name="平均水平" 
                  dataKey="B" 
                  stroke="#10b981" 
                  fill="#10b981" 
                  fillOpacity={0.6} 
                />
                <Legend 
                  align="center" 
                  verticalAlign="bottom" 
                  iconSize={8} 
                  wrapperStyle={{ 
                    fontSize: '12px',
                    paddingTop: '8px',
                    paddingBottom: '16px'
                  }} 
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="h-[320px] sm:h-[350px] w-full flex items-center justify-center">
            <div className="text-sm text-muted-foreground">Loading chart...</div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
