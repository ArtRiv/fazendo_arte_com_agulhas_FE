"use client";

import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SortBy } from "@/types/sort_by/sort_by";

export const FilterBar = () => {
  const [filter, setFilter] = useState("novidades");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleFilterChange = useCallback(
    (newFilter: string) => {
      setFilter(newFilter);
  
      const sp = new URLSearchParams(searchParams);
  
      if (newFilter === SortBy.NEWS) {
        sp.delete("filtro");
      } else {
        sp.set("filtro", newFilter);
      }
      
      sp.delete("pagina");
  
      router.push(`${pathname}?${sp.toString()}`);
    },
    [pathname, router, searchParams]
  );
  
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
        <DropdownMenuRadioGroup
          value={filter}
          onValueChange={(value) => handleFilterChange(value as SortBy)}
        >
          <DropdownMenuRadioItem value={SortBy.NEWS}>
            Novidades
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={SortBy.LOWEST_PRICE}>
            Preço: Menor - Maior
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={SortBy.BIGGEST_PRICE}>
            Preço: Maior - Menor
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={SortBy.BEST_SELLING}>
            Mais vendidos
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
