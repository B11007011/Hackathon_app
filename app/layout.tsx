import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WaterWise - 水足跡載具系統',
  description: '追蹤您的消費水足跡，獲取環保獎勵',
  generator: 'v0.dev',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body>{children}</body>
    </html>
  )
}
