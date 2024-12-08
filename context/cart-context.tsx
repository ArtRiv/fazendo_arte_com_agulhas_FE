"use client"

import { CartItemType } from "@/types/cart/cart-item";
import { ReactNode, createContext, useEffect, useState } from "react";

type CartContextType = {
    items: CartItemType[];
    addOneToCart: (product_to_add: Omit<CartItemType, "quantity">) => void;
    removeOneFromCart: (id: string) => void;
    deleteFromCart: (id: string) => void;
    getProductQuantity: (id: string) => number;
    getTotalCost: () => number;
    getTotalItems: () => number;
}

export const CartContext = createContext<CartContextType>({
    items: [],
    getProductQuantity: () => 0,
    addOneToCart: () => { },
    removeOneFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => 0,
    getTotalItems: () => 0,
});

export function CartContextProvider({ children }: { children: ReactNode }) {
    const [cartProducts, setCartProducts] = useState<CartItemType[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);

    function getProductQuantity(id: string): number {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if (!quantity) return 0;

        return quantity;
    }

    function addOneToCart(product_to_add: Omit<CartItemType, "quantity">) {
        const quantity = getProductQuantity(product_to_add.id);

        if (quantity === 0) {
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: product_to_add.id,
                        title: product_to_add.title,
                        price: product_to_add.price,
                        image: product_to_add.image,
                        quantity: 1
                    }
                ]
            )
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === product_to_add.id
                            ? { ...product, quantity: quantity + 1 }
                            : product
                )
            )
        }
    }

    function removeOneFromCart(id: string) {
        const quantity = getProductQuantity(id);

        if (quantity == 1) {
            deleteFromCart(id)
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id
                            ? { ...product, quantity: product.quantity - 1 }
                            : product
                )
            )
        }
    }

    function deleteFromCart(id: string) {
        setCartProducts(
            cartProducts =>
                cartProducts.filter(currentProduct => {
                    return currentProduct.id != id;
                })
        )
    }

    function getTotalCost(): number {
        let totalCost = 0;

        cartProducts.forEach((item) => {
            totalCost += item.price * item.quantity;
        });

        return totalCost;
    }

    function getTotalItems(): number {
        return cartProducts.length;
    }

    useEffect(() => {
        const localStorageCartItems = localStorage.getItem("cart-items");

        if (localStorageCartItems) {
            setCartProducts(JSON.parse(localStorageCartItems));
        }

        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem("cart-items", JSON.stringify(cartProducts));
        }
    }, [isInitialized]);

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
        getTotalItems,
    }

    return (
        <CartContext.Provider value={{
            items: cartProducts,
            getProductQuantity,
            addOneToCart,
            removeOneFromCart,
            deleteFromCart,
            getTotalCost,
            getTotalItems,
        }}>
            {children}
        </CartContext.Provider>
    )
}