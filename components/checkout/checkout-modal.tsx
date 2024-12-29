"use client";

import { DialogContent } from "@/components/ui/dialog";
import { AddressForm } from "./address";
import { PaymentForm } from "./payment";
import { useState } from "react";
import { ShippingOption } from "@/types/shipping/shipping_options";

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
        <DialogContent onPointerDownOutside={(e) => e.preventDefault()} className="h-5/6 my-4 gap-0 px-6 py-5 [&>button:last-child]:text-white space-y-6">
            <>
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
            </>
        </DialogContent>
    );
};