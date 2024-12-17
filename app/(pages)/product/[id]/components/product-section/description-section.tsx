import { Separator } from "@/components/ui/separator";
import { Sparkles  } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DialogImage } from "./dialog-image";

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

export const ProductDescriptionSection = () => {
    return (
        <section className="mt-5 flex gap-6 flex-wrap justify-center max-w-[75rem] px-12 mx-auto">
        <div className="w-1/2 max-w-[550px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product_teste.media.map((image, index) => (
                    <DialogImage src={image} alt={product_teste.title}>
                        <Image className="aspect-square rounded-xl shadow-xl transition-all duration-500 hover:rotate-1 cursor-pointer" draggable={false} alt={`Imagem do produto ${product_teste.title} - ${index + 1}`} src={image} width={278} height={278} />
                    </DialogImage>
                ))}
            </div>
        </div>
        <div className="px-4 py-2 w-1/2 max-w-[500px] flex flex-col">
            <div id="product_description" className="border rounded-md p-4 flex flex-col gap-4 px-2 self-end">
                <h3 className="opacity-85 text-center">Descrição</h3>
                <Separator />
                <p className="text-sm opacity-80 text-center flex items-center justify-between gap-4">
                    <Sparkles width={15} height={15} className="stroke-pink-400" />
                    Amigurumi da Frieren do Anime Sousou no Frieren!
                    <Sparkles width={15} height={15} className="stroke-pink-400" />
                </p>
                <p className="text-sm opacity-80 text-center flex items-center justify-between gap-4">
                    <Sparkles width={15} height={15} className="stroke-pink-400" />
                    Artesanato feito com técnica Amigurumi utilizando linhas crochê.
                    <Sparkles width={15} height={15} className="stroke-pink-400" />
                </p>
                <p className="text-sm opacity-80 text-center flex items-center justify-between gap-4">
                    <Sparkles width={15} height={15} className="stroke-pink-400" />
                    Aproximadamente 15 centimetros com linha 85% algodão 15% acrílico.
                    <Sparkles width={15} height={15} className="stroke-pink-400" />
                </p>
                <p className="text-sm opacity-80 text-center flex items-center justify-between gap-4">
                    <Sparkles width={15} height={15} className="stroke-pink-400" />
                    <span>
                        Todos créditos da receita para a criadora <Link className="font-bold opacity-100 hover:underline" href="#">Medaami</Link>
                    </span>
                    <Sparkles width={15} height={15} className="stroke-pink-400" />
                </p>
                <p className="text-sm opacity-80 text-center flex items-center justify-between gap-4">
                    <Sparkles width={15} height={15} className="stroke-pink-400" />
                    Base de madeira retirável acompanha o personagem para estabilizar.
                    <Sparkles width={15} height={15} className="stroke-pink-400" />
                </p>
            </div>
        </div>
    </section>
    )
}