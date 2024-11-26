"use client"

import { useEffect, useRef } from "react";
import { Logo } from "./components/logo";
import { SearchInput } from "./components/search";
import { HeaderToolBar } from "./components/menu-cart-button";

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
        <header className="section-header" ref={headerRef}>
            <div className="max-w-[100rem] h-full my-0 mx-auto px-24 py-5 flex items-center justify-between">
                <SearchInput/>
                <Logo/>
                <HeaderToolBar/>
            </div>
        </header>
    );
}