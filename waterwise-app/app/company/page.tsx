"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowDown, ArrowUp, BarChart3, Droplet, FileUp, Home, LogOut, Menu, Settings } from "lucide-react"

export default function CompanyPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("dashboard")

  const handleSignOut = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Droplet className="h-6 w-6" />
            <h1 className="text-xl font-bold">WaterWise 企業版</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">台灣積體電路製造股份有限公司 (TSMC)</span>
            <Button variant="ghost" size="icon" onClick={handleSignOut} className="text-white hover:bg-blue-700">
              <LogOut className="h-5 w-5" />
            </Button>
            <Menu className="h-5 w-5 cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 bg-white border-r border-gray-200 p-4">
          <nav className="space-y-2">
            <Button
              variant={activeTab === "dashboard" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("dashboard")}
            >
              <Home className="mr-2 h-5 w-5" />
              儀表板
            </Button>
            <Button
              variant={activeTab === "reports" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("reports")}
            >
              <BarChart3 className="mr-2 h-5 w-5" />
              用水報告
            </Button>
            <Button
              variant={activeTab === "upload" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("upload")}
            >
              <FileUp className="mr-2 h-5 w-5" />
              上傳數據
            </Button>
            <Button
              variant={activeTab === "settings" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("settings")}
            >
              <Settings className="mr-2 h-5 w-5" />
              設定
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
              onClick={handleSignOut}
            >
              <LogOut className="mr-2 h-5 w-5" />
              登出
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">企業用水儀表板</h2>
            <div className="flex items-center gap-4">
              <span className="text-gray-500">本月總用水：</span>
              <span className="text-xl font-bold text-blue-600">290,000,000L</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-500">產品線數量：</span>
              <span className="text-xl font-bold">5 條</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">本月用水量</CardTitle>
                <CardDescription>與上月相比</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold">58,900L</span>
                  <div className="flex items-center text-red-500 text-sm">
                    <ArrowUp className="h-4 w-4" />
                    <span>5.2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">平均單位用水</CardTitle>
                <CardDescription>每產品用水量</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold">10.8L</span>
                  <div className="flex items-center text-green-500 text-sm">
                    <ArrowDown className="h-4 w-4" />
                    <span>2.1%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">水資源效率</CardTitle>
                <CardDescription>產出/用水比率</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold">97%</span>
                  <div className="flex items-center text-green-500 text-sm">
                    <ArrowUp className="h-4 w-4" />
                    <span>3.5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-lg">產品線用水摘要</CardTitle>
                    <CardDescription>本月各產品線用水量</CardDescription>
                  </div>
                  <Select defaultValue="month">
                    <SelectTrigger className="w-36">
                      <SelectValue placeholder="選擇時間" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">本週</SelectItem>
                      <SelectItem value="month">本月</SelectItem>
                      <SelectItem value="quarter">本季</SelectItem>
                      <SelectItem value="year">本年</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>晶圓製造 A</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">120,000,000L</span>
                        <span className="text-xs text-green-500">↓5%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                    <div className="flex justify-between mt-1 text-xs text-gray-500">
                      <span>5,000瓶</span>
                      <span>0.62L/瓶</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span>封裝測試 B</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">85,000,000L</span>
                        <span className="text-xs text-red-500">↑8%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: "48%" }}></div>
                    </div>
                    <div className="flex justify-between mt-1 text-xs text-gray-500">
                      <span>1,000件</span>
                      <span>28L/件</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span>記憶體 C</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">45,000,000L</span>
                        <span className="text-xs text-green-500">↓2%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: "21%" }}></div>
                    </div>
                    <div className="flex justify-between mt-1 text-xs text-gray-500">
                      <span>8,000瓶</span>
                      <span>1.56L/瓶</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span>邏輯晶片 D</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">25,000,000L</span>
                        <span className="text-xs text-red-500">↑3%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: "17%" }}></div>
                    </div>
                    <div className="flex justify-between mt-1 text-xs text-gray-500">
                      <span>200台</span>
                      <span>49L/台</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span>類比晶片 E</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">15,000,000L</span>
                        <span className="text-xs text-green-500">↓7%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: "9%" }}></div>
                    </div>
                    <div className="flex justify-between mt-1 text-xs text-gray-500">
                      <span>10,000包</span>
                      <span>0.55L/包</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-lg">用水趨勢</CardTitle>
                    <CardDescription>過去6個月用水量比較</CardDescription>
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-36">
                      <SelectValue placeholder="選擇產品" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">全部產品</SelectItem>
                      <SelectItem value="shampoo">洗髮精 A</SelectItem>
                      <SelectItem value="tshirt">T恤 B</SelectItem>
                      <SelectItem value="skincare">保養品 C</SelectItem>
                      <SelectItem value="appliance">家電 D</SelectItem>
                      <SelectItem value="food">食品 E</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-white rounded-md flex items-end justify-between px-2">
                  {[65, 58, 70, 62, 55, 59].map((value, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-12 bg-blue-500 rounded-t-sm" style={{ height: `${value}%` }}></div>
                      <span className="text-xs text-gray-500 mt-1">{5 - index}月前</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">本月與上月用水比較</CardTitle>
              <CardDescription>按產品線分析</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">產品線</th>
                      <th className="text-right py-3 px-4">本月用水 (L)</th>
                      <th className="text-right py-3 px-4">上月用水 (L)</th>
                      <th className="text-right py-3 px-4">變化</th>
                      <th className="text-right py-3 px-4">月產量</th>
                      <th className="text-right py-3 px-4">單位用水 (L)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4">洗髮精 A</td>
                      <td className="text-right py-3 px-4">3,100</td>
                      <td className="text-right py-3 px-4">3,260</td>
                      <td className="text-right py-3 px-4 text-green-500">-5%</td>
                      <td className="text-right py-3 px-4">5,000瓶</td>
                      <td className="text-right py-3 px-4">0.62</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">T恤 B</td>
                      <td className="text-right py-3 px-4">28,000</td>
                      <td className="text-right py-3 px-4">25,900</td>
                      <td className="text-right py-3 px-4 text-red-500">+8%</td>
                      <td className="text-right py-3 px-4">1,000件</td>
                      <td className="text-right py-3 px-4">28.00</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">保養品 C</td>
                      <td className="text-right py-3 px-4">12,500</td>
                      <td className="text-right py-3 px-4">12,750</td>
                      <td className="text-right py-3 px-4 text-green-500">-2%</td>
                      <td className="text-right py-3 px-4">8,000瓶</td>
                      <td className="text-right py-3 px-4">1.56</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">家電 D</td>
                      <td className="text-right py-3 px-4">9,800</td>
                      <td className="text-right py-3 px-4">9,500</td>
                      <td className="text-right py-3 px-4 text-red-500">+3%</td>
                      <td className="text-right py-3 px-4">200台</td>
                      <td className="text-right py-3 px-4">49.00</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">食品 E</td>
                      <td className="text-right py-3 px-4">5,500</td>
                      <td className="text-right py-3 px-4">5,900</td>
                      <td className="text-right py-3 px-4 text-green-500">-7%</td>
                      <td className="text-right py-3 px-4">10,000包</td>
                      <td className="text-right py-3 px-4">0.55</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 font-bold">總計</td>
                      <td className="text-right py-3 px-4 font-bold">58,900</td>
                      <td className="text-right py-3 px-4 font-bold">57,310</td>
                      <td className="text-right py-3 px-4 font-bold text-red-500">+2.8%</td>
                      <td className="text-right py-3 px-4">-</td>
                      <td className="text-right py-3 px-4">-</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">節水智能建議</CardTitle>
              <CardDescription>AI 分析的節水機會</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-4">
                <div className="flex items-start gap-3">
                  <Droplet className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-800">
                      若導入三階段A/O MBR系統，可提高晶圓製造製程回收率至97%，每年可節省NT$1,350,000
                    </p>
                    <p className="text-sm text-blue-600 mt-1">建議調整第三階段沖洗程序，可減少用水並維持產品品質。</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-md p-4">
                <div className="flex items-start gap-3">
                  <Droplet className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-800">
                      使用市政污水處理廠再生水可節省每立方公尺NT$6.6，並提高缺水期間供水穩定性
                    </p>
                    <p className="text-sm text-green-600 mt-1">
                      建議與永康再生水廠簽訂供水契約，每日可獲得15,500立方公尺高品質再生水。
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>

      {/* Mobile bottom navigation for smaller screens */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2">
        <div className="container mx-auto flex justify-around">
          <button
            className={`flex flex-col items-center p-2 ${activeTab === "dashboard" ? "text-blue-600" : "text-gray-500"}`}
            onClick={() => setActiveTab("dashboard")}
          >
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">儀表板</span>
          </button>
          <button
            className={`flex flex-col items-center p-2 ${activeTab === "reports" ? "text-blue-600" : "text-gray-500"}`}
            onClick={() => setActiveTab("reports")}
          >
            <BarChart3 className="h-6 w-6" />
            <span className="text-xs mt-1">報告</span>
          </button>
          <button
            className={`flex flex-col items-center p-2 ${activeTab === "upload" ? "text-blue-600" : "text-gray-500"}`}
            onClick={() => setActiveTab("upload")}
          >
            <FileUp className="h-6 w-6" />
            <span className="text-xs mt-1">上傳</span>
          </button>
          <button
            className={`flex flex-col items-center p-2 ${activeTab === "settings" ? "text-blue-600" : "text-gray-500"}`}
            onClick={() => setActiveTab("settings")}
          >
            <Settings className="h-6 w-6" />
            <span className="text-xs mt-1">設定</span>
          </button>
        </div>
      </div>
    </div>
  )
}
