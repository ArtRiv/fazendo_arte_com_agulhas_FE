"use client";

import { DialogContent } from "@/components/ui/dialog";
import { AddressForm } from "./address";
import { PaymentForm } from "./payment";
import { useState } from "react";
import { ShippingOption } from "@/types/shipping/shipping_options";
import { ScrollArea } from "../ui/scroll-area";

interface CheckoutModalProps {
    step: number;
    totalSteps: number;
    handleContinue: () => void;
}

export const CheckoutModal = ({
    step,
    handleContinue,
}: CheckoutModalProps) => {
    const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>();
    console.log(shippingOptions);
    return (
        <DialogContent onPointerDownOutside={(e) => e.preventDefault()} className="h-5/6 p-2 gap-0 py-5 [&>button:last-child]:text-white space-y-6 max-w-xl">
            <ScrollArea className='flex items-center h-full'>
                {(() => {
                    switch (step) {
                        case 1:
                            return (
                                <AddressForm
                                    handleContinue={handleContinue}
                                    setShippingOptions={setShippingOptions}
                                />
                            );
                        case 2:
                            return (
                                shippingOptions && (
                                    <PaymentForm shipping_options={shippingOptions} />
                                )
                            );
                        default:
                            return null;
                    }
                })()}
            </ScrollArea>
        </DialogContent>
    );
};