import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb,
  Droplets,
  Home,
  ShoppingBag,
  ArrowRight,
  ThumbsUp
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export interface Tip {
  id: number;
  title: string;
  description: string;
  icon: "home" | "shopping" | "water" | "lightbulb";
  category: string;
  waterSaving: string;
  liked: boolean;
}

interface WaterSavingTipsProps {
  className?: string;
  tips: Tip[];
  onLikeTip?: (id: number) => void;
}

export default function WaterSavingTips({ className, tips, onLikeTip }: WaterSavingTipsProps) {
  const renderIcon = (icon: string) => {
    switch (icon) {
      case "home":
        return <Home className="h-5 w-5 text-blue-500" />;
      case "shopping":
        return <ShoppingBag className="h-5 w-5 text-green-500" />;
      case "water":
        return <Droplets className="h-5 w-5 text-blue-500" />;
      case "lightbulb":
      default:
        return <Lightbulb className="h-5 w-5 text-amber-500" />;
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-bold">節水小貼士</h2>
        <Button variant="ghost" size="sm" className="text-xs">
          查看全部 <ArrowRight className="ml-1 h-3 w-3" />
        </Button>
      </div>

      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {tips.map((tip) => (
            <CarouselItem key={tip.id} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3">
              <Card className="h-full border-slate-200 dark:border-slate-800">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-2">
                      {renderIcon(tip.icon)}
                    </div>
                    <Badge variant="outline" className="h-6 text-xs">
                      {tip.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-sm sm:text-base">{tip.title}</CardTitle>
                  <CardDescription className="text-xs">{tip.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-md text-center">
                    <p className="text-xs text-slate-500 dark:text-slate-400">可節省約</p>
                    <p className="font-semibold text-blue-600 dark:text-blue-400">{tip.waterSaving}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-0">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={`text-xs px-2 ${tip.liked ? 'text-blue-600' : ''}`}
                    onClick={() => onLikeTip && onLikeTip(tip.id)}
                  >
                    <ThumbsUp className={`h-4 w-4 mr-1 ${tip.liked ? 'fill-current text-blue-600' : ''}`} />
                    {tip.liked ? '已收藏' : '收藏'}
                  </Button>
                  <Button variant="link" size="sm" className="text-xs h-7">
                    了解更多
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-4">
          <CarouselPrevious className="static transform-none h-8 w-8" />
          <CarouselNext className="static transform-none h-8 w-8" />
        </div>
      </Carousel>
    </div>
  );
} 