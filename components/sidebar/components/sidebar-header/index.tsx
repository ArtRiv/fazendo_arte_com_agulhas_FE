import { SidebarHeader, useSidebar } from "@/components/ui/sidebar"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export const SidebarHeaderComponent = () => {
    const { setOpen } = useSidebar();

    return (
        <SidebarHeader className="gap-3.5 border-b px-4 pt-4 pb-2">
            <div className="w-full flex flex-row justify-between items-center">
                <h2 className="text-xl font-bold">Meu carrinho</h2>
                <Button onClick={() => setOpen(false)}
                variant="outline" className="rounded-md p-2 m-0 border-zinc-800">
                    <X width={20} height={20}/>
                </Button>
            </div>
        </SidebarHeader>
    )
}