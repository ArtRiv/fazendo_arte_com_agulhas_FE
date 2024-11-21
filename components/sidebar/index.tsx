"use client"

import { Button } from "../ui/button"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "../ui/sidebar"
import { Calendar, Home, Inbox, Search, Settings, X } from "lucide-react"
const items = [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
]

export const SidebarComponent = () => {
    const { setOpen } = useSidebar();
    return (
        <Sidebar side="right">
            <SidebarContent className="p-3">
                <Button className="size-6 p-0 z-10 flex items-center justify-center absolute top-0.5 left-0.5" variant={"ghost"} onClick={() => setOpen(false)}>
                    <X width={24} height={24} className="stroke-red-600" />
                </Button>
                <SidebarGroup>
                    <SidebarGroupLabel>Carrinho</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}