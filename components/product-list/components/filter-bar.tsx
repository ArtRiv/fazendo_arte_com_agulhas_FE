"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export const FilterBar = () => {
    const [filter, setFilter] = useState("novidades");

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto mr-14 mb-5">
                    Filtrar
                    <ChevronDown
                        className="-me-1 ms-2 opacity-60"
                        size={16}
                        strokeWidth={2}
                        aria-hidden="true"
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
                    <DropdownMenuRadioItem value="novidades">
                        Novidades
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="preco-menor-maior">
                        Preço: Menor - Maior
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="preco-maior-menor">
                        Preço: Maior - Menor
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="mais-vendidos">
                        Mais vendidos
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
