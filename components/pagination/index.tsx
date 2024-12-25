"use client"

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
};

export default function PaginationComponent({ currentPage, totalPages }: PaginationProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    function handlePageChange(page: number) {
        const sp = new URLSearchParams(searchParams);
    
        page === 1 ? sp.delete('pagina') : sp.set('pagina', page.toString());
    
        router.push(`${pathname}?${sp.toString()}`);
    }    

    return (
        <div className="flex items-center justify-between gap-3 my-8">
            <p className="grow text-sm text-muted-foreground" aria-live="polite">
                Página <span className="text-foreground">{currentPage}</span> de{" "}
                <span className="text-foreground">{totalPages}</span>
            </p>
            <Pagination className="w-auto">
                <PaginationContent className="gap-3">
                    <PaginationItem>
                        <Button
                            variant="ghost"
                            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
                            aria-disabled={currentPage === 1 ? true : undefined}
                            role={currentPage === 1 ? "link" : undefined}
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            <ArrowLeft
                                className="-ms-1 me-2 opacity-60 transition-transform group-hover:-translate-x-0.5"
                                size={16}
                                strokeWidth={2}
                                aria-hidden="true"
                            />
                            Anterior
                        </Button>
                    </PaginationItem>
                    <PaginationItem>
                        <Button
                            variant="ghost"
                            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
                            aria-disabled={currentPage === totalPages ? true : undefined}
                            role={currentPage === totalPages ? "link" : undefined}
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            Próximo
                            <ArrowRight
                                className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                                size={16}
                                strokeWidth={2}
                                aria-hidden="true"
                            />
                        </Button>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}






