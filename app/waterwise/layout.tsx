"use client"

import { Toaster } from "sonner";
import Link from "next/link";
import { Droplets } from "lucide-react";

export default function WaterWiseLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="h-full">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex-shrink-0 pt-safe">
        <div className="container flex h-14 items-center px-4">
          <Link href="/" className="flex items-center gap-1 sm:gap-3 font-bold text-lg sm:text-xl text-blue-600 dark:text-blue-400">
            <Droplets className="h-5 w-5 sm:h-6 sm:w-6" />
            <span>WaterWise</span>
          </Link>
        </div>
      </header>
      {children}
      <Toaster position="top-center" />
    </div>
  )
} 