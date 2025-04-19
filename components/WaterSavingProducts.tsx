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
  ShoppingBag,
  Droplets,
  ArrowRight,
  Star,
  ExternalLink
} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  waterSaving: string;
  category: string;
  points: number;
}

interface WaterSavingProductsProps {
  className?: string;
  products: Product[];
}

export default function WaterSavingProducts({ className, products }: WaterSavingProductsProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-lg sm:text-xl font-bold">節水商品推薦</h2>
          <Badge variant="outline" className="text-xs h-5 bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800">
            <Droplets className="h-3 w-3 mr-1" /> 獲取更多水足跡點數
          </Badge>
        </div>
        <Button variant="ghost" size="sm" className="text-xs">
          查看全部 <ArrowRight className="ml-1 h-3 w-3" />
        </Button>
      </div>

      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/3">
              <Card className="h-full border-slate-200 dark:border-slate-800">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-blue-600 hover:bg-blue-700">
                      <Droplets className="h-3 w-3 mr-1" /> +{product.points}點
                    </Badge>
                  </div>
                  {product.originalPrice && (
                    <div className="absolute top-2 left-2">
                      <Badge variant="destructive">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </Badge>
                    </div>
                  )}
                </div>
                <CardHeader className="p-3 pb-2">
                  <div className="flex justify-between items-start mb-1">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-xs ml-1">{product.rating} ({product.reviews})</span>
                    </div>
                  </div>
                  <CardTitle className="text-sm font-medium line-clamp-1">{product.name}</CardTitle>
                  <CardDescription className="text-xs line-clamp-2">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-3 pt-0 pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-end gap-1">
                      <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-slate-400 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <div className="text-xs px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded">
                      省水 {product.waterSaving}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-3 pt-0 flex gap-2">
                  <Button variant="outline" size="sm" className="text-xs h-8 flex-1">
                    <ShoppingBag className="h-3.5 w-3.5 mr-1" /> 加入購物車
                  </Button>
                  <Button variant="ghost" size="sm" className="text-xs h-8 w-8 p-0 flex items-center justify-center">
                    <ExternalLink className="h-3.5 w-3.5" />
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