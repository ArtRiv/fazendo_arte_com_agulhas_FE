"use client";

import { CheckoutModal } from "@/components/checkout/checkout-modal";
import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode, useEffect, useState } from "react";

type CheckoutButtonProps = {
    hasItems: boolean,
    children: ReactNode,
}

export const CheckoutButton = ({ hasItems, children }: CheckoutButtonProps) => {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    const totalSteps = 2;

    useEffect(() => {
        if (isOpen) {
            document.documentElement.style.overflow = "hidden";
            document.documentElement.style.marginRight = "18px";
        } else {
            document.documentElement.style.overflow = "";
            document.documentElement.style.marginRight = "0";
        }

        return () => {
            document.documentElement.style.overflow = "";
            document.documentElement.style.marginRight = "0";
        };
    }, [isOpen]);

    const handleContinue = () => {
        if (step < totalSteps) {
            setStep(step + 1);
        }
    };

    return (
        <Dialog
            onOpenChange={(open) => {
                setIsOpen(open);
                if (open) setStep(1);
            }}
            modal={false}
        >
            {isOpen && (
                <div
                    className="fixed z-50 w-screen h-screen inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            {isOpen && (
                <CheckoutModal
                    step={step}
                    totalSteps={totalSteps}
                    handleContinue={handleContinue}
                />
            )}
        </Dialog>
    );
};
