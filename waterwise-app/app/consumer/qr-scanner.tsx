"use client"

import { useState, useRef, useEffect } from "react"
import Webcam from "react-webcam"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, X, Camera, Check } from "lucide-react"

interface QRScannerProps {
  onClose: () => void
  onScanSuccess: (data: string) => void
}

export default function QRScanner({ onClose, onScanSuccess }: QRScannerProps) {
  const webcamRef = useRef<Webcam>(null)
  const [isScanning, setIsScanning] = useState(true)
  const [scannedData, setScannedData] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Simulate QR code scanning after a delay
  useEffect(() => {
    if (isScanning) {
      const timer = setTimeout(() => {
        // Generate a random receipt ID to simulate scanning
        const receiptId = `RECEIPT-${Math.floor(Math.random() * 1000000)}`
        setScannedData(receiptId)
        setIsScanning(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isScanning])

  const handleConfirm = () => {
    if (scannedData) {
      onScanSuccess(scannedData)
    }
  }

  const handleRetry = () => {
    setScannedData(null)
    setIsScanning(true)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>掃描 QR Code</CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <CardDescription>{scannedData ? "已掃描到 QR Code" : "請將 QR Code 對準相機"}</CardDescription>
        </CardHeader>
        <CardContent>
          {error ? (
            <div className="bg-red-50 text-red-500 p-4 rounded-md text-center">{error}</div>
          ) : scannedData ? (
            <div className="bg-green-50 border border-green-200 rounded-md p-4 text-center">
              <Check className="h-12 w-12 text-green-500 mx-auto mb-2" />
              <p className="text-green-800 font-medium">掃描成功!</p>
              <p className="text-sm text-green-600 mt-2 break-all">{scannedData}</p>
            </div>
          ) : (
            <div className="relative aspect-square overflow-hidden rounded-md bg-black">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={{
                  facingMode: "environment",
                }}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-2 border-white/50 rounded-md"></div>
              {isScanning && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 border-2 border-teal-500 rounded-md"></div>
                </div>
              )}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {scannedData ? (
            <>
              <Button variant="outline" onClick={handleRetry}>
                重新掃描
              </Button>
              <Button onClick={handleConfirm}>確認</Button>
            </>
          ) : (
            <Button className="w-full flex items-center gap-2" disabled={!isScanning}>
              {isScanning ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  正在掃描...
                </>
              ) : (
                <>
                  <Camera className="h-4 w-4" />
                  開始掃描
                </>
              )}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
