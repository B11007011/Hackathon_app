"use client"

import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import {
  Droplets,
  Home,
  Receipt,
  User,
  Award,
  Bell,
  Search,
  ChevronRight,
  TrendingUp,
  Zap,
  BarChart3,
  ArrowRight,
  Camera,
  RefreshCw,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Drawer, DrawerContent, DrawerTrigger, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { WaterUsageTrendChart, EnvironmentalImpactChart } from "@/components/charts"
import { useState, useEffect, createContext, useContext } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

// Create context for water points
interface WaterPointsContextType {
  waterPoints: number;
  setWaterPoints: React.Dispatch<React.SetStateAction<number>>;
  redemptionHistory: {
    type: string;
    description: string;
    date: string;
    points: number;
  }[];
  handleRedeemPoints: (title: string, points: number) => void;
}

const WaterPointsContext = createContext<WaterPointsContextType | null>(null);

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("receipts");
  const [waterPoints, setWaterPoints] = useState(132);
  const [showRedemptionToast, setShowRedemptionToast] = useState(false);
  const [redemptionInfo, setRedemptionInfo] = useState({ title: '', points: 0 });
  const [redemptionHistory, setRedemptionHistory] = useState([
    { type: "earn", description: "購買節水商品", date: "2023/10/15", points: 3 },
    { type: "earn", description: "購買節水商品", date: "2023/10/10", points: 5 },
    { type: "spend", description: "折抵水費", date: "2023/10/01", points: 10 }
  ]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const handleRedeemPoints = (title: string, points: number) => {
    if (waterPoints >= points) {
      // Update points
      setWaterPoints(prev => prev - points);
      
      // Add to history
      const now = new Date();
      const formattedDate = `${now.getFullYear()}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')}`;
      
      setRedemptionHistory(prev => [
        { type: "spend", description: title, date: formattedDate, points: points },
        ...prev
      ]);
      
      // Show toast
      setRedemptionInfo({ title, points });
      setShowRedemptionToast(true);
      
      // Close toast after 3 seconds
      setTimeout(() => {
        setShowRedemptionToast(false);
      }, 3000);
    }
  };

  return (
    <WaterPointsContext.Provider value={{ waterPoints, setWaterPoints, redemptionHistory, handleRedeemPoints }}>
    <div className="h-screen w-screen overflow-hidden bg-background flex flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex-shrink-0">
        <div className="container flex h-16 sm:h-20 items-center px-4">
          <div className="flex items-center gap-1 sm:gap-3 font-bold text-xl sm:text-2xl text-blue-600 dark:text-blue-400">
            <Droplets className="h-6 w-6 sm:h-8 sm:w-8" />
            <span>WaterWise</span>
          </div>
          <div className="flex items-center ml-auto gap-2 sm:gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-500 dark:text-slate-400 md:hidden h-9 w-9 sm:h-10 sm:w-10">
                  <Search className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">Search</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="h-40">
                <SheetHeader className="mb-4">
                  <SheetTitle>搜尋</SheetTitle>
                  <SheetDescription>搜尋商品、載具或水足跡資訊</SheetDescription>
                </SheetHeader>
                <div className="flex gap-2">
                  <Input placeholder="輸入關鍵字..." className="flex-1" />
                  <Button>搜尋</Button>
                </div>
              </SheetContent>
            </Sheet>
            <Button variant="ghost" size="icon" className="text-slate-500 dark:text-slate-400 hidden md:flex h-9 w-9 sm:h-10 sm:w-10">
              <Search className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">Search</span>
            </Button>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-500 dark:text-slate-400 relative h-9 w-9 sm:h-10 sm:w-10">
                  <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                  <span className="sr-only">Notifications</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="max-h-[85vh]">
                <DrawerHeader>
                  <DrawerTitle>通知</DrawerTitle>
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm">
                      全部標為已讀
                    </Button>
                  </div>
                </DrawerHeader>
                <ScrollArea className="h-[50vh] px-4">
                  <div className="space-y-4 py-4">
                    <div className="flex gap-3 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center shrink-0">
                        <Droplets className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium">恭喜！您獲得了新的節水獎勵</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          您的最近購物節省了 400L 水足跡，獲得 3 點 WaterPoints
                        </p>
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">5 分鐘前</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-3 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center shrink-0">
                        <Award className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-medium">您已達成「節水達人」成就</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          您已連續三個月節省超過 1,000L 水足跡
                        </p>
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">昨天</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-3 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center shrink-0">
                        <RefreshCw className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="font-medium">系統更新通知</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          WaterWise 已更新至 2.3 版，新增多項功能
                        </p>
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">3 天前</p>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </DrawerContent>
            </Drawer>
            <Sheet>
              <SheetTrigger asChild>
                <Avatar className="h-9 w-9 sm:h-10 sm:w-10 cursor-pointer">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-xs sm:text-sm">
                    WW
                  </AvatarFallback>
                </Avatar>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>個人資料</SheetTitle>
                  <SheetDescription>管理您的帳戶設定</SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder.svg?height=64&width=64" alt="User" />
                      <AvatarFallback className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-xl">
                        WW
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-lg">王小明</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">節水愛好者</p>
                    </div>
                  </div>
                  <nav className="space-y-1">
                    <Link
                      href="#"
                      className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <span>個人資料設定</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <span>通知設定</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <span>隱私設定</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <span>幫助中心</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                    <Separator className="my-2" />
                    <Button variant="destructive" className="w-full">
                      登出
                    </Button>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1 relative">
        <ScrollArea className="h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] w-full">
          <div className="container px-3 sm:px-4 py-4 sm:py-6 pb-20 sm:pb-6">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-2">水足跡載具系統</h1>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">追蹤您的消費水足跡，獲取環保獎勵</p>
            </div>

            <div className="grid gap-4 sm:gap-6">
              {/* Hero Banner */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Water conservation"
                  className="w-full h-36 sm:h-48 object-cover"
                />
              </div>

              <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
                <CardHeader className="pb-2 bg-blue-600 text-white p-3 sm:p-6">
                  <CardTitle className="text-base sm:text-lg">本月節水成果</CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-blue-100">2023年10月</CardDescription>
                </CardHeader>
                <CardContent className="pt-4 sm:pt-6 p-3 sm:p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">已節省水量</span>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <span className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 cursor-help">
                          1,240 公升
                        </span>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-72 sm:w-80">
                        <div className="flex justify-between space-x-4">
                          <div className="space-y-1">
                            <h4 className="text-sm font-semibold">水足跡節省量</h4>
                            <p className="text-xs sm:text-sm">相當於6.2個浴缸的水量，或是一個人3天的生活用水。</p>
                            <div className="flex items-center pt-2">
                              <TrendingUp className="mr-1 h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                              <span className="text-xs text-green-500">比上個月增加15%</span>
                            </div>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                  <Progress
                    value={62}
                    className="h-1.5 sm:h-2 bg-blue-100 dark:bg-blue-950"
                    indicatorClassName="bg-blue-500"
                  />
                  <div className="mt-3 sm:mt-4 flex justify-between text-xs sm:text-sm">
                    <span>目標: 2,000 公升</span>
                    <span className="text-blue-600 dark:text-blue-400">62%</span>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-3 sm:pt-4 p-3 sm:p-6 flex justify-between items-center">
                  <div>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">累積點數</p>
                    <p className="font-bold text-lg sm:text-xl text-blue-600 dark:text-blue-400">
                      {waterPoints} <span className="text-xs sm:text-sm font-normal">WaterPoints</span>
                    </p>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-blue-600 hover:bg-blue-700 h-9 text-xs sm:text-sm">
                        兌換獎勵
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>兌換水足跡獎勵</DialogTitle>
                        <DialogDescription>
                          選擇您想兌換的獎勵，目前您有 {waterPoints} WaterPoints。
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 my-4 max-h-[60vh] overflow-y-auto pr-1">
                        <Card className="overflow-hidden">
                          <div className="flex h-full">
                            <div className="bg-blue-100 dark:bg-blue-900 p-3 sm:p-4 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-blue-600 dark:text-blue-400 w-6 h-6 sm:w-8 sm:h-8"
                              >
                                <path d="M12 22V8"></path>
                                <path d="m5 12 7-4 7 4"></path>
                                <path d="M5 16l7-4 7 4"></path>
                                <path d="M5 20l7-4 7 4"></path>
                              </svg>
                            </div>
                            <CardContent className="p-3 sm:p-4 flex-1 flex justify-between items-center">
                              <div>
                                <h4 className="font-medium text-sm sm:text-base">水費折抵</h4>
                                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">折抵下期水費帳單</p>
                                <p className="text-[10px] sm:text-xs text-blue-600 dark:text-blue-400 mt-1">需要 15 WaterPoints</p>
                              </div>
                              <Button 
                                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 h-8 sm:h-9 text-xs sm:text-sm"
                                onClick={() => handleRedeemPoints("水費折抵", 15)}
                                disabled={waterPoints < 15}
                              >
                                兌換
                              </Button>
                            </CardContent>
                          </div>
                        </Card>

                        <Card className="overflow-hidden">
                          <div className="flex h-full">
                            <div className="bg-purple-100 dark:bg-purple-900 p-3 sm:p-4 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-purple-600 dark:text-purple-400 w-6 h-6 sm:w-8 sm:h-8"
                              >
                                <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                                <path d="M4 11v3a1 1 0 0 0 1 1h3"></path>
                                <path d="M14 15v2a1 1 0 0 1-1 1h-2"></path>
                                <path d="M9 22h6"></path>
                                <path d="M4 15h2"></path>
                              </svg>
                            </div>
                            <CardContent className="p-3 sm:p-4 flex-1 flex justify-between items-center">
                              <div>
                                <h4 className="font-medium text-sm sm:text-base">市民卡點數</h4>
                                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">轉換為市民卡點數</p>
                                <p className="text-[10px] sm:text-xs text-purple-600 dark:text-purple-400 mt-1">需要 10 WaterPoints</p>
                              </div>
                              <Button 
                                className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 h-8 sm:h-9 text-xs sm:text-sm"
                                onClick={() => handleRedeemPoints("市民卡點數", 10)}
                                disabled={waterPoints < 10}
                              >
                                兌換
                              </Button>
                            </CardContent>
                          </div>
                        </Card>

                        <Card className="overflow-hidden">
                          <div className="flex h-full">
                            <div className="bg-green-100 dark:bg-green-900 p-3 sm:p-4 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-green-600 dark:text-green-400 w-6 h-6 sm:w-8 sm:h-8"
                              >
                                <path d="M8 3v2"></path>
                                <path d="M16 3v2"></path>
                                <path d="M21 6H3"></path>
                                <path d="M11 18H3a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2"></path>
                                <path d="M16 16h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z"></path>
                                <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z"></path>
                              </svg>
                            </div>
                            <CardContent className="p-3 sm:p-4 flex-1 flex justify-between items-center">
                              <div>
                                <h4 className="font-medium text-sm sm:text-base">捷運點數</h4>
                                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">轉換為捷運搭乘點數</p>
                                <p className="text-[10px] sm:text-xs text-green-600 dark:text-green-400 mt-1">需要 20 WaterPoints</p>
                              </div>
                              <Button 
                                className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 h-8 sm:h-9 text-xs sm:text-sm"
                                onClick={() => handleRedeemPoints("捷運點數", 20)}
                                disabled={waterPoints < 20}
                              >
                                兌換
                              </Button>
                            </CardContent>
                          </div>
                        </Card>
                      </div>
                      <DialogFooter className="sm:justify-start">
                        <div className="w-full text-center sm:text-left text-xs text-slate-500 dark:text-slate-400">
                          點數兌換後無法退還，請確認您的選擇。
                        </div>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>

              {/* Water Usage Trend Chart */}
              <WaterUsageTrendChart />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2 p-3 sm:p-6">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm sm:text-base">節水排名</CardTitle>
                      <Badge
                        variant="outline"
                        className="text-green-600 border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800 text-xs"
                      >
                        前 15%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-6">
                    <div className="flex items-center justify-center py-3 sm:py-4">
                      <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
                        <svg className="w-24 h-24 sm:w-32 sm:h-32 transform -rotate-90">
                          <circle
                            cx="48"
                            cy="48"
                            r="36"
                            stroke="currentColor"
                            strokeWidth="10"
                            fill="transparent"
                            className="text-blue-100 dark:text-blue-950"
                          />
                          <circle
                            cx="48"
                            cy="48"
                            r="36"
                            stroke="currentColor"
                            strokeWidth="10"
                            fill="transparent"
                            strokeDasharray="226.2"
                            strokeDashoffset="33.93"
                            className="text-blue-600 dark:text-blue-400"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-3xl sm:text-4xl font-bold">85</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 justify-center p-3 sm:p-6">
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">在您的社區中表現優異</p>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2 p-3 sm:p-6">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm sm:text-base">環保貢獻</CardTitle>
                      <Badge className="bg-green-600 text-xs">A 級</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-6">
                    <div className="flex items-center justify-center py-3 sm:py-4">
                      <div className="inline-flex items-center justify-center p-4 sm:p-5 bg-green-50 dark:bg-green-950 rounded-full mb-3">
                        <Zap className="h-8 w-8 sm:h-10 sm:w-10 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">減少碳排放</p>
                        <p className="font-bold text-xl sm:text-2xl mt-1">32 公斤CO₂</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 justify-center p-3 sm:p-6">
                    <Button variant="link" className="text-green-600 dark:text-green-400 h-8 text-xs sm:text-sm">
                      查看詳情
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Environmental Impact Chart */}
              <div className="overflow-hidden pb-6">
                <EnvironmentalImpactChart />
              </div>

              {/* Featured Products Carousel */}
              <div className="my-3 sm:my-4">
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <h3 className="font-medium text-base sm:text-lg">節水精選商品</h3>
                  <Button variant="ghost" size="sm" className="h-8 text-xs sm:text-sm">
                    查看全部
                  </Button>
                </div>
                {(() => {
                  const [activeIndex, setActiveIndex] = useState(0);
                  const [carouselApi, setCarouselApi] = useState<any>(null);

                  useEffect(() => {
                    if (!carouselApi) return;
                    
                    const onSelect = () => {
                      setActiveIndex(carouselApi.selectedScrollSnap());
                    };
                    
                    carouselApi.on("select", onSelect);
                    // Call once to set initial state
                    onSelect();
                    
                    return () => {
                      carouselApi.off("select", onSelect);
                    };
                  }, [carouselApi]);
                  
                  return (
                    <Carousel 
                      className="w-full" 
                      setApi={setCarouselApi}
                      opts={{
                        align: "start",
                        loop: true,
                        skipSnaps: false,
                        dragFree: false,
                      }}
                    >
                      <CarouselContent>
                        {[
                          {
                            title: "有機棉T恤",
                            image: "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg",
                            saving: "45%",
                            waterFootprint: "650 L",
                            color: "from-green-400 to-emerald-600",
                          },
                          {
                            title: "環保洗髮精",
                            image: "https://images.pexels.com/photos/3735215/pexels-photo-3735215.jpeg",
                            saving: "40%",
                            waterFootprint: "120 L",
                            color: "from-cyan-400 to-blue-600",
                          },
                          {
                            title: "節水咖啡機",
                            image: "https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg",
                            saving: "30%",
                            waterFootprint: "850 L",
                            color: "from-amber-400 to-orange-600",
                          },
                          {
                            title: "環保牛仔褲",
                            image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
                            saving: "35%",
                            waterFootprint: "1950 L",
                            color: "from-indigo-400 to-purple-600",
                          },
                        ].map((product, index) => (
                          <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3 pl-1 sm:pl-2">
                            <div className="p-0.5 sm:p-1">
                              <Card className="overflow-hidden">
                                <div
                                  className={`h-24 sm:h-32 bg-gradient-to-br ${product.color} flex items-center justify-center relative`}
                                >
                                  <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.title}
                                    className="w-full h-full object-cover absolute inset-0 mix-blend-overlay"
                                  />
                                  <Badge className="absolute top-2 right-2 bg-white/80 text-slate-900 hover:bg-white/70 text-xs">
                                    節省 {product.saving}
                                  </Badge>
                                </div>
                                <CardContent className="p-3 sm:p-4">
                                  <h4 className="font-medium text-sm sm:text-base">{product.title}</h4>
                                  <div className="flex justify-between items-center mt-2">
                                    <div>
                                      <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
                                        水足跡: {product.waterFootprint}
                                      </p>
                                      <p className="text-[10px] sm:text-xs text-green-600 dark:text-green-400 font-medium">
                                        比平均節省: {product.saving}
                                      </p>
                                    </div>
                                    <Button size="sm" variant="outline" className="h-7 sm:h-8 text-xs">
                                      詳情
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="flex justify-center items-center gap-2 mt-4">
                        <CarouselPrevious className="relative static transform-none mr-2 h-8 w-8 sm:h-9 sm:w-9" />
                        <div className="flex gap-2 sm:hidden">
                          {[0, 1, 2, 3].map((i) => (
                            <div 
                              key={i} 
                              className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
                                i === activeIndex 
                                  ? "bg-blue-600 dark:bg-blue-400" 
                                  : "bg-slate-300 dark:bg-slate-600"
                              }`}
                              onClick={() => carouselApi?.scrollTo(i)}
                              role="button"
                              tabIndex={0}
                              aria-label={`Go to slide ${i + 1}`}
                            ></div>
                          ))}
                        </div>
                        <CarouselNext className="relative static transform-none ml-2 h-8 w-8 sm:h-9 sm:w-9" />
                      </div>
                    </Carousel>
                  )
                })()}
              </div>

              {/* Mobile Tab Contents - Will show when tabs are clicked */}
              <div className="sm:hidden">
                {activeTab === "home" && (
                  <div className="mt-4 space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-base sm:text-lg">水足跡新聞</h3>
                      <Button variant="ghost" size="sm" className="h-8 text-xs sm:text-sm">
                        查看全部
                      </Button>
                    </div>
                    <div className="space-y-4">
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex gap-4">
                            <div className="w-16 h-16 rounded-md bg-blue-100 dark:bg-blue-900 flex items-center justify-center shrink-0">
                              <BarChart3 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                              <h4 className="font-medium">新政策：水足跡標示將成為必要項目</h4>
                              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                環保署宣布自2024年起，所有消費品需標示水足跡...
                              </p>
                              <div className="flex items-center mt-2">
                                <Badge variant="secondary" className="text-xs">
                                  政策更新
                                </Badge>
                                <span className="text-xs text-slate-400 dark:text-slate-500 ml-2">2小時前</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex gap-4">
                            <div className="w-16 h-16 rounded-md bg-green-100 dark:bg-green-900 flex items-center justify-center shrink-0">
                              <Droplets className="h-8 w-8 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                              <h4 className="font-medium">台灣水資源危機：如何從日常消費做起</h4>
                              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                專家指出，透過選購低水足跡商品，每人每年可節省...
                              </p>
                              <div className="flex items-center mt-2">
                                <Badge variant="secondary" className="text-xs">
                                  專家觀點
                                </Badge>
                                <span className="text-xs text-slate-400 dark:text-slate-500 ml-2">1天前</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}
                {activeTab === "receipts" && <ReceiptDetail />}
                {activeTab === "rewards" && <RewardsPage />}
                {activeTab === "profile" && <ProfilePage />}
              </div>

              <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full sm:block hidden">
                <TabsList className="grid grid-cols-4 h-16 sm:h-20 bg-slate-100 dark:bg-slate-800 rounded-xl p-1">
                  <TabsTrigger
                    value="home"
                    className="rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950"
                  >
                    <div className="flex flex-col items-center">
                      <Home className="h-5 w-5 sm:h-6 sm:w-6" />
                      <span className="text-xs sm:text-sm mt-1">首頁</span>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger
                    value="receipts"
                    className="rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950"
                  >
                    <div className="flex flex-col items-center">
                      <Receipt className="h-5 w-5 sm:h-6 sm:w-6" />
                      <span className="text-xs sm:text-sm mt-1">載具</span>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger
                    value="rewards"
                    className="rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950"
                  >
                    <div className="flex flex-col items-center">
                      <Award className="h-5 w-5 sm:h-6 sm:w-6" />
                      <span className="text-xs sm:text-sm mt-1">獎勵</span>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger
                    value="profile"
                    className="rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950"
                  >
                    <div className="flex flex-col items-center">
                      <User className="h-5 w-5 sm:h-6 sm:w-6" />
                      <span className="text-xs sm:text-sm mt-1">個人</span>
                    </div>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="home" className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-base sm:text-lg">水足跡新聞</h3>
                    <Button variant="ghost" size="sm" className="h-8 text-xs sm:text-sm">
                      查看全部
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className="w-16 h-16 rounded-md bg-blue-100 dark:bg-blue-900 flex items-center justify-center shrink-0">
                            <BarChart3 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-medium">新政策：水足跡標示將成為必要項目</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                              環保署宣布自2024年起，所有消費品需標示水足跡...
                            </p>
                            <div className="flex items-center mt-2">
                              <Badge variant="secondary" className="text-xs">
                                政策更新
                              </Badge>
                              <span className="text-xs text-slate-400 dark:text-slate-500 ml-2">2小時前</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className="w-16 h-16 rounded-md bg-green-100 dark:bg-green-900 flex items-center justify-center shrink-0">
                            <Droplets className="h-8 w-8 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <h4 className="font-medium">台灣水資源危機：如何從日常消費做起</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                              專家指出，透過選購低水足跡商品，每人每年可節省...
                            </p>
                            <div className="flex items-center mt-2">
                              <Badge variant="secondary" className="text-xs">
                                專家觀點
                              </Badge>
                              <span className="text-xs text-slate-400 dark:text-slate-500 ml-2">1天前</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="receipts" className="mt-4 sm:mt-6">
                  <ReceiptDetail />
                </TabsContent>
                <TabsContent value="rewards" className="mt-4 sm:mt-6">
                  <RewardsPage />
                </TabsContent>
                <TabsContent value="profile" className="mt-4 sm:mt-6">
                  <ProfilePage />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </ScrollArea>
      </main>

      {/* Fixed bottom navigation for mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:hidden flex-shrink-0">
        <div className="w-full">
          <div className="items-center justify-center p-1 text-muted-foreground grid grid-cols-4 h-16 bg-transparent rounded-none border-0">
            <button 
              onClick={() => handleTabChange("home")} 
              className={`inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-lg ${activeTab === "home" ? "text-blue-600" : ""}`}
            >
              <div className="flex flex-col items-center">
                <Home className="h-5 w-5" />
                <span className="text-xs mt-1">首頁</span>
              </div>
            </button>
            <button 
              onClick={() => handleTabChange("receipts")} 
              className={`inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-lg ${activeTab === "receipts" ? "text-blue-600" : ""}`}
            >
              <div className="flex flex-col items-center">
                <Receipt className="h-5 w-5" />
                <span className="text-xs mt-1">載具</span>
              </div>
            </button>
            <button 
              onClick={() => handleTabChange("rewards")} 
              className={`inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-lg ${activeTab === "rewards" ? "text-blue-600" : ""}`}
            >
              <div className="flex flex-col items-center">
                <Award className="h-5 w-5" />
                <span className="text-xs mt-1">獎勵</span>
              </div>
            </button>
            <button 
              onClick={() => handleTabChange("profile")} 
              className={`inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-lg ${activeTab === "profile" ? "text-blue-600" : ""}`}
            >
              <div className="flex flex-col items-center">
                <User className="h-5 w-5" />
                <span className="text-xs mt-1">個人</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Toast notification for redemption */}
      {showRedemptionToast && (
        <div className="fixed bottom-20 sm:bottom-5 right-5 bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-800 shadow-lg rounded-lg p-4 max-w-sm z-50 animate-in fade-in slide-in-from-bottom-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </div>
            <div>
              <p className="font-medium text-green-800 dark:text-green-200">兌換成功！</p>
              <p className="text-sm text-green-700 dark:text-green-300">
                您已成功兌換 {redemptionInfo.title}，消耗了 {redemptionInfo.points} WaterPoints。
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
    </WaterPointsContext.Provider>
  )
}

function ReceiptDetail() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-base sm:text-lg">最近購物明細</h3>
        <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 h-9 text-xs sm:text-sm">
          <Camera className="mr-1.5 h-3.5 w-3.5 sm:mr-2 sm:h-4 sm:w-4" />
          掃描載具
        </Button>
      </div>

      <Card className="overflow-hidden">
        <CardHeader className="pb-2 bg-slate-50 dark:bg-slate-800 p-3 sm:p-6">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-sm sm:text-base flex items-center">
                全聯福利中心 #12345
                <Badge variant="outline" className="ml-2 text-[10px] sm:text-xs">
                  已處理
                </Badge>
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">2023/10/15 14:30</CardDescription>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sm:w-16 sm:h-16"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>選項</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>查看詳情</DropdownMenuItem>
                <DropdownMenuItem>下載發票</DropdownMenuItem>
                <DropdownMenuItem>分享</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="border-t border-b dark:border-slate-700">
            <div className="p-3 sm:p-4 border-b dark:border-slate-700">
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2 sm:mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600 dark:text-blue-400 sm:w-20 sm:h-20"
                    >
                      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
                    </svg>
                  </div>
                  <span className="font-medium text-sm sm:text-base">T恤 (A牌)</span>
                </div>
                <span className="text-sm sm:text-base">NT$ 599</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-slate-500 dark:text-slate-400">平均水足跡:</span>
                  <span>1200 L</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-slate-500 dark:text-slate-400">實際水足跡:</span>
                  <span className="text-green-600 dark:text-green-400 font-medium">800 L</span>
                </div>
              </div>
              <div className="mt-2 bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-md flex justify-between items-center">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1"
                  >
                    <path d="m7 15 5 5 5-5"></path>
                    <path d="m7 9 5-5 5 5"></path>
                  </svg>
                  <span>節水獎勵</span>
                </div>
                <span>+3 WaterPoints</span>
              </div>
            </div>

            <div className="p-3 sm:p-4">
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-600 dark:text-purple-400"
                    >
                      <path d="M9 2v6c0 1.1.9 2 2 2h6"></path>
                      <path d="M4 11v3a1 1 0 0 0 1 1h3"></path>
                      <path d="M14 15v2a1 1 0 0 1-1 1h-2"></path>
                      <path d="M9 22h6"></path>
                      <path d="M4 15h2"></path>
                    </svg>
                  </div>
                  <span className="font-medium">洗髮精 (B牌)</span>
                </div>
                <span>NT$ 299</span>
              </div>
              <div className="flex justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 dark:text-slate-400">平均水足跡:</span>
                  <span>200 L</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 dark:text-slate-400">實際水足跡:</span>
                  <span className="text-red-600 dark:text-red-400 font-medium">250 L</span>
                </div>
              </div>
              <div className="mt-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm px-3 py-1.5 rounded-md flex justify-between items-center">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1"
                  >
                    <path d="M5 12h14"></path>
                  </svg>
                  <span>無獎勵</span>
                </div>
                <span>+0 WaterPoints</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-3 sm:pt-4 p-3 sm:p-6">
          <div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">總計</p>
            <p className="font-bold text-base sm:text-lg">NT$ 898</p>
          </div>
          <div className="text-right">
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">獲得點數</p>
            <p className="font-bold text-base sm:text-lg text-green-600 dark:text-green-400">+3 WaterPoints</p>
          </div>
        </CardFooter>
      </Card>

      <div className="pt-1 sm:pt-2">
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <h3 className="font-medium text-base sm:text-lg">節水商品推薦</h3>
          <div className="flex gap-2">
            <Input className="w-28 sm:w-40 h-8 sm:h-9 text-xs" placeholder="搜尋商品..." autoComplete="off" data-ms-editor="false" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 sm:h-9 text-xs sm:text-sm">
                  分類
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 sm:ml-2"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="text-xs sm:text-sm">全部類別</DropdownMenuItem>
                <DropdownMenuItem className="text-xs sm:text-sm">服裝</DropdownMenuItem>
                <DropdownMenuItem className="text-xs sm:text-sm">個人護理</DropdownMenuItem>
                <DropdownMenuItem className="text-xs sm:text-sm">食品</DropdownMenuItem>
                <DropdownMenuItem className="text-xs sm:text-sm">家居用品</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <Card className="overflow-hidden">
            <div className="h-32 bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center relative">
              <img
                src="https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg"
                alt="有機棉T恤"
                className="w-full h-full object-cover absolute inset-0 mix-blend-overlay"
              />
              <Badge className="absolute top-2 right-2 bg-white/80 text-slate-900 hover:bg-white/70">節省 45%</Badge>
            </div>
            <CardContent className="p-4">
              <Badge className="mb-2 bg-green-600 hover:bg-green-700">節水認證</Badge>
              <h4 className="font-medium">有機棉T恤 (C牌)</h4>
              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">水足跡: 650 L</p>
                  <p className="text-xs text-green-600 dark:text-green-400 font-medium">比平均節省: 45%</p>
                </div>
                <Button size="sm" variant="outline" className="h-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1"
                  >
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                  詳情
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="h-32 bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center relative">
              <img
                src="https://images.pexels.com/photos/3735215/pexels-photo-3735215.jpeg"
                alt="環保洗髮精"
                className="w-full h-full object-cover absolute inset-0 mix-blend-overlay"
              />
              <Badge className="absolute top-2 right-2 bg-white/80 text-slate-900 hover:bg-white/70">節省 40%</Badge>
            </div>
            <CardContent className="p-4">
              <Badge className="mb-2 bg-green-600 hover:bg-green-700">節水認證</Badge>
              <h4 className="font-medium">環保洗髮精 (D牌)</h4>
              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">水足跡: 120 L</p>
                  <p className="text-xs text-green-600 dark:text-green-400 font-medium">比平均節省: 40%</p>
                </div>
                <Button size="sm" variant="outline" className="h-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1"
                  >
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                  詳情
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function RewardsPage() {
  const context = useContext(WaterPointsContext);
  
  if (!context) {
    throw new Error("RewardsPage must be used within a WaterPointsContext.Provider");
  }
  
  const { waterPoints, redemptionHistory, handleRedeemPoints } = context;
  
  return (
    <div className="space-y-4 sm:space-y-6">
      <Card className="overflow-hidden">
        <div className="bg-blue-600 text-white p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">我的水足跡獎勵</h3>
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <div>
              <p className="text-xs sm:text-sm opacity-80">累積點數</p>
              <div className="flex items-baseline">
                <p className="text-3xl sm:text-4xl font-bold">{waterPoints}</p>
                <p className="text-xs sm:text-sm ml-1">WaterPoints</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-full animate-ping opacity-75"></div>
              <Droplets className="h-12 w-12 sm:h-16 sm:w-16 relative z-10" />
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs sm:text-sm">可折抵水費</p>
                <p className="text-xl sm:text-2xl font-bold">NT$ {(waterPoints * 0.2).toFixed(1)}</p>
              </div>
              <Button 
                size="sm" 
                variant="secondary" 
                className="bg-white/30 hover:bg-white/40 border-0 h-8 text-xs sm:text-sm"
                onClick={() => handleRedeemPoints("水費折抵", 15)}
                disabled={waterPoints < 15}
              >
                立即折抵
              </Button>
            </div>
          </div>
        </div>
        <CardContent className="p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-sm sm:text-base">點數歷史</h4>
            <Button variant="ghost" size="sm" className="h-8 text-xs sm:text-sm">
              查看全部
            </Button>
          </div>
          <div className="space-y-2 sm:space-y-3 mt-2 sm:mt-3">
            {redemptionHistory.slice(0, 3).map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b dark:border-slate-700">
              <div className="flex items-center">
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${
                    item.type === "earn" 
                      ? "bg-green-100 dark:bg-green-900" 
                      : "bg-red-100 dark:bg-red-900"
                  } flex items-center justify-center mr-2 sm:mr-3`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                      className={item.type === "earn" 
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                      }
                  >
                      {item.type === "earn" ? (
                        <>
                    <path d="m5 12 7-7 7 7"></path>
                    <path d="M12 19V5"></path>
                        </>
                      ) : (
                        <>
                    <path d="m19 12-7 7-7-7"></path>
                    <path d="M12 5v14"></path>
                        </>
                      )}
                  </svg>
                </div>
                <div>
                    <p className="font-medium text-xs sm:text-sm">{item.description}</p>
                    <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">{item.date}</p>
                </div>
              </div>
                <span className={`font-medium text-xs sm:text-sm ${
                  item.type === "earn" 
                    ? "text-green-600 dark:text-green-400" 
                    : "text-red-600 dark:text-red-400"
                }`}>
                  {item.type === "earn" ? "+" : "-"}{item.points}
                </span>
            </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <h3 className="font-medium text-base sm:text-lg">點數兌換選項</h3>
      <div className="space-y-3 sm:space-y-4">
        <Card className="overflow-hidden">
          <div className="flex h-full">
            <div className="bg-blue-100 dark:bg-blue-900 p-3 sm:p-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600 dark:text-blue-400 w-6 h-6 sm:w-8 sm:h-8"
              >
                <path d="M12 22V8"></path>
                <path d="m5 12 7-4 7 4"></path>
                <path d="M5 16l7-4 7 4"></path>
                <path d="M5 20l7-4 7 4"></path>
              </svg>
            </div>
            <CardContent className="p-3 sm:p-4 flex-1 flex justify-between items-center">
              <div>
                <h4 className="font-medium text-sm sm:text-base">水費折抵</h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">直接折抵下期水費帳單</p>
                <p className="text-[10px] sm:text-xs text-blue-600 dark:text-blue-400 mt-1">1 WaterPoint = NT$ 0.2</p>
              </div>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 h-8 sm:h-9 text-xs sm:text-sm"
                onClick={() => handleRedeemPoints("水費折抵", 15)}
                disabled={waterPoints < 15}
              >
                兌換
              </Button>
            </CardContent>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <div className="flex h-full">
            <div className="bg-purple-100 dark:bg-purple-900 p-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-purple-600 dark:text-purple-400"
              >
                <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                <path d="M4 11v3a1 1 0 0 0 1 1h3"></path>
                <path d="M14 15v2a1 1 0 0 1-1 1h-2"></path>
                <path d="M9 22h6"></path>
                <path d="M4 15h2"></path>
              </svg>
            </div>
            <CardContent className="p-4 flex-1 flex justify-between items-center">
              <div>
                <h4 className="font-medium">市民卡點數</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">轉換為市民卡點數使用</p>
                <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">1 WaterPoint = 1 市民點數</p>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800">
                兌換
              </Button>
            </CardContent>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <div className="flex h-full">
            <div className="bg-green-100 dark:bg-green-900 p-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-600 dark:text-green-400"
              >
                <path d="M8 3v2"></path>
                <path d="M16 3v2"></path>
                <path d="M21 6H3"></path>
                <path d="M11 18H3a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2"></path>
                <path d="M16 16h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z"></path>
                <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z"></path>
              </svg>
            </div>
            <CardContent className="p-4 flex-1 flex justify-between items-center">
              <div>
                <h4 className="font-medium">捷運點數</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">轉換為捷運搭乘點數</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">10 WaterPoints = NT$ 1 捷運儲值</p>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800">
                兌換
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  )
}

function ProfilePage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center gap-3 sm:gap-4">
        <Avatar className="h-16 w-16 sm:h-20 sm:w-20">
          <AvatarImage src="/placeholder.svg?height=80&width=80" alt="User" />
          <AvatarFallback className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-xl sm:text-2xl">
            WW
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg sm:text-xl font-bold">王小明</h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">節水愛好者</p>
          <div className="flex items-center mt-1">
            <Badge
              variant="outline"
              className="mr-2 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:border-blue-800 text-[10px] sm:text-xs"
            >
              Level 3
            </Badge>
            <span className="text-xs text-slate-500 dark:text-slate-400">會員自 2023/05/12</span>
          </div>
        </div>
      </div>

      <Separator />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader className="p-3 sm:p-6">
            <CardTitle className="text-base sm:text-lg">個人成就</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4 p-3 sm:p-6 pt-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-2 sm:mr-3">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="font-medium text-xs sm:text-sm">節水達人</p>
                  <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">連續三個月節省超過 1,000L 水足跡</p>
                </div>
              </div>
              <Badge className="text-[10px] sm:text-xs">已達成</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2 sm:mr-3">
                  <Droplets className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-xs sm:text-sm">水資源守護者</p>
                  <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">累積節省超過 10,000L 水足跡</p>
                </div>
              </div>
              <div className="text-right">
                <Badge variant="outline" className="text-[10px] sm:text-xs">進行中</Badge>
                <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">8,240 / 10,000 L</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="p-3 sm:p-6">
            <CardTitle className="text-base sm:text-lg">環保貢獻</CardTitle>
          </CardHeader>
          <CardContent className="p-3 sm:p-6 pt-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 sm:p-4 rounded-lg text-center">
                <p className="text-[10px] sm:text-sm text-slate-500 dark:text-slate-400">累積節水量</p>
                <p className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">8,240 L</p>
                <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">相當於 41 個浴缸</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-3 sm:p-4 rounded-lg text-center">
                <p className="text-[10px] sm:text-sm text-slate-500 dark:text-slate-400">減少碳排放</p>
                <p className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">32 kg</p>
                <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">相當於種植 1.5 棵樹</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="p-3 sm:p-6">
          <CardTitle className="text-base sm:text-lg">帳戶設定</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-4 p-3 sm:p-6 pt-0">
          <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs sm:text-sm font-medium">電子郵件</label>
              <Input defaultValue="wang@example.com" className="mt-1 h-8 sm:h-10 text-xs sm:text-sm" />
            </div>
            <div>
              <label className="text-xs sm:text-sm font-medium">手機號碼</label>
              <Input defaultValue="0912-345-678" className="mt-1 h-8 sm:h-10 text-xs sm:text-sm" />
            </div>
          </div>
          <div>
            <label className="text-xs sm:text-sm font-medium">通知設定</label>
            <div className="space-y-2 mt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm">接收節水提醒</span>
                <Switch checked={true} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm">接收獎勵通知</span>
                <Switch checked={true} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm">接收每週水足跡報告</span>
                <Switch checked={false} />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-3 sm:p-6">
          <Button className="ml-auto h-9 text-xs sm:text-sm">儲存變更</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
