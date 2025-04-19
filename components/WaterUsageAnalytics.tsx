import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Droplets, 
  TrendingUp, 
  TrendingDown,
  ArrowRight,
  CalendarDays,
  BarChart4
} from "lucide-react";
import { WaterUsageTrendChart, EnvironmentalImpactChart } from "@/components/charts";

export interface WaterUsageStat {
  title: string;
  value: string;
  change: number;
  changeType: "increase" | "decrease";
  period: string;
}

interface WaterUsageAnalyticsProps {
  className?: string;
  waterUsage: {
    currentUsage: number;
    target: number;
    targetPercentage: number;
    totalSaved: number;
    waterPoints: number;
    weeklyStats: WaterUsageStat[];
    monthlyStats: WaterUsageStat[];
  };
}

export default function WaterUsageAnalytics({ className, waterUsage }: WaterUsageAnalyticsProps) {
  const [timeframe, setTimeframe] = useState<"weekly" | "monthly">("weekly");
  
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-bold">水足跡分析</h2>
        <Tabs defaultValue="weekly" className="w-[180px]" onValueChange={(value) => setTimeframe(value as "weekly" | "monthly")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="weekly">週</TabsTrigger>
            <TabsTrigger value="monthly">月</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Water Usage Stats */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm sm:text-base flex items-center">
              <Droplets className="h-4 w-4 mr-2 text-blue-500" />
              {timeframe === "weekly" ? "本週水足跡狀況" : "本月水足跡狀況"}
            </CardTitle>
            <CardDescription className="text-xs">
              {timeframe === "weekly" ? "2023年10月第3週" : "2023年10月"}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="space-y-4">
              {/* Current Usage */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">目前使用量</span>
                  <span className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400">
                    {waterUsage.currentUsage} 公升
                  </span>
                </div>
                <Progress 
                  value={waterUsage.targetPercentage} 
                  className="h-1.5 sm:h-2 bg-blue-100 dark:bg-blue-950"
                  indicatorClassName="bg-blue-500"
                />
                <div className="mt-1 flex justify-between text-xs">
                  <span>目標: {waterUsage.target} 公升</span>
                  <span className="text-blue-600 dark:text-blue-400">{waterUsage.targetPercentage}%</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                {(timeframe === "weekly" ? waterUsage.weeklyStats : waterUsage.monthlyStats).map((stat, index) => (
                  <div key={index} className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg">
                    <h4 className="text-xs text-slate-500 dark:text-slate-400">{stat.title}</h4>
                    <p className="text-base sm:text-lg font-semibold">{stat.value}</p>
                    <div className="flex items-center mt-1">
                      {stat.changeType === "decrease" ? (
                        <TrendingDown className="h-3 w-3 text-green-500 mr-1" />
                      ) : (
                        <TrendingUp className="h-3 w-3 text-red-500 mr-1" />
                      )}
                      <span className={`text-xs ${stat.changeType === "decrease" ? "text-green-500" : "text-red-500"}`}>
                        {stat.change}% 與{stat.period}比較
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-3 px-4 flex justify-between items-center">
            <div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">累積節水量</p>
              <p className="font-bold text-lg text-blue-600 dark:text-blue-400">
                {waterUsage.totalSaved} <span className="text-xs font-normal">公升</span>
              </p>
            </div>
            <Button size="sm" variant="outline" className="h-8 text-xs">
              詳細報告 <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </CardFooter>
        </Card>

        {/* Water Usage Chart */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm sm:text-base flex items-center">
              <BarChart4 className="h-4 w-4 mr-2 text-blue-500" />
              水足跡趨勢
            </CardTitle>
            <CardDescription className="text-xs">過去6{timeframe === "weekly" ? "週" : "個月"}用水趨勢</CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="h-[200px]">
              <WaterUsageTrendChart timeframe={timeframe} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Environmental Impact */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm sm:text-base">環境影響評估</CardTitle>
          <CardDescription className="text-xs">您的節水對環境的積極影響</CardDescription>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="h-[200px]">
            <EnvironmentalImpactChart />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded-lg text-center">
              <p className="text-xs text-slate-500 dark:text-slate-400">減少碳排放</p>
              <p className="font-semibold text-green-600 dark:text-green-400">24.5 公斤</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg text-center">
              <p className="text-xs text-slate-500 dark:text-slate-400">節約能源</p>
              <p className="font-semibold text-blue-600 dark:text-blue-400">18.2 kWh</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-2 rounded-lg text-center">
              <p className="text-xs text-slate-500 dark:text-slate-400">保護淡水</p>
              <p className="font-semibold text-purple-600 dark:text-purple-400">1,240 公升</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-2 px-4 flex justify-end">
          <Button size="sm" variant="ghost" className="h-8 text-xs">
            了解更多 <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
} 