import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplet } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-teal-500">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Droplet className="h-8 w-8 text-white" />
            <h1 className="text-2xl font-bold text-white">WaterWise 水足跡積分系統</h1>
          </div>
          <div className="flex gap-2">
            <Link href="/about">
              <Button variant="outline" className="bg-white hover:bg-gray-100">
                關於我們
              </Button>
            </Link>
            <Link href="/faq">
              <Button variant="outline" className="bg-white hover:bg-gray-100">
                常見問題
              </Button>
            </Link>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Link href="/consumer" className="no-underline">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>消費者介面</CardTitle>
                <CardDescription>追蹤您的消費水足跡，獲取環保獎勵</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <Droplet className="h-24 w-24 text-cyan-500" />
                </div>
                <p className="mt-4 text-center">查看您的水足跡積分，掃描發票並兌換水費折扣</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">進入消費者介面</Button>
              </CardFooter>
            </Card>
          </Link>

          <Link href="/company" className="no-underline">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>企業介面</CardTitle>
                <CardDescription>監控產品製造用水量，提升水資源效率</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <Droplet className="h-24 w-24 text-blue-500" />
                </div>
                <p className="mt-4 text-center">分析產品線用水趨勢，比較月度用水量變化</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">進入企業介面</Button>
              </CardFooter>
            </Card>
          </Link>

          <Link href="/government" className="no-underline">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>政府介面</CardTitle>
                <CardDescription>監測全國水資源使用情況，分析產業用水</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <Droplet className="h-24 w-24 text-teal-500" />
                </div>
                <p className="mt-4 text-center">查看企業用水數據，分析產品類別平均用水量</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">進入政府介面</Button>
              </CardFooter>
            </Card>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <div className="flex justify-center gap-4">
            <Link href="/about">
              <Button variant="outline" className="bg-white hover:bg-gray-100">
                關於我們
              </Button>
            </Link>
            <Link href="/faq">
              <Button variant="outline" className="bg-white hover:bg-gray-100">
                常見問題
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
