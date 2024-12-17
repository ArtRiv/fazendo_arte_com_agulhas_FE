"use client";

import { CheckoutModal } from "@/components/checkout/checkout-modal";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogOverlay,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export const CheckoutButton = ({ hasItems }: { hasItems: boolean }) => {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    const totalSteps = 2;

    useEffect(() => {
        console.log(isOpen);
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
                    className="fixed w-screen h-screen inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}
            <DialogTrigger asChild>
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
