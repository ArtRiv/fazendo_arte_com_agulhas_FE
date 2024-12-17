"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useSidebar } from "@/components/ui/sidebar";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useCart } from "@/utils/hooks/use-cart";

export const CartButton = () => {
    const { setOpen, open } = useSidebar();
    const { getTotalItems } = useCart();
    const totalItems = getTotalItems();
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <>
            <TooltipProvider delayDuration={0}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            className="relative group border-2 border-zinc-300 shadow-xl bg-white"
                            variant="outline"
                            size="icon"
                            onClick={() => setOpen(!open)}
                            aria-expanded={open}
                            aria-label={open ? "Close menu" : "Open menu"}
                        >
                            {!isClient && (
                                <Skeleton className="h-4 w-6 absolute p-0.5 bottom-[-6px] right-[-6px] bg-red-700/60" />
                            )}
                            {(isClient) && (totalItems > 0) && (
                                <div className={`bg-red-700 rounded-xl p-0.5 px-1 text-xs text-white leading-none absolute bottom-[-6px] ${totalItems < 10 ? "right-[-2px] rounded-full" : "right-[-6px]"}`}>
                                    {totalItems}
                                </div>
                            )}
                            <ShoppingCart width={16} height={16} className="stroke-zinc-600" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent className="border border-input bg-popover px-2 py-1 text-xs text-muted-foreground">
                        Carrinho
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </>
    )
}