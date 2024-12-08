"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "../ui/button"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel  } from "../ui/sidebar"
import { CartList } from "./components/cart"
import { SidebarHeaderComponent } from "./components/sidebar-header"
import { SidebarFooterComponent } from "./components/sidebar-footer"

export const SidebarComponent = () => {

    return (
        <Sidebar side="right" className="z-50 h-screen">
            <SidebarHeaderComponent/>
            <SidebarContent className="py-2 overflow-hidden">
                <SidebarGroup>
                    <SidebarGroupLabel>Carrinho</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <CartList />
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooterComponent/>
        </Sidebar>
    )
}