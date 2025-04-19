import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import WaterUsageAnalytics from "./WaterUsageAnalytics";
import WaterSavingTips from "./WaterSavingTips";
import WaterSavingProducts from "./WaterSavingProducts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Droplets, 
  Award, 
  ChevronRight,
  Info, 
  TrendingUp, 
  Scan, 
  ShoppingBag,
  Settings,
  Home
} from "lucide-react";
import QRCodeScanner from "./QRCodeScanner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";
import Link from "next/link";

// Import the types
import type { WaterUsageStat } from "./WaterUsageAnalytics";
import type { Tip } from "./WaterSavingTips";
import type { Product } from "./WaterSavingProducts";

// Sample data with proper typing
const mockWaterUsage = {
  currentUsage: 820,
  target: 1000,
  targetPercentage: 82,
  totalSaved: 1240,
  waterPoints: 132,
  weeklyStats: [
    { title: "日均用水量", value: "120 公升", change: 8, changeType: "decrease" as const, period: "上週" },
    { title: "總用水量", value: "820 公升", change: 5, changeType: "decrease" as const, period: "上週" },
  ],
  monthlyStats: [
    { title: "月均用水量", value: "3,850 公升", change: 12, changeType: "decrease" as const, period: "上月" },
    { title: "總用水量", value: "3,850 公升", change: 8, changeType: "decrease" as const, period: "上月" },
  ]
};

const mockTips: Tip[] = [
  {
    id: 1,
    title: "使用節水型淋浴頭",
    description: "換裝節水型淋浴頭可以減少40-50%的用水量，同時保持良好的水流感受。",
    icon: "home" as const,
    category: "居家節水",
    waterSaving: "每年最多省下 14,000 公升",
    liked: true
  },
  {
    id: 2,
    title: "選購有WaterSense標章的產品",
    description: "購買有節水標章的產品可以顯著減少日常用水量。",
    icon: "shopping" as const,
    category: "綠色消費",
    waterSaving: "每年最多省下 10,000 公升",
    liked: false
  },
  {
    id: 3,
    title: "收集雨水用於植物澆灌",
    description: "收集雨水用於花園澆灌，可以大幅減少自來水使用。",
    icon: "water" as const,
    category: "花園節水",
    waterSaving: "每年最多省下 4,500 公升",
    liked: false
  },
  {
    id: 4,
    title: "使用環保洗衣模式",
    description: "選擇洗衣機的環保模式可以節省用水及電力。",
    icon: "lightbulb" as const,
    category: "智慧節水",
    waterSaving: "每年最多省下 5,200 公升",
    liked: false
  }
];

const mockProducts: Product[] = [
  {
    id: 1,
    name: "節水型淋浴頭套裝",
    description: "高效能霧狀出水，節省50%用水量，安裝簡易。",
    imageUrl: "https://images.pexels.com/photos/105003/pexels-photo-105003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 499,
    originalPrice: 699,
    rating: 4.8,
    reviews: 128,
    waterSaving: "50%",
    category: "浴室用品",
    points: 10
  },
  {
    id: 2,
    name: "智能省水龍頭",
    description: "紅外線感應，自動停水，節省30%水量。",
    imageUrl: "https://images.pexels.com/photos/6794958/pexels-photo-6794958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 899,
    originalPrice: 1299,
    rating: 4.5,
    reviews: 84,
    waterSaving: "30%",
    category: "廚房用品",
    points: 15
  },
  {
    id: 3,
    name: "雨水收集系統",
    description: "家用雨水收集桶，可儲存200公升雨水用於花園灌溉。",
    imageUrl: "https://images.pexels.com/photos/2409022/pexels-photo-2409022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 1299,
    rating: 4.7,
    reviews: 56,
    waterSaving: "200L",
    category: "花園用品",
    points: 25
  },
  {
    id: 4,
    name: "節水型馬桶",
    description: "雙沖水設計，每次沖水僅3公升，比傳統馬桶節省60%用水量。",
    imageUrl: "https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 2499,
    originalPrice: 2999,
    rating: 4.9,
    reviews: 63,
    waterSaving: "60%",
    category: "浴室用品",
    points: 30
  }
];

export default function WaterWiseDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [likedTips, setLikedTips] = useState<number[]>([1]); // Tip ID 1 is liked by default
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [scannerOpen, setScannerOpen] = useState(false);
  const [scanResultDialogOpen, setScanResultDialogOpen] = useState(false);
  const [waterPointsEarned, setWaterPointsEarned] = useState(0);
  
  const handleLikeTip = (id: number) => {
    setLikedTips(prev => 
      prev.includes(id) ? prev.filter(tipId => tipId !== id) : [...prev, id]
    );
  };
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const handleScan = (result: string) => {
    setScanResult(result);
    setScannerOpen(false);
    
    // Calculate random water points earned (3-10)
    const pointsEarned = Math.floor(Math.random() * 8) + 3;
    setWaterPointsEarned(pointsEarned);
    
    // Show success toast
    toast.success("載具掃描成功！", {
      description: `載具ID: ${result}`,
      position: "top-center",
    });
    
    // Open result dialog
    setTimeout(() => {
      setScanResultDialogOpen(true);
    }, 500);
  };

  const handleClaimPoints = () => {
    // Update water points
    mockWaterUsage.waterPoints += waterPointsEarned;
    
    // Close dialog
    setScanResultDialogOpen(false);
    
    // Show success toast
    toast.success("獎勵點數已領取！", {
      description: `您獲得了 ${waterPointsEarned} 點水足跡點數`,
      position: "top-center",
    });
  };

  const tipsWithLikeStatus = mockTips.map(tip => ({
    ...tip,
    liked: likedTips.includes(tip.id)
  }));

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-6 pt-4">
            <WaterUsageAnalytics waterUsage={mockWaterUsage} />
            <WaterSavingTips 
              tips={tipsWithLikeStatus} 
              onLikeTip={handleLikeTip}
            />
            <WaterSavingProducts products={mockProducts} />
          </div>
        );
      case "receipts":
        return (
          <div className="h-60 flex items-center justify-center pt-4">
            <p className="text-slate-500">載具清單內容將在此顯示</p>
          </div>
        );
      case "scan":
        return (
          <div className="flex flex-col items-center justify-center py-8 gap-4 pt-4">
            {scannerOpen ? (
              <QRCodeScanner onScan={handleScan} onClose={() => setScannerOpen(false)} />
            ) : (
              <>
                <div className="w-64 h-64 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg flex items-center justify-center">
                  <Scan className="h-16 w-16 text-slate-300 dark:text-slate-700" />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setScannerOpen(true)}>
                  掃描水足跡載具QR碼
                </Button>
                <p className="text-xs text-slate-500 mt-2 text-center max-w-xs">
                  掃描您的電子發票或購物收據QR碼，記錄消費水足跡並獲得環保點數
                </p>
              </>
            )}
          </div>
        );
      case "shop":
        return (
          <div className="pt-4">
            <WaterSavingProducts products={mockProducts} />
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="flex flex-col h-full w-full bg-background">
      <main className="flex-1 overflow-hidden relative pt-4">
        <ScrollArea className="h-full w-full hide-scrollbar">
          <div className="container px-3 sm:px-4 py-3 sm:py-4 pb-20">
            <div className="mb-4">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">水足跡載具系統</h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">追蹤您的消費水足跡，獲取環保獎勵</p>
            </div>

            <div className="grid gap-4">
              {/* Water Points Summary Card */}
              <Card className="border-blue-100 dark:border-blue-900">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm sm:text-base flex items-center">
                    <Award className="h-4 w-4 mr-2 text-blue-500" />
                    我的水足跡點數
                  </CardTitle>
                  <CardDescription className="text-xs">獲取節水獎勵</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-2xl sm:text-3xl text-blue-600 dark:text-blue-400">
                        {mockWaterUsage.waterPoints} <span className="text-xs sm:text-sm font-normal">WaterPoints</span>
                      </p>
                      <div className="flex items-center text-xs text-green-500 mt-1">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        <span>較上月增加15點</span>
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 h-9 text-xs sm:text-sm">
                      兌換獎勵
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Main Content */}
              {renderContent()}
            </div>
          </div>
        </ScrollArea>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 inset-x-0 z-40 h-16 pb-safe bg-background border-t flex flex-shrink-0">
        <div className="grid grid-cols-5 w-full h-full">
          <Link 
            href="/"
            className="flex flex-col items-center justify-center text-slate-500"
          >
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1">首頁</span>
          </Link>
          <button 
            className={`flex flex-col items-center justify-center ${activeTab === "dashboard" ? "text-blue-600" : "text-slate-500"}`}
            onClick={() => handleTabChange("dashboard")}
          >
            <Droplets className="h-5 w-5" />
            <span className="text-xs mt-1">儀表板</span>
          </button>
          <button 
            className={`flex flex-col items-center justify-center ${activeTab === "receipts" ? "text-blue-600" : "text-slate-500"}`}
            onClick={() => handleTabChange("receipts")}
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="text-xs mt-1">載具</span>
          </button>
          <button 
            className={`flex flex-col items-center justify-center ${activeTab === "scan" ? "text-blue-600" : "text-slate-500"}`}
            onClick={() => handleTabChange("scan")}
          >
            <Scan className="h-5 w-5" />
            <span className="text-xs mt-1">掃描</span>
          </button>
          <button 
            className={`flex flex-col items-center justify-center ${activeTab === "shop" ? "text-blue-600" : "text-slate-500"}`}
            onClick={() => handleTabChange("shop")}
          >
            <Award className="h-5 w-5" />
            <span className="text-xs mt-1">商城</span>
          </button>
        </div>
      </nav>

      {/* Scan Result Dialog */}
      <Dialog open={scanResultDialogOpen} onOpenChange={setScanResultDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>掃描結果</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4 mb-4">
              <h3 className="font-medium mb-2">載具資訊</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-slate-500 dark:text-slate-400">載具ID:</div>
                <div className="font-medium">{scanResult}</div>
                <div className="text-slate-500 dark:text-slate-400">購物日期:</div>
                <div className="font-medium">{new Date().toLocaleDateString()}</div>
                <div className="text-slate-500 dark:text-slate-400">商品數量:</div>
                <div className="font-medium">{Math.floor(Math.random() * 10) + 1}件</div>
                <div className="text-slate-500 dark:text-slate-400">水足跡總量:</div>
                <div className="font-medium">{Math.floor(Math.random() * 500) + 100}公升</div>
              </div>
            </div>

            <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4 text-center">
              <h3 className="font-medium mb-2">您獲得了環保獎勵</h3>
              <div className="font-bold text-2xl text-green-600 dark:text-green-400 mb-1">
                +{waterPointsEarned} <span className="text-sm font-normal">WaterPoints</span>
              </div>
              <p className="text-xs text-slate-500">感謝您的環保消費選擇！</p>
            </div>
          </div>
          <DialogFooter>
            <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleClaimPoints}>
              領取獎勵點數
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 