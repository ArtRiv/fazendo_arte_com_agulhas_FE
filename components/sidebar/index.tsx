"use client"

import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "../ui/sidebar"
import { Calendar, Home, Inbox, Search, Settings, ShoppingCart, X } from "lucide-react"
import { Switch } from "../ui/switch"
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
    const { setOpen, open } = useSidebar();
    return (
        <Sidebar side="right">
            <Button className="size-8 p-5 rounded-sm border-l border-t border-zinc-300 absolute bottom-0 left-[-41px]" variant={"ghost"} onClick={() => setOpen(!open)}>
                <ShoppingCart className="!w-8 !h-8 stroke-zinc-600" />
            </Button>
            <SidebarHeader className="gap-3.5 border-b px-4 py-2">
                <div className="flex w-full items-center justify-end">
                    <div className="text-base font-medium text-zinc-800">
                        Carrinho
                    </div>
                </div>
                <SidebarInput placeholder="Type to search..." />
            </SidebarHeader>
            <SidebarContent className="px-4 py-2">
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

const sidebarsdsds = () => {
    return (
        <Sidebar collapsible="none" className="hidden flex-1 md:flex">
            <SidebarHeader className="gap-3.5 border-b p-4">
                <div className="flex w-full items-center justify-between">
                    <div className="text-base font-medium text-foreground">
                        Carrinho
                    </div>
                </div>
                <SidebarInput placeholder="Type to search..." />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup className="px-0">
                    <SidebarGroupContent>
                        {/* {mails.map((mail) => (
                            <a
                                href="#"
                                key={mail.email}
                                className="flex flex-col items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                            >
                                <div className="flex w-full items-center gap-2">
                                    <span>{mail.name}</span>{" "}
                                    <span className="ml-auto text-xs">{mail.date}</span>
                                </div>
                                <span className="font-medium">{mail.subject}</span>
                                <span className="line-clamp-2 w-[260px] whitespace-break-spaces text-xs">
                                    {mail.teaser}
                                </span>
                            </a>
                        ))} */}
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}