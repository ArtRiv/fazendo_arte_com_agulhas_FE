

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { ProductCard } from "@/components/product-list/components/product-card";

export function CarouselDemo() {
    return (
        <Carousel className="w-full max-w-xs">
            <CarouselContent className="list-none">
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            {/* <ProductCard product={product_teste} variant={CardVariations.ROUNDED} /> */}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* <CarouselPrevious />
      <CarouselNext /> */}
        </Carousel>
    )
}
