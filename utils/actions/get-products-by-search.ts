"use server";

import { Product } from "@/types/product/product";

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
        title: "Pugs - Edição de Natal 1",
        price: 99.99,
        media: ["https://i.ibb.co/LPQTY0Y/yoimiya-img.jpg"],
        id: "price_1Q9uB8C072cq1xZ7Wzx08z"
    },
    {
        title: "Pugs - Edição de Natal 2",
        price: 99.99,
        media: ["https://i.ibb.co/1ZTfHLL/venti-img.jpg"],
        id: "price_1Q9uB8C072c7rHWzx08z"
    },
    {
        title: "Pugs - Edição de Natal 3",
        price: 99.99,
        media: ["https://i.ibb.co/q17wCKZ/kaedehara-kazuha-img.jpg"],
        id: "price_1Qq1xZ7rHWzx08z"
    },
    {
        title: "Pugs - Edição de Natal 4",
        price: 99.99,
        media: ["https://i.ibb.co/3crqkD9/ayaka-img.jpg"],
        id: "price_1Q9uB8C0708z"
    },
    {
        title: "Pugs - Edição de Natal 5",
        price: 99.99,
        media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
        id: "pricB8C072cq1xZ7rHWzx08z"
    },
    {
        title: "Pugs - Edição de Natal 6",
        price: 99.99,
        media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
        id: "price_1Q9uB8C072cq1xZ7rHWzx08z"
    },
    {
        title: "Pugs - Edição de Natal 7",
        price: 99.99,
        media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
        id: "price_1Q9uB8C072cq1xZ7rHWzx08z"
    },
    {
        title: "Pugs - Edição de Natal 8",
        price: 99.99,
        media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
        id: "price_1Q9uB8C072cq1xZ7rHWzx08z"
    },
    {
        title: "Pugs - Edição de Natal 9",
        price: 99.99,
        media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
        id: "price_1Q9uB8C072cq1xZ7rHWzx08z"
    },
    {
        title: "Pugs - Edição de Natal 10",
        price: 99.99,
        media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
        id: "price_1Q9uB8C072cq1xZ7rHWzx08z"
    },
    {
        title: "Pugs - Edição de Natal 11",
        price: 99.99,
        media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
        id: "price_1Q9uB8C072cq1xZ7rHWzx08z"
    },
    {
        title: "Pugs - Edição de Natal 12",
        price: 99.99,
        media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
        id: "price_1Q9uB8C072cq1xZ7rHWzx08z"
    }
];

export const getProductsBySearch = async (query: string) => {
    if (!query || !query.length) {
        return [];
    }

    return products_teste
        .filter(product =>
            product.title.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 8);
};
