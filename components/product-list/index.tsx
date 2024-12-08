import './styles/style.css'
import { Product } from "@/types/product/product";
import { ProductCard } from "./components/product-card";

type ProductListProps = {
    products: boolean;
    card_variant?: any;
    has_filter?: boolean;
};

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

export const ProductList = ({
    products,
    card_variant = "default",
    has_filter = false,
}: ProductListProps): JSX.Element => {

    return (
        <div className="w-full">
            <ul className="flex flex-wrap mt-4 mb-5 list-none [column-gap:40px] [row-gap:40px]">
                {products_teste.map((product: Product, index: number) => (
                    <ProductCard product={product} key={index}/>
                ))}
            </ul>
        </div>
    );
};