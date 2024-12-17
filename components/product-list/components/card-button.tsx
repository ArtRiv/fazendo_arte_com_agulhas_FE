"use client"

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useState } from "react";
import { CartItemType } from "@/types/cart/cart-item";
import { useSidebar } from "@/components/ui/sidebar";

type CardButtonProps = {
    product: Omit<CartItemType, "quantity">;
    addOneToCart: (product: Omit<CartItemType, "quantity">) => void;
    quantity_in_cart: number;
};

export const CardButton = ({ product, addOneToCart, quantity_in_cart }: CardButtonProps) => {
    const [copied, setCopied] = useState<boolean>(false);
    const [isButtonInCooldown, setIsButtonInCooldown] = useState<boolean>(false);
    const { setOpen } = useSidebar();

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.nativeEvent.preventDefault();
        try {
            setIsButtonInCooldown(true);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
                setIsButtonInCooldown(false);
            }, 2500); 
        } catch (err) {
            console.error("Failed to add product to cart: ", err);
        }
    };

    return (
        <div className="w-full mt-3 inline-flex -space-x-px rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
            <Button
                className="w-4/5 rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10 border-zinc-400
                transition-all duration-300 hover:scale-105 hover:translate-x-[-3%] hover:z-20 hover:border-zinc-500"
                variant="outline"
            >
                Ver produto
            </Button>
            <Button
                disabled={(quantity_in_cart >= 10 || isButtonInCooldown)}
                className="w-1/5 rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10 border-zinc-400 transition-all duration-300 hover:scale-105 hover:-translate-x-[-4%] hover:z-20 hover:border-zinc-500 z-10"
                variant="outline"
                onClick={(e) => {
                    handleClick(e)
                    addOneToCart(product)
                    setOpen(true)
                }}
                size="icon"
                aria-label="Adicionar ao carrinho"
            >
                <div
                    className={cn(
                        "transition-all",
                        copied ? "scale-100 opacity-100" : "scale-0 opacity-0",
                    )}
                >
                    <Check className="stroke-emerald-500" size={16} strokeWidth={2} aria-hidden="true" />
                </div>
                <div
                    className={cn(
                        "absolute transition-all",
                        copied ? "scale-0 opacity-0" : "scale-100 opacity-100",
                    )}
                >
                    <ShoppingCart size={16} strokeWidth={2} aria-hidden="true" />
                </div>
            </Button>
        </div>
    )
}