import {
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { MapPinHouse } from "lucide-react";
import { CustomForm } from "./components/form";
import { Dispatch, SetStateAction } from "react";
import { ShippingOption } from "@/types/shipping/shipping_options";

interface AddressFormProps {
    handleContinue: () => void,
    setShippingOptions: Dispatch<SetStateAction<ShippingOption[] | undefined>>
}

export const AddressForm = ({ handleContinue, setShippingOptions }: AddressFormProps) => {
    return (
        <div className="px-4">
            <DialogHeader className="mb-2 flex flex-row gap-4">
                <div
                    className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
                    aria-hidden="true"
                >
                    <MapPinHouse className="opacity-80" size={16} strokeWidth={2} />
                </div>
                <div>
                    <DialogTitle className="text-left text-md">Detalhes do Endereço</DialogTitle>
                    <DialogDescription className="text-left">
                        Insira as informações necessárias para o envio do seu pedido.
                    </DialogDescription>
                </div>
            </DialogHeader>
            <CustomForm handleContinue={handleContinue} setShippingOptions={setShippingOptions} />
        </div>
    )
}