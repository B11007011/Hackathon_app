import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WaterWise - 水足跡載具系統',
  description: '追蹤您的消費水足跡，獲取環保獎勵',
  generator: 'v0.dev',
  viewport: 'width=device-width, initial-scale=0.5, viewport-fit=cover, maximum-scale=0.8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  )
}
