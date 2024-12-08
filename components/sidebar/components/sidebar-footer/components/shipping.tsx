import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { withMask } from "use-mask-input";
import { LoaderCircle } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react"
import { formatPrice } from "@/utils/format-price";

// Mock shipping option choosing system, replace with real one
type shippingOption = {
    name: string,
    service_code: number,
    price: number,
}

export const Shipping = ({hasItems}: {hasItems: boolean}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [shippingOption, setShippingOption] = useState<shippingOption>();

    const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setShowOptions(true);
        }, 2500);
    };

    return (
        <>
            <span className={`text-sm font-bold ${hasItems ? "" : "opacity-50"}`}>Frete</span>
            <div className="flex flex-col gap-1">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={"secondary"} className="p-0 m-0 h-auto underline" disabled={!hasItems}>Calcular</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 px-3 py-3 shadow-xl border border-zinc-500">
                        <DropdownMenuLabel>Calcular frete de entrega</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <div className="group relative border border-zinc-600 rounded-md">
                            <label
                                htmlFor="CEP-input"
                                className="absolute start-1 top-0 z-10 block -translate-y-1/2 bg-background text-xs font-medium text-zinc-600"
                            >
                                <span className="inline-flex bg-background px-2">Insira seu CEP</span>
                            </label>
                            <div className="flex rounded-lg shadow-sm shadow-black/5">
                                <Input
                                    className="border-none outline-none focus:outline-none rounded-l-md rounded-r-none"
                                    disabled={isLoading}
                                    id="CEP-input"
                                    placeholder="00000-000"
                                    type="text"
                                    ref={withMask("99999-999", {
                                        placeholder: "",
                                        showMaskOnHover: false,
                                    })}
                                />
                                <button
                                    className="inline-flex items-center justify-center rounded-e-lg border-l border-zinc-400 bg-background px-3 text-sm font-medium text-zinc-600 outline-offset-2 transition-colors hover:bg-accent hover:text-zinc-800 focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:cursor-not-allowed disabled:opacity-50"
                                    onClick={handleClick}
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <LoaderCircle
                                            className="animate-spin"
                                            size={16}
                                            strokeWidth={2}
                                            aria-hidden="true"
                                        />
                                    ) : null}
                                    {isLoading ? "" : "Calcular"}
                                </button>
                            </div>
                        </div>
                        {showOptions &&
                            <>
                                <DropdownMenuSeparator />
                                <ShippingOptions setShippingOption={setShippingOption} />
                            </>
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
                {shippingOption &&
                    <span className="text-sm leading-3">
                        {formatPrice(shippingOption.price)}
                    </span>
                }
            </div>
        </>
    )
}

interface ShippingOptionsProps {
    setShippingOption: Dispatch<SetStateAction<shippingOption | undefined>>;
}

const ShippingOptions = ({ setShippingOption }: ShippingOptionsProps) => {
    return (
        <div className="py-3 flex flex-col gap-3">
            <RadioGroup
                className="gap-6"
                onValueChange={(value) => {
                    if (value === "sedex") {
                        setShippingOption({
                            name: "sedex",
                            price: 18.37,
                            service_code: 1,
                        });
                    } else if (value === "pac") {
                        setShippingOption({
                            name: "pac",
                            price: 12.84,
                            service_code: 7,
                        });
                    }
                }}
            >
                <div className="flex items-start gap-2">
                    <RadioGroupItem
                        value="sedex"
                        id="sedex-option"
                        aria-describedby="sedex-option-description"
                    />
                    <div className="grid grow gap-2">
                        <Label htmlFor="sedex-option">
                            Sedex{" "}
                            <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
                                {formatPrice(18.37)}
                            </span>
                        </Label>
                        <p id="sedex-option-description" className="text-xs text-muted-foreground">
                            Entrega de 10 a 15 dias úteis
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-2">
                    <RadioGroupItem
                        value="pac"
                        id="pac-option"
                        aria-describedby="pac-option-description"
                    />
                    <div className="grid grow gap-2">
                        <Label htmlFor="pac-option">
                            Pac{" "}
                            <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
                                {formatPrice(12.84)}
                            </span>
                        </Label>
                        <p id="pac-option-description" className="text-xs text-muted-foreground">
                            Entrega de 15 a 20 dias úteis
                        </p>
                    </div>
                </div>
            </RadioGroup>
        </div>
    )
}