import { SidebarFooter } from "@/components/ui/sidebar"
import { DiscountModal } from "./components/discount-modal"
import { useCart } from "@/utils/hooks/use-cart";
import { formatPrice } from "@/utils/format-price";
import { Button } from "@/components/ui/button";
import { Shipping } from "./components/shipping";
import { ArrowRight } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { CheckoutButton } from "@/components/checkout/components/checkout-button";



export const SidebarFooterComponent = () => {
    const { getTotalCost, getTotalItems } = useCart();
    const totalCost = formatPrice(getTotalCost());
    const hasItems = (getTotalItems() !== 0);

    return (
        <SidebarFooter className="w-full h-48">
            <DiscountModal hasItems={hasItems} />
            <div className="w-full px-4">
                <div className="py-1 w-full flex justify-between">
                    <span className={`text-sm font-bold ${hasItems ? "" : "opacity-50"}`}>Subtotal</span>
                    <span className={`text-sm ${hasItems ? "" : "opacity-50"}`}>{totalCost}</span>
                </div>
                <div className="py-1 w-full flex justify-between">
                    <Shipping hasItems={hasItems} />
                </div>

                <CheckoutButton hasItems={hasItems}>
                    <Button
                        variant="outline"
                        className="group/buy-button mt-3 p-5 w-full border-zinc-400 text-zinc-800"
                        disabled={!hasItems}
                    >
                        Finalizar compra
                        <ArrowRight
                            className="-me-1 ms-2 opacity-60 transition-transform group-hover/buy-button:translate-x-0.5"
                            size={16}
                            strokeWidth={2}
                            aria-hidden="true"
                        />
                    </Button>
                </CheckoutButton>
            </div>
        </SidebarFooter>
    )
}