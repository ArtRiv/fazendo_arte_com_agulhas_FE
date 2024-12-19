import { StarRating } from "@/components/product-list/components/star-rating";
import { formatPrice } from "@/utils/format-price";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DialogImage } from "./dialog-image";
import { ProductButtons } from "./product-buttons";
interface ProductT {
    id: string,
    title: string,
    price: number,
    media: Array<string>,
    description: string,
    rating: number,
    purchase_count: number,
}

const product_teste: ProductT =
{
    id: "price_1Q9uB8C072cq1x08z",
    title: "Frieren - Sousou no Frieren",
    price: 189.99,
    media: ["https://i.ibb.co/NjdLy09/frieren.jpg", "https://i.ibb.co/9THtPwN/frieren.jpg", "https://i.ibb.co/zbSMfXK/freiren-2.jpg"],
    description: "Amigurumi da Frieren de Sousou no Frieren, cerca de 15cm de altura",
    rating: 5,
    purchase_count: 15,
}

export const ProductMainSection = () => {

    return (
        <section className="flex gap-6 flex-wrap justify-center max-w-[75rem] px-12 mx-auto">
            <div className="w-1/2 max-w-[550px] flex justify-center">
                <DialogImage src={product_teste.media[0]} alt={product_teste.title}>
                    <div className="relative overflow-hidden rounded-xl shadow-xl cursor-pointer group">
                        <Image
                            className="aspect-square transform transition-transform duration-1000 group-hover:scale-105"
                            draggable={false}
                            alt={`Imagem do produto ${product_teste.title}`}
                            src={product_teste.media[0]}
                            width={500}
                            height={500}
                        />
                        <Search
                            size={35}
                            className="p-2 bg-background rounded-full shadow-2xl absolute top-5 left-5 z-10 transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                    </div>
                </DialogImage>
            </div>
            <div className="px-4 py-2 w-1/2 max-w-[500px] flex flex-col">
                <p className="text-xs font-thin opacity-70">Receita: <Link className="font-bold opacity-100 hover:underline" href="#">Medaami</Link></p>
                <h1 className="w-5/6 text-5xl font-semibold leading-snug mb-4">{product_teste.title}</h1>
                <div className="flex items-center gap-1 mb-2">
                    <StarRating stars={5} />
                    <span className="text-sm opacity-80">reviews</span>
                </div>
                <span className="text-lg opacity-80">{formatPrice(product_teste.price)}</span>
                <p className="text-xs font-thin opacity-70">Produto físico artesanal</p>
                <div className="py-2 mt-3 flex">
                    <RadioGroup className="gap-2 flex" defaultValue="default">
                        <div className="relative flex w-1/2 items-center gap-2 rounded-lg border border-input px-2 py-3 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-pink-400">
                            <RadioGroupItem
                                value="default"
                                id="default-product"
                                aria-describedby="default-product"
                                className="order-1 self-start after:absolute after:inset-0"
                            />
                            <div className="flex grow items-center gap-3">
                                <Image className="rounded-xl shadow-xl" draggable={false} alt={`Imagem do produto ${product_teste.title}`} src={product_teste.media[0]} width={50} height={50} />
                                <div className="grid grow gap-2">
                                    <Label htmlFor="default-value">
                                        Frieren{" "}
                                        <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
                                            (Apenas)
                                        </span>
                                    </Label>
                                    <p id="radio-10-r1-description" className="text-xs text-muted-foreground">
                                        contém apenas a personagem
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex w-1/2 items-center gap-2 rounded-lg border border-input px-2 py-3 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-pink-400">
                            <RadioGroupItem
                                value="product-variation-1"
                                id="product-variation-1"
                                aria-describedby="frieren-with-staff"
                                className="order-1 self-start after:absolute after:inset-0"
                            />
                            <div className="flex grow items-center gap-3">
                                <Image className="rounded-xl shadow-xl" draggable={false} alt={`Imagem do produto ${product_teste.title}`} src={product_teste.media[0]} width={50} height={50} />
                                <div className="grid grow gap-2">
                                    <Label htmlFor="default-value">
                                        Frieren{" "}
                                        <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
                                            (com cajado)
                                        </span>
                                    </Label>
                                    <p id="radio-10-r1-description" className="text-xs text-muted-foreground">
                                        cajado acompanha personagem
                                    </p>
                                </div>
                            </div>
                        </div>
                    </RadioGroup>
                </div>
                <div className="w-full flex gap-2 p-2 mt-auto mb-4">
                    <ProductButtons product={product_teste} />
                </div>
            </div>
        </section>
    )
}
