"use client";

import {
    DialogClose,
    DialogContent, DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AddressForm } from "./address";
import { PaymentForm } from "./payment";

interface CheckoutModalProps {
    step: number;
    totalSteps: number;
    handleContinue: () => void;
}

export const CheckoutModal = ({
    step,
    totalSteps,
    handleContinue,
}: CheckoutModalProps) => {
    return (
        <DialogContent className="h-5/6 my-4 gap-0 px-4 py-5 [&>button:last-child]:text-white space-y-6">
            <>
                {(() => {
                    switch (step) {
                        case 1:
                            return <AddressForm />;
                        case 2:
                            return <PaymentForm />;
                        default:
                            return null;
                    }
                })()}
            </>
            {(step != 2) &&
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center items-end mt-auto">
                    <div className="flex justify-center space-x-1.5 max-sm:order-1">
                        {[...Array(totalSteps)].map((_, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "h-1.5 w-1.5 rounded-full bg-primary",
                                    index + 1 === step ? "bg-primary" : "opacity-20",
                                )}
                            />
                        ))}
                    </div>

                    <DialogFooter>
                        {step < totalSteps ? (
                            <Button variant={"outline"} className="group" type="button" onClick={handleContinue}>
                                Avançar
                                <ArrowRight
                                    className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                                    size={16}
                                    strokeWidth={2}
                                    aria-hidden="true"
                                />
                            </Button>
                        ) : (
                            <DialogClose asChild>
                                <Button type="button">Okay</Button>
                            </DialogClose>
                        )}
                    </DialogFooter>
                </div>
            }
        </DialogContent>
    );
};