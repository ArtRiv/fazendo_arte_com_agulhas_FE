"use client"

import { CartProvider } from "react-use-cart"
import { Footer } from "../footer"
import { Header } from "../header"
import { SidebarComponent } from "../sidebar"
import { SidebarProvider } from "../ui/sidebar"

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider defaultOpen={false}>
            <CartProvider>
                <Header />
                <SidebarComponent/>
            </CartProvider>
            <main className="my-12">
                {children}
            </main>
            <Footer />
        </SidebarProvider>
    )
} 