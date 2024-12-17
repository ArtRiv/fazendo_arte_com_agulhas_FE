import './styles/style.css'
import { Product } from "@/types/product/product";
import { CardVariations } from "@/types/product/variant"
import { ProductCard } from "./components/product-card";
import { FilterBar } from './components/filter-bar';

type ProductListProps = {
    products: Product[];
    card_variant?: CardVariations;
    has_filter?: boolean;
};

export const ProductList = ({
    products,
    card_variant = CardVariations.BLOB,
    has_filter = false,
}: ProductListProps): JSX.Element => {

    return (
        <div className="w-full flex flex-col gap-2">
            {has_filter &&
                <FilterBar/>
            }
            <ul className="flex-wrap grid justify-start mx-auto mt-4 mb-5 list-none [column-gap:40px] [row-gap:40px] [grid-template-columns:_repeat(4,_1fr)]">
                {products.map((product: Product, index: number) => (
                    <ProductCard product={product} variant={card_variant} key={index}/>
                ))}
            </ul>
        </div>
    );
};