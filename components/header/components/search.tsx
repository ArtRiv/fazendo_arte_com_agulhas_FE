"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderCircle, Search, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export const SearchInput = () => {
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout> | undefined;

        if (inputValue) {
          setIsLoading(true);
          timer = setTimeout(() => {
            setIsLoading(false);
          }, 500);
        } else {
          setIsLoading(false);
        }
        
        return () => {
          if (timer) clearTimeout(timer);
        };
      }, [inputValue]);

    return (
        <div className="space-y-2 w-1/3 flex flex-col justify-center items-center">
            <Label htmlFor="input-27" className="sr-only">Pesquisar</Label>
            <div className="relative">
                <Input
                    id="input-27"
                    className="peer pe-9 ps-9 text-zinc-900 webkit-input-search-none"
                    placeholder="Buscar..."
                    type="search"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                    {isLoading ? (
                        <LoaderCircle
                            className="animate-spin"
                            size={16}
                            strokeWidth={2}
                            aria-hidden="true"
                            role="presentation"
                        />
                    ) : (
                        <Search size={16} strokeWidth={2} aria-hidden="true" />
                    )}
                </div>
                <button
                    className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-zinc-900 focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                    aria-label="Press to speak"
                    type="submit"
                >
                    <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                </button>
            </div>
        </div>
    )
}