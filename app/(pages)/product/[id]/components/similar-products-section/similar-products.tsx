import { ProductList } from "@/components/product-list"
import { CardVariations } from "@/types/product/variant"

export type Product = {
    id: string,
    title: string,
    price: number,
    media: Array<string>,
}

const products_teste: Product[] = [
    {
        title: "Frieren - Sousou no Frieren",
        price: 189.99,
        media: ["https://i.ibb.co/NjdLy09/frieren.jpg"],
        id: "price_1Q9uB8C072cq1x08z"
    },
    {
        title: "Fern - Sousou no Frieren",
        price: 99.99,
        media: ["https://i.ibb.co/r04HC67/fern.jpg"],
        id: "price_1Q9uB87rHWzx08z"
    },
    {
        title: "Nahida - Genshin Impact",
        price: 99.99,
        media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
        id: "price_1Q9uB8C072cq1xZ7rx08z"
    },
    {
        title: "Alhaitham - Genshin Impact",
        price: 99.99,
        media: ["https://i.ibb.co/2yyqYFX/alhaitham-img.jpg"],
        id: "price_1QC072cq1xZ7rHWzx08z"
    },
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        media: ["https://i.ibb.co/LPQTY0Y/yoimiya-img.jpg"],
        id: "price_1Q9uB8C072cq1xZ7Wzx08z"
    },
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        media: ["https://i.ibb.co/1ZTfHLL/venti-img.jpg"],
        id: "price_1Q9uB8C072c7rHWzx08z"
    },
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        media: ["https://i.ibb.co/q17wCKZ/kaedehara-kazuha-img.jpg"],
        id: "price_1Qq1xZ7rHWzx08z"
    },
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        media: ["https://i.ibb.co/3crqkD9/ayaka-img.jpg"],
        id: "price_1Q9uB8C0708z"
    },
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
        id: "pricB8C072cq1xZ7rHWzx08z"
    },
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
        id: "price_1Q9uB8C072cq1xZ7rHWzx08z"
    },
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
        id: "price_1Q9uB8C072cq1xZ7rHWzx08z"
    },
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
        id: "price_1Q9uB8C072cq1xZ7rHWzx08z"
    },
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
        id: "price_1Q9uB8C072cq1xZ7rHWzx08z"
    },
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
        id: "price_1Q9uB8C072cq1xZ7rHWzx08z"
    },
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
        id: "price_1Q9uB8C072cq1xZ7rHWzx08z"
    },
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
        id: "price_1Q9uB8C072cq1xZ7rHWzx08z"
    },
]

export const SimilarProducts = () => {
    return (
        <section className="mt-32 mb-16 flex flex-col gap-6 flex-wrap justify-center max-w-[80rem] px-20 mx-auto">
            <h2 className="text-4xl mr-auto">Produtos similares</h2>
            <ProductList products={products_teste.slice(0, 8)} card_variant={CardVariations.ROUNDED} />
        </section>
    )
}