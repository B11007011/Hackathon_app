"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Barcode, Bell, Droplet, Home, LogOut, Search, Settings, Check } from "lucide-react"
import QRScanner from "./qr-scanner"

export default function ConsumerPage() {
  const router = useRouter()
  const [showWaterCreditSuccess, setShowWaterCreditSuccess] = useState(false)
  const [showQRScanner, setShowQRScanner] = useState(false)
  const [lastScannedData, setLastScannedData] = useState<string | null>(null)
  const [showScannedSuccess, setShowScannedSuccess] = useState(false)

  const handleWaterCreditClick = () => {
    setShowWaterCreditSuccess(true)
  }

  const handleSignOut = () => {
    router.push("/")
  }

  const handleScanSuccess = (data: string) => {
    setLastScannedData(data)
    setShowQRScanner(false)
    setShowScannedSuccess(true)

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowScannedSuccess(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-teal-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Droplet className="h-6 w-6" />
            <h1 className="text-xl font-bold">WaterWise</h1>
          </div>
          <div className="flex items-center gap-4">
            <Bell className="h-5 w-5 cursor-pointer" />
            <Button variant="ghost" size="icon" onClick={handleSignOut} className="text-white hover:bg-teal-600">
              <LogOut className="h-5 w-5" />
            </Button>
            <div className="h-8 w-8 rounded-full bg-white/20"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {showScannedSuccess && (
          <div className="mb-4 bg-green-100 border border-green-200 text-green-800 rounded-md p-4 flex items-center">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <div>
              <p className="font-medium">掃描成功!</p>
              <p className="text-sm text-green-600">已新增水足跡積分 +150L</p>
            </div>
          </div>
        )}

        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">載具積分總覽</CardTitle>
            <CardDescription>您的水足跡積分與發票紀錄</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <div className="relative w-48 h-48 mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="block text-3xl font-bold text-teal-600">12,540L</span>
                      <span className="text-sm text-gray-500">累積水足跡</span>
                    </div>
                  </div>
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e6e6e6" strokeWidth="5" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#14b8a6"
                      strokeWidth="5"
                      strokeDasharray="283"
                      strokeDashoffset="70"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-500">可折抵水費</p>
                  <p className="text-xl font-bold">NT$125</p>
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleWaterCreditClick} className="bg-teal-500 hover:bg-teal-600">
                    WaterCredit 折抵水費
                  </Button>
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <h3 className="font-medium mb-3">最近發票</h3>
                <div className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <Card key={item} className="overflow-hidden">
                      <CardContent className="p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">發票號碼: AB-{Math.floor(Math.random() * 10000000)}</p>
                            <p className="text-sm text-gray-500">2023/10/{10 + item}</p>
                            <div className="mt-2 space-y-1">
                              <p className="text-sm">
                                有機蔬菜 <span className="text-teal-600">+120L</span>
                              </p>
                              <p className="text-sm">
                                環保洗衣精 <span className="text-teal-600">+85L</span>
                              </p>
                              <p className="text-sm">
                                再生紙巾 <span className="text-teal-600">+45L</span>
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-teal-600">+250L</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline" className="text-teal-600">
                    查看更多發票 <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">本月節水成果</CardTitle>
            <CardDescription>2023年10月</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-500">已節省水量</span>
                  <span className="font-medium">1,530 公升</span>
                </div>
                <Progress value={62} className="h-2" />
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">目標: 2,000 公升</span>
                  <span className="text-xs text-gray-500">62%</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-500">累積點數</span>
                  <div className="flex items-center">
                    <span className="font-medium text-blue-600">153</span>
                    <span className="text-xs text-gray-500 ml-1">WaterPoints</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  兌換獎勵
                </Button>
              </div>

              <div className="pt-4">
                <h3 className="font-medium mb-3">水足跡使用趨勢</h3>
                <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center">
                  <div className="w-full h-full p-4">
                    <div className="relative h-full">
                      {/* Simple chart representation */}
                      <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                        <div className="w-1/6 h-[60%] bg-teal-300 mx-1 rounded-t-sm"></div>
                        <div className="w-1/6 h-[75%] bg-teal-400 mx-1 rounded-t-sm"></div>
                        <div className="w-1/6 h-[65%] bg-teal-500 mx-1 rounded-t-sm"></div>
                        <div className="w-1/6 h-[80%] bg-teal-400 mx-1 rounded-t-sm"></div>
                        <div className="w-1/6 h-[70%] bg-teal-300 mx-1 rounded-t-sm"></div>
                        <div className="w-1/6 h-[55%] bg-teal-500 mx-1 rounded-t-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5月</span>
                  <span>6月</span>
                  <span>7月</span>
                  <span>8月</span>
                  <span>9月</span>
                  <span>10月</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2">
        <div className="container mx-auto flex justify-around">
          <button className="flex flex-col items-center p-2 text-teal-600">
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">首頁</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-500" onClick={() => setShowQRScanner(true)}>
            <Barcode className="h-6 w-6" />
            <span className="text-xs mt-1">掃描發票</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-500">
            <Search className="h-6 w-6" />
            <span className="text-xs mt-1">查詢</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-500">
            <Settings className="h-6 w-6" />
            <span className="text-xs mt-1">設定</span>
          </button>
        </div>
      </div>

      {/* Water Credit Success Modal */}
      {showWaterCreditSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-[90%] max-w-md">
            <CardHeader className="bg-teal-500 text-white">
              <CardTitle className="text-center">台灣自來水公司</CardTitle>
              <CardDescription className="text-white text-center">TAIWAN WATER CORPORATION</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 pb-4">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <Droplet className="h-8 w-8 text-green-500" />
                </div>
              </div>
              <p className="text-center text-lg font-medium mb-2">成功將水足跡折抵應繳水費！</p>
              <p className="text-center text-gray-500">您已使用 10,000L 水足跡積分折抵 NT$100 水費</p>
            </CardContent>
            <div className="flex justify-center pb-6">
              <Button onClick={() => setShowWaterCreditSuccess(false)}>返回</Button>
            </div>
          </Card>
        </div>
      )}

      {/* QR Scanner Modal */}
      {showQRScanner && <QRScanner onClose={() => setShowQRScanner(false)} onScanSuccess={handleScanSuccess} />}
    </div>
  )
}
