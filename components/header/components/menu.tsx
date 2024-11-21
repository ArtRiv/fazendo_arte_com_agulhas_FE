"use client";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useRef, useState } from "react";
import { UserMenu } from "./user-menu";
import { useCart } from "react-use-cart";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const MenuButton = () => {
    const [open, setOpen] = useState<boolean>(false);
    const dropdownContentRef = useRef<HTMLDivElement | null>(null);
    const dropdownButtonRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        window.addEventListener('click', onClick);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('click', onClick);
        };
    }, []);

    const onScroll = () => {
        setOpen(false)
    };
    const onClick = (event: MouseEvent) => {
        const target = event.target as Node;
        if (
            !dropdownContentRef.current?.contains(target) &&
            !dropdownButtonRef.current?.contains(target)
        ) {
            setOpen(false);
        }
    }

    return (
        <DropdownMenu modal={false} open={open}>
            <div ref={dropdownButtonRef}>
                <TooltipProvider delayDuration={0}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    className="group border-2 border-zinc-300 shadow-xl"
                                    variant="outline"
                                    size="icon"
                                    onClick={() => setOpen((prevState) => !prevState)}
                                    aria-expanded={open}
                                    aria-label={open ? "Close menu" : "Open menu"}
                                >
                                    <svg
                                        className="pointer-events-none"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4 12L20 12"
                                            className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                                        />
                                        <path
                                            d="M4 12H20"
                                            className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                                        />
                                        <path
                                            d="M4 12H20"
                                            className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                                        />
                                    </svg>
                                </Button>
                            </DropdownMenuTrigger>
                        </TooltipTrigger>
                        <TooltipContent className="border border-input bg-popover px-2 py-1 text-xs text-muted-foreground">
                            Menu
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <DropdownMenuContent ref={dropdownContentRef} className="w-auto flex flex-col gap-1 shadow-2xl border-zinc-300">
                    <DropdownMenuLabel>Menu</DropdownMenuLabel>
                    <MyCartMenuItem/>
                    <DropdownMenuItem className="cursor-pointer">Minhas compras</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">Acompanhar pedidos</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                    <UserMenu />
                </DropdownMenuContent>
            </div>
        </DropdownMenu>
    );
};

const MyCartMenuItem = () => {
    const { isEmpty, cartTotal } = useCart();

    if (isEmpty) {
        return (
            <>
                <DropdownMenuItem className="cursor-pointer">Meu carrinho</DropdownMenuItem>
            </>
        )
    }

    return (
        <DropdownMenuItem className="cursor-pointer flex items-center justify-between">
            <SidebarTrigger className="w-full opacity-0 absolute"/>
            <p>
                Meu carrinho
            </p>
            <div className="flex items-center gap-0.5">
                <p className="text-red-700">
                    {cartTotal}
                </p>
                <ShoppingBag className="stroke-red-700" width={16} height={16}/>
            </div>
        </DropdownMenuItem>
    )
}