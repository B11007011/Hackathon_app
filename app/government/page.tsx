import Link from "next/link"
import {
  Droplets,
  BarChart,
  FileText,
  Settings,
  Database,
  Calculator,
  Award,
  Bell,
  Search,
  ChevronRight,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function GovernmentPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900 dark:text-slate-50">
      <aside className="hidden lg:flex flex-col w-64 border-r bg-white dark:bg-slate-950 dark:border-slate-800">
        <div className="flex h-16 items-center gap-2 px-6 border-b font-bold text-xl text-blue-600 dark:text-blue-400 dark:border-slate-800">
          <Droplets className="h-6 w-6" />
          <span>WaterWise</span>
          <Badge
            variant="outline"
            className="ml-1 text-xs bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
          >
            政府版
          </Badge>
        </div>
        <ScrollArea className="flex-1">
          <nav className="p-4 space-y-1">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg bg-blue-50 dark:bg-blue-950 px-3 py-2 text-blue-700 dark:text-blue-400"
            >
              <BarChart className="h-5 w-5" />
              儀表板
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950"
            >
              <Database className="h-5 w-5" />
              水足跡基準管理
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950"
            >
              <Calculator className="h-5 w-5" />
              稅收管理
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950"
            >
              <Award className="h-5 w-5" />
              民眾回饋管理
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950"
            >
              <FileText className="h-5 w-5" />
              報表
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950"
            >
              <Settings className="h-5 w-5" />
              設定
            </Link>
          </nav>
        </ScrollArea>
        <div className="p-4 border-t dark:border-slate-800">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                G
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">政府管理員</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">環保署</p>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1">
        <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur-sm dark:bg-slate-950/80 dark:border-slate-800">
          <div className="flex h-16 items-center px-6 justify-between">
            <div className="lg:hidden flex items-center gap-2 font-bold text-xl text-blue-600 dark:text-blue-400">
              <Droplets className="h-6 w-6" />
              <span>WaterWise</span>
              <Badge
                variant="outline"
                className="ml-1 text-xs bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
              >
                政府版
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-slate-500 dark:text-slate-400">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-500 dark:text-slate-400">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Avatar className="h-8 w-8 cursor-pointer lg:hidden">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                      G
                    </AvatarFallback>
                  </Avatar>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>政府管理設定</SheetTitle>
                    <SheetDescription>管理您的政府帳戶</SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <div className="flex items-center gap-4 mb-6">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src="/placeholder.svg?height=64&width=64" alt="User" />
                        <AvatarFallback className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-xl">
                          G
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-lg">政府管理員</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">環保署</p>
                      </div>
                    </div>
                    <nav className="space-y-1">
                      <Link
                        href="#"
                        className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <span>管理員設定</span>
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
                        <span>用戶權限管理</span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href="#"
                        className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <span>幫助中心</span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
        <ScrollArea className="h-[calc(100vh-4rem)]">
          <div className="container p-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">政府管理儀表板</h1>
              <p className="text-slate-500 dark:text-slate-400">管理水足跡基準、稅收與民眾回饋</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">已申報企業</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="text-3xl font-bold">156</div>
                    <Badge
                      variant="outline"
                      className="ml-2 text-xs bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
                    >
                      +12 本月
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">參與企業總數</p>
                  <div className="mt-4 h-1 bg-slate-100 dark:bg-slate-800">
                    <div className="h-1 bg-blue-600 dark:bg-blue-400" style={{ width: "78%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-slate-500 dark:text-slate-400">目標: 200</span>
                    <span className="text-blue-600 dark:text-blue-400">78%</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">已申報產品</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="text-3xl font-bold">2,450</div>
                    <Badge
                      variant="outline"
                      className="ml-2 text-xs bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800"
                    >
                      +85 本月
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">產品總數</p>
                  <div className="mt-4 h-1 bg-slate-100 dark:bg-slate-800">
                    <div className="h-1 bg-green-600 dark:bg-green-400" style={{ width: "82%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-slate-500 dark:text-slate-400">目標: 3,000</span>
                    <span className="text-green-600 dark:text-green-400">82%</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">水稅收入</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">NT$ 1.2M</div>
                    <Badge
                      variant="outline"
                      className="ml-2 text-xs bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
                    >
                      +8% 上季
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">本季度累計</p>
                  <div className="mt-4 h-1 bg-slate-100 dark:bg-slate-800">
                    <div className="h-1 bg-blue-600 dark:bg-blue-400" style={{ width: "65%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-slate-500 dark:text-slate-400">目標: NT$ 1.8M</span>
                    <span className="text-blue-600 dark:text-blue-400">65%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 mt-6 lg:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div>
                    <CardTitle>水足跡基準管理</CardTitle>
                    <CardDescription>各類別商品的基準水足跡設定</CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <span className="sr-only">開啟選單</span>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>操作</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>匯出數據</DropdownMenuItem>
                      <DropdownMenuItem>篩選條件</DropdownMenuItem>
                      <DropdownMenuItem>重新整理</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>產品類別</TableHead>
                        <TableHead>基準水足跡</TableHead>
                        <TableHead>上次更新</TableHead>
                        <TableHead>操作</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">服裝 - T恤</TableCell>
                        <TableCell>1200 L</TableCell>
                        <TableCell>2023/06/15</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm" className="h-8 w-16">
                            編輯
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">服裝 - 牛仔褲</TableCell>
                        <TableCell>3000 L</TableCell>
                        <TableCell>2023/06/15</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm" className="h-8 w-16">
                            編輯
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">個人護理 - 洗髮精</TableCell>
                        <TableCell>200 L</TableCell>
                        <TableCell>2023/06/15</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm" className="h-8 w-16">
                            編輯
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                    新增產品類別
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div>
                    <CardTitle>稅收管理</CardTitle>
                    <CardDescription>水稅收入與分配</CardDescription>
                  </div>
                  <Badge className="bg-blue-600">本季度</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">本季度水稅收入</span>
                        <span className="text-sm font-medium">NT$ 1,245,680</span>
                      </div>
                      <Progress
                        value={75}
                        className="h-2.5 bg-blue-100 dark:bg-blue-950"
                        indicatorClassName="bg-blue-500"
                      />
                    </div>

                    <h4 className="font-medium text-sm mt-4">稅收分配</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="border rounded-lg p-3 dark:border-slate-700">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                          <p className="text-sm text-slate-500 dark:text-slate-400">地區排水基建</p>
                        </div>
                        <p className="font-bold">NT$ 747,408</p>
                        <p className="text-xs text-blue-600 dark:text-blue-400">60% 分配</p>
                      </div>
                      <div className="border rounded-lg p-3 dark:border-slate-700">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-3 h-3 rounded-full bg-cyan-600 dark:bg-cyan-400"></div>
                          <p className="text-sm text-slate-500 dark:text-slate-400">雨水回收系統</p>
                        </div>
                        <p className="font-bold">NT$ 373,704</p>
                        <p className="text-xs text-cyan-600 dark:text-cyan-400">30% 分配</p>
                      </div>
                      <div className="border rounded-lg p-3 dark:border-slate-700">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-3 h-3 rounded-full bg-green-600 dark:bg-green-400"></div>
                          <p className="text-sm text-slate-500 dark:text-slate-400">民眾回饋基金</p>
                        </div>
                        <p className="font-bold">NT$ 124,568</p>
                        <p className="text-xs text-green-600 dark:text-green-400">10% 分配</p>
                      </div>
                      <div className="border rounded-lg p-3 dark:border-slate-700">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-3 h-3 rounded-full bg-slate-400 dark:bg-slate-500"></div>
                          <p className="text-sm text-slate-500 dark:text-slate-400">行政管理</p>
                        </div>
                        <p className="font-bold">NT$ 0</p>
                        <p className="text-xs text-slate-400 dark:text-slate-500">0% 分配</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                    調整分配比例
                  </Button>
                </CardFooter>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div>
                    <CardTitle>民眾回饋管理</CardTitle>
                    <CardDescription>WaterPoints 點數轉換與合作機構管理</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="points" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-4">
                      <TabsTrigger value="points">點數轉換設定</TabsTrigger>
                      <TabsTrigger value="partners">合作機構管理</TabsTrigger>
                    </TabsList>
                    <TabsContent value="points">
                      <div className="space-y-4">
                        <div className="border rounded-lg p-4 dark:border-slate-700">
                          <div className="flex justify-between mb-2">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
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
                                  className="text-blue-600 dark:text-blue-400"
                                >
                                  <path d="M12 22V8"></path>
                                  <path d="m5 12 7-4 7 4"></path>
                                  <path d="M5 16l7-4 7 4"></path>
                                  <path d="M5 20l7-4 7 4"></path>
                                </svg>
                              </div>
                              <h4 className="font-medium">水費折抵</h4>
                            </div>
                            <Button variant="outline" size="sm" className="h-8">
                              編輯
                            </Button>
                          </div>
                          <div className="pl-13 ml-13">
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                              目前轉換比例: 1 WaterPoint = NT$ 0.2
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">上次更新: 2023/01/01</p>
                            <div className="mt-2 flex items-center">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
                              >
                                使用率: 高
                              </Badge>
                              <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">
                                78% 用戶選擇此選項
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="border rounded-lg p-4 dark:border-slate-700">
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
                                  <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                                  <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
                                  <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
                                </svg>
                              </div>
                              <h4 className="font-medium">市民卡點數</h4>
                            </div>
                            <Button variant="outline" size="sm" className="h-8">
                              編輯
                            </Button>
                          </div>
                          <div className="pl-13 ml-13">
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                              目前轉換比例: 1 WaterPoint = 1 市民點數
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">上次更新: 2023/01/01</p>
                            <div className="mt-2 flex items-center">
                              <Badge
                                variant="outline"
                                className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800"
                              >
                                使用率: 中
                              </Badge>
                              <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">
                                15% 用戶選擇此選項
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="border rounded-lg p-4 dark:border-slate-700">
                          <div className="flex justify-between mb-2">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
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
                              <h4 className="font-medium">捷運點數</h4>
                            </div>
                            <Button variant="outline" size="sm" className="h-8">
                              編輯
                            </Button>
                          </div>
                          <div className="pl-13 ml-13">
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                              目前轉換比例: 10 WaterPoints = NT$ 1 捷運儲值
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">上次更新: 2023/01/01</p>
                            <div className="mt-2 flex items-center">
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800"
                              >
                                使用率: 低
                              </Badge>
                              <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">7% 用戶選擇此選項</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="partners">
                      <div className="space-y-4">
                        <div className="flex justify-between mb-4">
                          <h4 className="font-medium">合作機構列表</h4>
                          <Button size="sm" variant="outline">
                            新增機構
                          </Button>
                        </div>
                        <div className="border rounded-lg dark:border-slate-700">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>機構名稱</TableHead>
                                <TableHead>合作類型</TableHead>
                                <TableHead>合作狀態</TableHead>
                                <TableHead>操作</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell className="font-medium">台灣自來水公司</TableCell>
                                <TableCell>水費折抵</TableCell>
                                <TableCell>
                                  <Badge className="bg-green-600">啟用中</Badge>
                                </TableCell>
                                <TableCell>
                                  <Button variant="ghost" size="sm">
                                    管理
                                  </Button>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">市民卡管理處</TableCell>
                                <TableCell>點數轉換</TableCell>
                                <TableCell>
                                  <Badge className="bg-green-600">啟用中</Badge>
                                </TableCell>
                                <TableCell>
                                  <Button variant="ghost" size="sm">
                                    管理
                                  </Button>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">台北捷運公司</TableCell>
                                <TableCell>點數轉換</TableCell>
                                <TableCell>
                                  <Badge className="bg-green-600">啟用中</Badge>
                                </TableCell>
                                <TableCell>
                                  <Button variant="ghost" size="sm">
                                    管理
                                  </Button>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">環保商店聯盟</TableCell>
                                <TableCell>商品折扣</TableCell>
                                <TableCell>
                                  <Badge variant="outline">審核中</Badge>
                                </TableCell>
                                <TableCell>
                                  <Button variant="ghost" size="sm">
                                    管理
                                  </Button>
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                    儲存設定
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </ScrollArea>
      </main>
    </div>
  )
}
