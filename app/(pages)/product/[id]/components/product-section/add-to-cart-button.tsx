"use client"

import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar";
import { CartItemType } from "@/types/cart/cart-item";
import { useCart } from "@/utils/hooks/use-cart";
import { useState } from "react";

type AddToCartButtonProps = {
    product_id: string,
    product: Omit<CartItemType, "quantity">
}

export const AddToCartButton = ({ product_id, product }: AddToCartButtonProps ) => {
    const { addOneToCart, getProductQuantity } = useCart();
    const quantity_in_cart = getProductQuantity(product_id);
    const { setOpen } = useSidebar();
    const [isButtonInCooldown, setIsButtonInCooldown] = useState<boolean>(false);

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.nativeEvent.preventDefault();
        try {
            setIsButtonInCooldown(true);
            setTimeout(() => {
                setIsButtonInCooldown(false);
            }, 2500);
        } catch (err) {
            console.error("Failed to add product to cart: ", err);
        }
    };

    return (
        <Button
            disabled={(quantity_in_cart >= 10 || isButtonInCooldown)}
            onClick={(e) => {
                handleClick(e)
                addOneToCart(product)
                setOpen(true)
            }}
            variant="outline"
            className="w-1/2 border-fuchsia-200 py-3 h-auto text-sm"
        >
            Adicionar ao carrinho
        </Button>
    )
}