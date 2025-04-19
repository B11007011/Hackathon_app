"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Droplet } from "lucide-react"

export default function SignInPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false)

      // Determine which dashboard to redirect to based on email domain
      if (email.endsWith("@gov.tw")) {
        router.push("/government")
      } else if (email.endsWith("@company.com")) {
        router.push("/company")
      } else {
        router.push("/consumer")
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-2">
            <Droplet className="h-12 w-12 text-teal-500" />
          </div>
          <CardTitle className="text-2xl">WaterWise 水足跡積分系統</CardTitle>
          <CardDescription>請輸入您的帳號密碼登入系統</CardDescription>
        </CardHeader>
        <form onSubmit={handleSignIn}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">電子郵件</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">
                提示: 使用 @gov.tw 結尾的信箱登入政府介面，@company.com 結尾登入企業介面，其他信箱登入消費者介面
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">密碼</Label>
                <Link href="#" className="text-xs text-teal-500 hover:underline">
                  忘記密碼?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "登入中..." : "登入"}
            </Button>
            <div className="text-center text-sm">
              還沒有帳號?{" "}
              <Link href="#" className="text-teal-500 hover:underline">
                立即註冊
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
