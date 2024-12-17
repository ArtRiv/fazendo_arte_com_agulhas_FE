import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"

export function DialogImage({ children, src, alt }: { children: React.ReactNode, src: string, alt: string }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="h-screen w-screen max-w-5xl overflow-y-scroll p-12">
                <Image
                    className="rounded-sm aspect-square"
                    draggable={false}
                    alt={alt}
                    src={src}
                    width={1024}
                    height={1024}
                />
            </DialogContent>
        </Dialog>
    )
}