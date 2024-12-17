import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarMenu } from "@/components/ui/sidebar"
import { useCart } from "@/utils/hooks/use-cart";
import { CartItem } from "./cart-item";

export const CartList = () => {
    const { items, addOneToCart, removeOneFromCart, deleteFromCart, getProductQuantity } = useCart();
    
    return (
        <ScrollArea className="h-96 w-full rounded-md border pr-4">
            <SidebarMenu className="flex gap-3">
                {items.map((item) => (
                    <CartItem
                        item={item}
                        addOneToCart={addOneToCart}
                        removeOneFromCart={removeOneFromCart}
                        deleteFromCart={deleteFromCart}
                        getProductQuantity={getProductQuantity}
                    />
                ))}
            </SidebarMenu>
        </ScrollArea>
    )
}