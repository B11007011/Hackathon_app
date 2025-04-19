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
  ComposedChart,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useState, useEffect } from 'react'

// Water Usage Trend Chart
export function WaterUsageTrendChart({ timeframe = "weekly" }: { timeframe?: "weekly" | "monthly" }) {
  // Sample data
  const weeklyData = [
    { name: "第1週", usage: 950, average: 1000 },
    { name: "第2週", usage: 890, average: 1000 },
    { name: "第3週", usage: 920, average: 1000 },
    { name: "第4週", usage: 860, average: 1000 },
    { name: "第5週", usage: 830, average: 1000 },
    { name: "本週", usage: 820, average: 1000 },
  ];

  const monthlyData = [
    { name: "5月", usage: 4500, average: 4200 },
    { name: "6月", usage: 4300, average: 4200 },
    { name: "7月", usage: 4600, average: 4200 },
    { name: "8月", usage: 4100, average: 4200 },
    { name: "9月", usage: 3900, average: 4200 },
    { name: "10月", usage: 3850, average: 4200 },
  ];

  const data = timeframe === "weekly" ? weeklyData : monthlyData;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} width={40} />
        <Tooltip 
          formatter={(value) => [`${value} 公升`, null]}
          labelFormatter={(label) => `${label}用水量`}
        />
        <Legend />
        <Bar 
          dataKey="usage" 
          name="實際用水量" 
          fill="#3b82f6" 
          radius={[4, 4, 0, 0]} 
        />
        <Line 
          type="monotone" 
          dataKey="average" 
          stroke="#ef4444" 
          name="目標用水量" 
          dot={false} 
          strokeWidth={2}
        />
      </BarChart>
    </ResponsiveContainer>
  );
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
  // Sample data
  const data = [
    { name: "6月", saving: 850, carbon: 15 },
    { name: "7月", saving: 920, carbon: 17 },
    { name: "8月", saving: 980, carbon: 18 },
    { name: "9月", saving: 1150, carbon: 21 },
    { name: "10月", saving: 1240, carbon: 24.5 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis 
          yAxisId="left" 
          orientation="left" 
          tick={{ fontSize: 12 }} 
          width={40}
          domain={[0, 'dataMax + 200']}
        />
        <YAxis 
          yAxisId="right" 
          orientation="right" 
          tick={{ fontSize: 12 }} 
          width={40}
          domain={[0, 'dataMax + 5']}
        />
        <Tooltip 
          formatter={(value, name) => {
            if (name === "節省水量") return [`${value} 公升`, name];
            if (name === "減少碳排放") return [`${value} 公斤`, name];
            return [value, name];
          }}
        />
        <Legend />
        <Bar 
          yAxisId="left" 
          dataKey="saving" 
          name="節省水量" 
          fill="#3b82f6" 
          radius={[4, 4, 0, 0]} 
        />
        <Line 
          yAxisId="right" 
          type="monotone" 
          dataKey="carbon" 
          name="減少碳排放" 
          stroke="#10b981" 
          strokeWidth={2}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
