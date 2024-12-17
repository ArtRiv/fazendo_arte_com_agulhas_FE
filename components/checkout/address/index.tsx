import { Button } from "@/components/ui/button";
import {
    DialogClose,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRight, MapPinHouse } from "lucide-react";
import { cn } from "@/lib/utils";
import { UserFields } from "../components/user-fields";
import { AddressFields } from "../components/address-fields";
;

export const AddressForm = () => {
    return (
        <div>
            <div className="mb-2 flex gap-4">
                <div
                    className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
                    aria-hidden="true"
                >
                    <MapPinHouse className="opacity-80" size={16} strokeWidth={2} />
                </div>
                <DialogHeader>
                    <DialogTitle className="text-left text-md">Detalhes do Endereço</DialogTitle>
                    <DialogDescription className="text-left">
                        Insira as informações necessárias para o envio do seu pedido.
                    </DialogDescription>
                </DialogHeader>
            </div>
            <form className="space-y-5">
                <div className="space-y-4">
                    <UserFields />
                    <AddressFields />
                </div>
            </form>
        </div>
    )
}