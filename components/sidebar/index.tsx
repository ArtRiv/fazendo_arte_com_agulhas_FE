"use client"

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import { Calendar, ChevronsUpDown, Home, Inbox, LogIn, LogOut, Search, Settings, User, } from "lucide-react"
import { NavUser } from "../nav-user"
import { SignInButton, SignedIn, SignedOut, useUser } from "@clerk/nextjs"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Skeleton } from "../ui/skeleton"
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
    const { isSignedIn, user } = useUser();

    const navUser = user ? {
        name: user.firstName,
        email: user.primaryEmailAddress?.emailAddress,
        avatar: user.imageUrl,
    } : null

    return (
        <Sidebar side="right" className="z-50">
            <SidebarHeader className="gap-3.5 border-b px-4 py-2">
                <SignedOut>
                    <SignInButton>
                        <div className="flex gap-2 items-center justify-between cursor-pointer group">
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage alt={'usuário'} />
                                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate text-sm font-semibold">Visitante</span>
                                <span className="truncate text-xs">Logar</span>
                            </div>
                            <ChevronsUpDown className="ml-auto size-4" />                        </div>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    {navUser &&
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <NavUser user={navUser} />
                            </SidebarMenuItem>
                        </SidebarMenu>
                    }
                </SignedIn>
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