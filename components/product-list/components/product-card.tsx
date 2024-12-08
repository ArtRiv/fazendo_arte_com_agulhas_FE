"use client"

import { Product } from "@/types/product/product"
import { CardButton } from "./card-button"
import { StarRating } from "./star-rating"
import Image from "next/image"
import { useCart } from "@/hooks/use-cart"

export const ProductCard = ({ product }: { product: Product }) => {
    const { addOneToCart, getProductQuantity } = useCart();
    const quantity_in_cart = getProductQuantity(product.id);

    return (
        <li className="w-60 max-w-60 grid--item cursor-pointer rounded-md hover:shadow-2xl hover:rotate-2 card-animation">
            <Image
                className="w-full flex relative items-stretch shape--blob slide_in_effect image"
                alt="product image"
                src={product.media[0]}
                width={245}
                height={245}
            />
            <div className="pt-0 pr-2 pb-2 pl-2">
                <div className="px-2 py-4">
                    <h3 className="text-zinc-900 text-lg line-clamp-1">
                        {product.title}
                    </h3>
                    <div className="w-full text-left">
                        <p className="text-xs opacity-80">Fazendo Arte com Agulhas</p>
                        <StarRating stars={5} />
                        <p className="mt-1">R$ {product.price}</p>
                    </div>
                    <CardButton
                        product={{ 
                            id: product.id, 
                            title: product.title, 
                            price: product.price,
                            image: product.media[0],
                        }}
                        addOneToCart={addOneToCart}
                        quantity_in_cart={quantity_in_cart}
                    />
                </div>
            </div>
        </li>
    )
} 