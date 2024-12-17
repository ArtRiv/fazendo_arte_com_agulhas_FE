import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { LoaderCircle, Search, ArrowRight } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/types/product/product";
import { getProductsBySearch } from "@/utils/actions/get-products-by-search";
import Image from "next/image";
import { formatPrice } from "@/utils/format-price";
import Link from "next/link";
let slugify = require('slugify')

export const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const inputToggle = modalRef.current?.querySelector("input");

        function onInputClick(event: Event) {
            event.stopPropagation();
            setIsOpen(true);
            document.body.addEventListener("click", onBodyClick);
        }

        function onBodyClick(event: Event) {
            const targetElement = event.target as Element;
            if (!(modalRef.current?.contains(targetElement))) {
                setIsOpen(false);
                document.body.removeEventListener("click", onBodyClick);
            }
        }

        if (inputToggle) {
            inputToggle.addEventListener("click", onInputClick);
        }

        return () => {
            if (inputToggle) {
                inputToggle.removeEventListener("click", onInputClick);
            }
            document.body.removeEventListener("click", onBodyClick);
        };
    }, []);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);

        return () => clearTimeout(handler);
    }, [searchTerm]);

    const { data: filteredProducts = [], isFetching, error } = useQuery({
        queryKey: ["get-product-by-search", debouncedSearchTerm],
        queryFn: () => getProductsBySearch(debouncedSearchTerm),
        enabled: !!debouncedSearchTerm,
    });

    if (error) {
        console.error(error);
    }

    return (
        <div ref={modalRef} className="space-y-2 w-1/3 flex flex-col justify-center items-center">
            <Label htmlFor="search-input" className="sr-only">Pesquisar</Label>
            <div className="relative">
                <Input
                    id="search-input"
                    className={`peer pe-9 ps-9 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 text-zinc-900 webkit-input-search-none !ring-0 bg-white ${isOpen ? "rounded-none rounded-t" : "rounded"}`}
                    placeholder="Buscar..."
                    type="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                    {isFetching ? (
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
                {isOpen && searchTerm && (
                    <div
                        data-state={isOpen ? "open" : "closed"}
                        className={`absolute top-full z-50 min-w-[8rem] max-w-full overflow-hidden rounded-md border bg-popover p-2 text-popover-foreground shadow-md 
                                data-[state=open]:animate-in data-[state=closed]:animate-out 
                                data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
                                data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95`}
                    >
                        <header className="m-2 flex items-center justify-between">
                            <h4 className="font-light text-sm leading-none">
                                Produtos
                            </h4>
                        </header>

                        <ScrollArea className="h-72 p-2">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product: Product, index: number) => (
                                    <>
                                        <Link href={`/product/${slugify(product.title, { lower: true })}`} key={index} className="w-full cursor-pointer max-w-60 py-1 flex gap-4 transition-all duration-150 hover:bg-zinc-100 hover:rotate-1 hover:text-accent-foreground">
                                            <Image
                                                className="w-14 h-14 max-w-16 rounded-md"
                                                src={product.media[0]}
                                                width={60}
                                                height={60}
                                                alt={product.title}
                                                quality={100}
                                                loading="lazy"
                                                draggable={false}
                                            />
                                            <div className="flex gap-2 flex-col justify-between h-full">
                                                <h3 className="max-w-full text-sm line-clamp-1">
                                                    {product.title}
                                                </h3>
                                                <p className="max-w-full text-xs font-thin">
                                                    {formatPrice(product.price)}
                                                </p>
                                            </div>
                                        </Link>
                                        <Separator className="my-2" />
                                    </>
                                ))
                            ) : (
                                <p className="text-sm text-muted-foreground">
                                    Nenhum resultado encontrado.
                                </p>
                            )}
                        </ScrollArea>
                        <Separator className="my-1" />
                        <footer className="w-full flex items-center justify-center  hover:underline transition-colors cursor-pointer rounded-md">
                            <Link className="text-sm" href={`/search/${searchTerm}`}>
                                Ver mais
                            </Link>
                        </footer>
                    </div>
                )}
            </div>
        </div>
    );
};

// const MobileDrawerButton = () => {
//     return (
//         <Drawer direction="top">
//             <DrawerTrigger>
//                 <Search className="!size-full" size={24} strokeWidth={2} aria-hidden="true" />
//             </DrawerTrigger>
//             <DrawerContent>
//                 <DrawerHeader>
//                     <DrawerTitle>Are you absolutely sure?</DrawerTitle>
//                     <DrawerDescription>This action cannot be undone.</DrawerDescription>
//                 </DrawerHeader>
//                 <DrawerFooter>
//                     <Button>Submit</Button>
//                     <DrawerClose>
//                         <Button variant="outline">Cancel</Button>
//                     </DrawerClose>
//                 </DrawerFooter>
//             </DrawerContent>
//         </Drawer>
//     )
// }