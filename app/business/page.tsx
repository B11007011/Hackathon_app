import Link from "next/link"
import {
  Droplets,
  BarChart,
  FileText,
  Settings,
  Upload,
  Award,
  Calculator,
  Bell,
  Search,
  ChevronRight,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function BusinessPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900 dark:text-slate-50">
        <Sidebar className="hidden lg:flex">
          <SidebarHeader>
            <div className="flex h-14 sm:h-16 items-center gap-1 sm:gap-2 px-4 sm:px-6 border-b font-bold text-lg sm:text-xl text-blue-600 dark:text-blue-400 dark:border-slate-800">
              <Droplets className="h-5 w-5 sm:h-6 sm:w-6" />
              <span>WaterWise</span>
              <Badge
                variant="outline"
                className="ml-1 text-[10px] sm:text-xs bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
              >
                企業版
              </Badge>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center gap-2 sm:gap-3 rounded-lg bg-blue-50 dark:bg-blue-950 px-3 py-2 text-blue-700 dark:text-blue-400 text-sm sm:text-base">
                  <BarChart className="h-4 w-4 sm:h-5 sm:w-5" />
                  儀表板
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center gap-2 sm:gap-3 rounded-lg px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 text-sm sm:text-base">
                  <Upload className="h-4 w-4 sm:h-5 sm:w-5" />
                  商品用水申報
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center gap-2 sm:gap-3 rounded-lg px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 text-sm sm:text-base">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5" />
                  節水認證申請
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center gap-2 sm:gap-3 rounded-lg px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 text-sm sm:text-base">
                  <Calculator className="h-4 w-4 sm:h-5 sm:w-5" />
                  水稅估算
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center gap-2 sm:gap-3 rounded-lg px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 text-sm sm:text-base">
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                  報表
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center gap-2 sm:gap-3 rounded-lg px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 text-sm sm:text-base">
                  <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
                  設定
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <div className="p-3 sm:p-4 border-t dark:border-slate-800">
              <div className="flex items-center gap-2 sm:gap-3">
                <Avatar className="h-7 w-7 sm:h-8 sm:w-8">
                  <AvatarImage
                    src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="User"
                  />
                  <AvatarFallback className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-xs sm:text-sm">
                    A
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm sm:text-base">A企業</p>
                  <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">管理員</p>
                </div>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1">
          <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur-sm dark:bg-slate-950/80 dark:border-slate-800">
            <div className="flex h-14 sm:h-16 items-center px-3 sm:px-6 justify-between">
              <div className="flex items-center gap-2 sm:gap-4">
                <SidebarTrigger className="lg:hidden h-8 w-8 sm:h-9 sm:w-9" />
                <div className="lg:hidden flex items-center gap-1 sm:gap-2 font-bold text-lg sm:text-xl text-blue-600 dark:text-blue-400">
                  <Droplets className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span>WaterWise</span>
                  <Badge
                    variant="outline"
                    className="ml-1 text-[10px] sm:text-xs bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
                  >
                    企業版
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="relative">
                  <Input placeholder="搜尋..." className="w-[160px] sm:w-[200px] lg:w-[300px] h-8 sm:h-9 pl-7 sm:pl-8 text-xs sm:text-sm" />
                  <Search className="absolute left-2 sm:left-2.5 top-2 sm:top-2.5 h-4 w-4 text-slate-500 dark:text-slate-400" />
                </div>
                <Button variant="ghost" size="icon" className="text-slate-500 dark:text-slate-400 relative h-8 w-8 sm:h-9 sm:w-9">
                  <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  <span className="sr-only">Notifications</span>
                </Button>
                <Sheet>
                  <SheetTrigger asChild>
                    <Avatar className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer lg:hidden">
                      <AvatarImage
                        src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="User"
                      />
                      <AvatarFallback className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-xs sm:text-sm">
                        A
                      </AvatarFallback>
                    </Avatar>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>企業設定</SheetTitle>
                      <SheetDescription>管理您的企業帳戶</SheetDescription>
                    </SheetHeader>
                    <div className="py-4">
                      <div className="flex items-center gap-4 mb-6">
                        <Avatar className="h-16 w-16">
                          <AvatarImage
                            src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="User"
                          />
                          <AvatarFallback className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-xl">
                            A
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold text-lg">A企業</h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400">管理員</p>
                        </div>
                      </div>
                      <nav className="space-y-1">
                        <Link
                          href="#"
                          className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <span>企業資料設定</span>
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
          <ScrollArea className="h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)]">
            <div className="container p-3 sm:p-6">
              <div className="mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-2">企業儀表板</h1>
                <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">管理您的產品水足跡與節水認證</p>
              </div>

              {/* Hero Banner */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-cyan-600/90 z-10"></div> */}
                <img
                  src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Business water management"
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Card className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">產品總數</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <div className="text-3xl font-bold">42</div>
                      <Badge
                        variant="outline"
                        className="ml-2 text-xs bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
                      >
                        +3 本週
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">已申報產品</p>
                    <div className="mt-4 h-1 bg-slate-100 dark:bg-slate-800">
                      <div className="h-1 bg-blue-600 dark:bg-blue-400" style={{ width: "70%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span className="text-slate-500 dark:text-slate-400">目標: 60</span>
                      <span className="text-blue-600 dark:text-blue-400">70%</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">節水認證</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400">16</div>
                      <Badge
                        variant="outline"
                        className="ml-2 text-xs bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800"
                      >
                        +2 本週
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">已獲認證產品</p>
                    <div className="mt-4 h-1 bg-slate-100 dark:bg-slate-800">
                      <div className="h-1 bg-green-600 dark:bg-green-400" style={{ width: "53%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span className="text-slate-500 dark:text-slate-400">目標: 30</span>
                      <span className="text-green-600 dark:text-green-400">53%</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">預估水稅</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <div className="text-3xl font-bold text-red-600 dark:text-red-400">NT$ 12,450</div>
                      <Badge
                        variant="outline"
                        className="ml-2 text-xs bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800"
                      >
                        -5% 上季
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">本季度預估</p>
                    <div className="mt-4 h-1 bg-slate-100 dark:bg-slate-800">
                      <div className="h-1 bg-red-600 dark:bg-red-400" style={{ width: "35%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span className="text-slate-500 dark:text-slate-400">目標: 降至 NT$ 10,000</span>
                      <span className="text-red-600 dark:text-red-400">35%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 mt-6 lg:grid-cols-2">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div>
                      <CardTitle>商品用水申報</CardTitle>
                      <CardDescription>最近申報的產品水足跡數據</CardDescription>
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
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>產品名稱</TableHead>
                            <TableHead>水足跡</TableHead>
                            <TableHead>同類平均</TableHead>
                            <TableHead>狀態</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">T恤 (A牌)</TableCell>
                            <TableCell>800 L</TableCell>
                            <TableCell>1200 L</TableCell>
                            <TableCell>
                              <Badge className="bg-green-600 hover:bg-green-700">低於平均</Badge>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">牛仔褲 (A牌)</TableCell>
                            <TableCell>2500 L</TableCell>
                            <TableCell>3000 L</TableCell>
                            <TableCell>
                              <Badge className="bg-green-600 hover:bg-green-700">低於平均</Badge>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">洗髮精 (A牌)</TableCell>
                            <TableCell>250 L</TableCell>
                            <TableCell>200 L</TableCell>
                            <TableCell>
                              <Badge variant="destructive">高於平均</Badge>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                      <Upload className="h-4 w-4 mr-2" />
                      申報新產品
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div>
                      <CardTitle>節水認證申請</CardTitle>
                      <CardDescription>符合條件的產品可申請節水認證</CardDescription>
                    </div>
                    <Badge className="bg-green-600">2 項可申請</Badge>
                  </CardHeader>
                  <CardContent>
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
                            <h4 className="font-medium">T恤 (A牌)</h4>
                          </div>
                          <Button variant="outline" size="sm">
                            申請認證
                          </Button>
                        </div>
                        <div className="pl-13 ml-13">
                          <div className="flex justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <span className="text-slate-500 dark:text-slate-400">水足跡:</span>
                              <span>800 L</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-slate-500 dark:text-slate-400">同類平均:</span>
                              <span>1200 L</span>
                            </div>
                          </div>
                          <div className="mt-2 bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 text-sm px-3 py-1.5 rounded-md">
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
                                <path d="m7 15 5 5 5-5"></path>
                                <path d="m7 9 5-5 5 5"></path>
                              </svg>
                              <span>節省 33%，符合認證標準</span>
                            </div>
                          </div>
                        </div>
                      </div>

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
                            <h4 className="font-medium">牛仔褲 (A牌)</h4>
                          </div>
                          <Button variant="outline" size="sm">
                            申請認證
                          </Button>
                        </div>
                        <div className="pl-13 ml-13">
                          <div className="flex justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <span className="text-slate-500 dark:text-slate-400">水足跡:</span>
                              <span>2500 L</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-slate-500 dark:text-slate-400">同類平均:</span>
                              <span>3000 L</span>
                            </div>
                          </div>
                          <div className="mt-2 bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 text-sm px-3 py-1.5 rounded-md">
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
                                <path d="m7 15 5 5 5-5"></path>
                                <path d="m7 9 5-5 5 5"></path>
                              </svg>
                              <span>節省 17%，符合認證標準</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                      查看全部可申請產品
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </ScrollArea>
        </main>
      </div>
    </SidebarProvider>
  )
}
