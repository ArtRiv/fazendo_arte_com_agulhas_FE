"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"

const categories: { title: string, description: string, image: string }[] = [
    {
        title: 'Todos',
        description: 'Explore toda a nossa coleção de peças de crochê!',
        image: 'https://i.ibb.co/r04HC67/fern.jpg',
    },
    {
        title: 'Animes',
        description: 'Encontre seu personagem favorito de animes como Demon Slayer, Sousou no Frieren, Chainsaw Man e muitos outros!',
        image: 'https://i.ibb.co/NjdLy09/frieren.jpg',
    },
    {
        title: 'Jogos',
        description: 'Adicione diversão à sua coleção com personagens e itens em crochê inspirados em jogos populares como Genshin, LoL e Valorant!',
        image: 'https://i.ibb.co/c3t2Rm3/nahida-1.jpg',
    },
    {
        title: 'Geek',
        description: 'Celebre o seu lado geek com criações em crochê dos seus universos favoritos, incluindo super-heróis, ficção científica e mais!',
        image: 'https://i.ibb.co/c3t2Rm3/nahida-1.jpg',
    },
    {
        title: 'Princesas',
        description: 'Dê vida aos contos de fadas com princesas e personagens mágicos feitos em crochê.',
        image: 'https://i.ibb.co/c3t2Rm3/nahida-1.jpg'
    },
    {
        title: 'Religioso',
        description: 'Descubra peças inspiradoras em crochê, incluindo anjos, cruzes e outros designs de fé.',
        image: 'https://i.ibb.co/c3t2Rm3/nahida-1.jpg'
    },
    {
        title: 'Pelúcias',
        description: 'Abrace a fofura com pelúcias em crochê, incluindo animais, personagens e designs encantadores.',
        image: 'https://i.ibb.co/c3t2Rm3/nahida-1.jpg'
    }
];


export function NavMenu() {
    return (
        <NavigationMenu className="z-50">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Produtos</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {categories.map((category) => (
                                <ListItem
                                    key={category.title}
                                    title={category.title}
                                    src={category.image}
                                >
                                    {category.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Sobre</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[510px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col rounded-md p-4 no-underline outline-none focus:shadow-md [background:_var(--gradient-background)]"
                                        href="/"
                                    >
                                        <div className="mb-2 mt-2 text-lg font-bold">
                                            Fazendo arte com agulhas
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Loja de amigurumis feitos sob-encomenda, todos confeccionados a mão com muito amor e carinho!
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/about/our-story" title="Nossa história">
                                Conheça como transformamos paixão por amigurumis em arte única.
                            </ListItem>
                            <ListItem href="/about/the-creator" title="A artesã">
                                Descubra mais sobre quem está por trás dos amigurumis, sua jornada e experiência!
                            </ListItem>
                            <ListItem href="/about/amigurumis" title="O que são Amigurumis?">
                                Explore a história e o encanto dessa arte japonesa que conquistou o mundo.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/faq" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            FAQ
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { src?: string; title: string }
>(({ className, title, src, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild className="flex flex-col justify-center items-center cursor-pointer">
                <a
                    ref={ref}
                    className={cn(
                        "block select-none relative space-y-1 rounded-md p-3 leading-none transition-all duration-150 hover:bg-zinc-200 hover:rotate-1 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground srccursor-pointer",
                        src ? "pl-16" : "",
                        className
                    )}
                    {...props}
                >
                    {src &&
                        <Image className="absolute left-2 rounded-md" alt="The sun goes down" width={50} height={50} src={src} />
                    }
                    <div className="w-full text-left text-sm font-bold leading-none underline">{title}</div>
                    <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

