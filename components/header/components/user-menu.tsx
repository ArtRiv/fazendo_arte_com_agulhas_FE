"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { SignInButton, SignedIn, SignedOut, UserButton, useAuth, useUser } from "@clerk/nextjs";
import { LogIn, LogOut } from "lucide-react";
import Image from "next/image";

export const UserMenu = () => {
    const { signOut } = useAuth();
    const { user } = useUser();

    return (
        <div className="px-2 py-1.5 rounded hover:bg-zinc-100 transition-colors" onClick={(e) => e.stopPropagation()}>
            <SignedOut>
                <SignInButton>
                    <div className="flex items-center justify-between cursor-pointer group">
                        <p className="text-sm">
                            Entrar
                        </p>
                        <LogIn size={16} aria-hidden="true" className="group-hover:scale-110 group-hover:stroke-black transition-all"/>
                    </div>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                {!user && (
                    <Skeleton className="w-[100px] h-[20px] rounded-full" />
                )}
                <div className="flex items-center gap-3">
                    <Image className="rounded" width={32} height={32} alt="imagem perfil" src={"data:image/jpeg;base64,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"} />
                    <p className="text-sm">{user?.fullName}</p>
                    <Button className="rounded-full ml-auto" variant="outline" size="icon" aria-label="Deslogar"
                    onClick={() => signOut()}>
                        <LogOut size={16} aria-hidden="true"/>
                    </Button>
                </div>
            </SignedIn>
        </div>
    );
};