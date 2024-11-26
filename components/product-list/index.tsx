import Image from "next/image";
import { StarRating } from "./components/star-rating";
import { CardButton } from "./components/card-button";

type ProductListProps = {
    products: boolean;
    card_variant?: any;
    has_filter?: boolean;
};

const products_teste = [
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        image: "https://i.ibb.co/c3t2Rm3/nahida-1.jpg",
    },
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        image: "https://i.ibb.co/c3t2Rm3/nahida-1.jpg",
    },
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        image: "https://i.ibb.co/c3t2Rm3/nahida-1.jpg",
    },
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        image: "https://i.ibb.co/c3t2Rm3/nahida-1.jpg",
    },
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        image: "https://i.ibb.co/c3t2Rm3/nahida-1.jpg",
    },
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        image: "https://i.ibb.co/c3t2Rm3/nahida-1.jpg",
    },
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        image: "https://i.ibb.co/c3t2Rm3/nahida-1.jpg",
    },
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        image: "https://i.ibb.co/c3t2Rm3/nahida-1.jpg",
    },
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        image: "https://i.ibb.co/c3t2Rm3/nahida-1.jpg",
    },
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        image: "https://i.ibb.co/c3t2Rm3/nahida-1.jpg",
    },
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        image: "https://i.ibb.co/c3t2Rm3/nahida-1.jpg",
    },
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        image: "https://i.ibb.co/c3t2Rm3/nahida-1.jpg",
    },
    {
        title: "Pugs - Edição de natal",
        price: 99.99,
        image: "https://i.ibb.co/c3t2Rm3/nahida-1.jpg",
    },
]

export const ProductList = ({
    products,
    card_variant = "default",
    has_filter = false,
}: ProductListProps): JSX.Element => {
    return (
        <div className="w-full">
            <ul className="flex flex-wrap mt-4 mb-5 list-none 
            [column-gap:40px] [row-gap:40px]">
                {products_teste.map((product: any, index: number) => (
                    <li className="w-60 max-w-60 grid--item">
        <Image 
          className="w-full flex relative items-stretch shape--blob slide_in_effect image" 
          alt="product image" 
          src="https://medaami.com/cdn/shop/files/TN-polos.jpg?v=1731954258&width=1500" 
          width={245} 
          height={245} 
        />                        
        <div className="pt-0 pr-2 pb-2 pl-2">
                            <div className="px-2 py-4">
                                <h3 className="text-zinc-900 text-lg">
                                    {product.title}
                                </h3>
                                <div className="w-full text-left">
                                    <p className="text-xs opacity-80">Fazendo Arte com Agulhas</p>
                                    <StarRating stars={5} />
                                    <p className="mt-1">R$ {product.price}</p>
                                </div>
                                <CardButton/>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};