"use client"

import { Product } from "@/types/product/product"
import { CardButton } from "./card-button"
import { StarRating } from "./star-rating"
import Image from "next/image"
import { useCart } from "@/utils/hooks/use-cart"
import { CardVariations } from "@/types/product/variant"
import Link from "next/link"

interface ProductCardProps {
    product: Product,
    variant: CardVariations,
}

let slugify = require('slugify')

export const ProductCard = ({ product, variant }: ProductCardProps) => {
    const { addOneToCart, getProductQuantity } = useCart();
    const quantity_in_cart = getProductQuantity(product.id);

    return (
        <li className="w-64 max-w-64 cursor-pointer rounded-md shadow-xl hover:shadow-2xl hover:rotate-2 card-animation grid--item">
            <Link href={`/product/${slugify(product.title, {
                lower: true
            })}`}>
                <Image
                    className={`w-full flex relative shadow-xl items-stretch ${(() => {
                        switch (variant) {
                            case CardVariations.BLOB:
                                return 'shape--blob';
                            case CardVariations.ROUNDED:
                                return 'rounded-t-md';
                            case CardVariations.SQUARED:
                                return 'rounded-t-sm';
                            default:
                                return '';
                        }
                    })()
                        }`}
                    alt="product image"
                    src={product.media[0]}
                    width={256}
                    height={256}
                />
                <div className="pt-0 pr-2 pb-2 pl-2">
                    <div className="px-2 py-4">
                        <h3 className="text-zinc-900 text-lg line-clamp-1">
                            {product.title}
                        </h3>
                        <div className="w-full text-left">
                            <p className="text-xs opacity-80 mb-3">Fazendo Arte com Agulhas</p>
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
            </Link>
        </li>
    )
} 