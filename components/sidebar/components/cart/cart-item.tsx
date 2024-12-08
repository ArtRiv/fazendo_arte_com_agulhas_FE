import { SidebarMenuItem } from "@/components/ui/sidebar"
import { CartItemType } from "@/types/cart/cart-item";
import { formatPrice } from "@/utils/format-price"
import { ArrowLeft, ArrowRight, Trash } from "lucide-react"
import Image from "next/image";

type CartItemProps = {
    item: CartItemType;
    addOneToCart: (product: Omit<CartItemType, "quantity">) => void;
    removeOneFromCart: (id: string) => void;
    deleteFromCart: (id: string) => void;
    getProductQuantity: (id: string) => number;
};

export const CartItem = ({ item, addOneToCart, removeOneFromCart, deleteFromCart, getProductQuantity }: CartItemProps) => {
    const quantity_in_cart = getProductQuantity(item.id);

    return (
        <SidebarMenuItem key={item.title} className="w-full flex justify-between gap-1">
            <div className="w-1/3">
                <Image
                    alt={item.title}
                    width={100}
                    height={100}
                    src={item.image}
                    quality={100}
                    loading="lazy"
                    draggable={false}
                />
            </div>
            <div className="w-2/3 flex flex-col justify-between text-ellipsis whitespace-nowrap overflow-hidden py-2">
                <span className="text-sm">
                    {item.title}
                </span>
                <h4 className="flex text-sm md:text-base text-start md:justify-end md:text-end text-font-color/80 font-harmonia leading-line-height-big tracking-letter-space-normal break-words antialiased">
                    {formatPrice(item.price * item.quantity)}
                </h4>
                <div className="w-full h-5 flex">
                    <div className="flex justify-between items-center w-4/5">
                        <button onClick={() => removeOneFromCart(item.id)}>
                            <ArrowLeft width={15} height={15} />
                        </button>
                        {item.quantity}
                        <button onClick={() => addOneToCart(item)} disabled={(quantity_in_cart >= 10)} className={quantity_in_cart >= 10 ? `opacity-70 cursor-not-allowed` : ``}>
                            <ArrowRight width={15} height={15} />
                        </button>
                    </div>
                    <div className="w-1/5 flex justify-end">
                        <button onClick={() => deleteFromCart(item.id)}>
                            <Trash width={15} height={15} />
                        </button>
                    </div>
                </div>
            </div>
        </SidebarMenuItem>
    )
}