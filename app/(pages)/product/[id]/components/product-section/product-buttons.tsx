"use client"

import { CheckoutButton } from "@/components/checkout/components/checkout-button";
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar";
import { CartItemType } from "@/types/cart/cart-item";
import { useCart } from "@/utils/hooks/use-cart";
import { useState } from "react";

interface ProductT {
    id: string,
    title: string,
    price: number,
    media: Array<string>,
    description: string,
    rating: number,
    purchase_count: number,
}

export const ProductButtons = ({ product }: { product: ProductT}) => {
    const { getTotalItems } = useCart();
    const hasItems = (getTotalItems() !== 0);

    return (
        <>
            <AddToCartButton product={
                {
                    id: product.id,
                    image: product.media[0],
                    price: product.price,
                    title: product.title,
                }
            } product_id={product.id} />

            <CheckoutButton hasItems={hasItems}>
                <Button
                    variant="outline"
                    className="w-1/2 border-fuchsia-200 py-3 h-auto gradient-button shadow-xl"
                >
                    <span className="text-sm text-zinc-900 mix-blend-color-burn">
                        Finalizar compra
                    </span>
                </Button>
            </CheckoutButton>
        </>
    )
}

type AddToCartButtonProps = {
    product_id: string,
    product: Omit<CartItemType, "quantity">
}

const AddToCartButton = ({ product_id, product }: AddToCartButtonProps) => {
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