"use client"

import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scan, X, Camera, Upload, AlertTriangle } from "lucide-react";

interface QRCodeScannerProps {
  onScan: (result: string) => void;
  onClose: () => void;
}

export default function QRCodeScanner({ onScan, onClose }: QRCodeScannerProps) {
  const [cameraActive, setCameraActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);

  // In a real implementation, this would use a proper QR scanner library like 'react-qr-scanner'
  // This is a mock implementation for demonstration purposes
  const handleStartScan = () => {
    setCameraActive(true);
    setScanning(true);
    setError(null);

    // Simulate QR code scanning after a delay
    setTimeout(() => {
      // Mock result: a water footprint carrier ID
      const mockResult = "WF-" + Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
      handleScanComplete(mockResult);
    }, 3000);
  };

  const handleScanComplete = (result: string) => {
    setScanning(false);
    onScan(result);
  };

  const handleUploadQRCode = () => {
    // This would open a file picker in a real implementation
    // Here we just simulate a successful scan
    setError(null);
    
    setTimeout(() => {
      const mockResult = "WF-" + Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
      handleScanComplete(mockResult);
    }, 1000);
  };

  const handleError = (err: string) => {
    setError(err);
    setCameraActive(false);
    setScanning(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">掃描水足跡載具</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex flex-col items-center">
          <div 
            className={`w-64 h-64 border-2 ${scanning ? 'border-blue-500 animate-pulse' : 'border-dashed border-slate-300 dark:border-slate-700'} rounded-lg flex items-center justify-center mb-4 overflow-hidden relative`}
          >
            {error ? (
              <div className="flex flex-col items-center text-red-500">
                <AlertTriangle className="h-12 w-12 mb-2" />
                <p className="text-sm text-center px-4">{error}</p>
              </div>
            ) : cameraActive ? (
              <div className="w-full h-full bg-black flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* This would be a camera feed in a real implementation */}
                  <div className="absolute inset-0 bg-black opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 border-2 border-blue-500 rounded-lg">
                      <div className="w-full h-full relative">
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500"></div>
                      </div>
                    </div>
                  </div>
                  {scanning && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-full h-px bg-blue-500 animate-scan"></div>
                      <p className="text-white text-xs mt-2">掃描中...</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Scan className="h-16 w-16 text-slate-300 dark:text-slate-700" />
            )}
          </div>

          {error && (
            <p className="text-sm text-red-500 mb-4">
              掃描錯誤，請再試一次
            </p>
          )}

          <div className="flex gap-4 w-full max-w-xs">
            {!cameraActive ? (
              <>
                <Button 
                  className="flex-1 bg-blue-600 hover:bg-blue-700" 
                  onClick={handleStartScan}
                >
                  <Camera className="h-4 w-4 mr-2" />
                  掃描QR碼
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1" 
                  onClick={handleUploadQRCode}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  上傳圖片
                </Button>
              </>
            ) : (
              <Button 
                variant="destructive" 
                className="flex-1" 
                onClick={() => setCameraActive(false)}
                disabled={scanning}
              >
                <X className="h-4 w-4 mr-2" />
                取消掃描
              </Button>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-slate-50 dark:bg-slate-900 px-6 py-4 text-xs text-slate-500">
        <p>將QR碼置於掃描框內即可自動識別。成功識別後，您將獲得相關水足跡數據及環保點數獎勵。</p>
      </CardFooter>
    </Card>
  );
} 