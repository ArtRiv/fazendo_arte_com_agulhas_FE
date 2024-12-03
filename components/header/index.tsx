"use client"

import { useEffect, useRef } from "react";
import { Logo } from "./components/logo";
import { SearchInput } from "./components/search";
import { HeaderToolBar } from "./components/menu-cart-button";
import './styles/style.css'
import { CartProvider } from "react-use-cart";
import { SidebarProvider } from "../ui/sidebar";
import { SidebarComponent } from "../sidebar";
import { NavMenu } from "./components/nav-bar";

export const Header = () => {
    const headerRef = useRef<HTMLDivElement | null>(null);
    const headerBoundsRef = useRef<DOMRect | DOMRectReadOnly | null>(null);
    const currentScrollTopRef = useRef<number>(0);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const header = headerRef.current;
        if (header) {
            createObserver(header);
        }

        const onScrollHandler = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            onScroll(scrollTop);
        };

        window.addEventListener('scroll', onScrollHandler, false);

        return () => {
            window.removeEventListener('scroll', onScrollHandler, false);
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    const createObserver = (header: Element) => {
        const observer = new IntersectionObserver((entries) => {
            headerBoundsRef.current = entries[0].intersectionRect;
            observer.disconnect();
        });

        observer.observe(header);
        observerRef.current = observer;
    };

    const onScroll = (scrollTop: number) => {
        const header = headerRef.current;
        const headerBounds = headerBoundsRef.current;

        if (!headerBounds || !header) {
            return;
        }

        const currentScrollTop = currentScrollTopRef.current;
        console.log("Scrolltop: " + scrollTop);
        console.log("CurrentScrollTop: " + currentScrollTop);
        console.log(headerBounds.bottom);

        if (scrollTop > currentScrollTop && scrollTop > headerBounds.bottom) {
            header.classList.add('scrolled-past-header', 'header-sticky');
            requestAnimationFrame(hide);
        } else if (scrollTop < currentScrollTop && scrollTop > headerBounds.bottom) {
            header.classList.add('scrolled-past-header', 'header-sticky');
            requestAnimationFrame(reveal);
        } else if (scrollTop <= headerBounds.top) {
            header.classList.remove('scrolled-past-header');
            requestAnimationFrame(reset);
        }

        currentScrollTopRef.current = scrollTop;
    };

    const hide = () => {
        const header = headerRef.current;
        if (!header) return;
        header.classList.add('header-hidden');
    };

    const reveal = () => {
        const header = headerRef.current;
        if (!header) return;
        header.classList.add('header-sticky', 'animate');
        header.classList.remove('header-hidden');
    };

    const reset = () => {
        const header = headerRef.current;
        if (!header) return;
        header.classList.remove('header-hidden', 'header-sticky', 'animate');
    };

    return (
        <SidebarProvider defaultOpen={false}>
            <CartProvider>
                <header className="section-header" ref={headerRef}>
                    <div className="max-w-[100rem] h-full my-0 mx-auto 
                    p-3 sm:px-12 sm:py-3 md:px-24 md:py-5 
                    flex items-center justify-between">
                        <SearchInput/>
                        <div className="w-1/3 flex flex-col gap-2 justify-center items-center">
                            <Logo/>
                            <NavMenu/>
                        </div>
                        <HeaderToolBar/>
                    </div>
                </header>
                <SidebarComponent />
            </CartProvider>
        </SidebarProvider>
    );
} 