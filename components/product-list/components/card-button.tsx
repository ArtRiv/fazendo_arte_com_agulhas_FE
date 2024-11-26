"use client"

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export const CardButton = () => {
    const [copied, setCopied] = useState<boolean>(false);

    const handleCopy = async () => {
        try {
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <div className="w-full mt-3 inline-flex -space-x-px rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
            <Button
                className="w-4/5 rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10 border-zinc-400
        transition-all duration-300 hover:scale-105 hover:translate-x-[-3%] hover:z-20 hover:border-zinc-500"
                variant="outline"
            >
                Ver produto
            </Button>
            <Button
                className="w-1/5 rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10 border-zinc-400 transition-all duration-300 hover:scale-105 hover:-translate-x-[-4%] hover:z-20 hover:border-zinc-500 z-10"
                variant="outline"
                onClick={handleCopy}
                size="icon"
                aria-label="Adicionar ao carrinho"
            >
                <div
                    className={cn(
                        "transition-all",
                        copied ? "scale-100 opacity-100" : "scale-0 opacity-0",
                    )}
                >
                    <Check className="stroke-emerald-500" size={16} strokeWidth={2} aria-hidden="true" />
                </div>
                <div
                    className={cn(
                        "absolute transition-all",
                        copied ? "scale-0 opacity-0" : "scale-100 opacity-100",
                    )}
                >
                    <ShoppingCart size={16} strokeWidth={2} aria-hidden="true" />
                </div>
            </Button>
        </div>
    )
}