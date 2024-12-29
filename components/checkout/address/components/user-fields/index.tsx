import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { withMask } from "use-mask-input";
import { AddressSchema } from "../form";

export const UserFields = ({ register }: { register: UseFormRegister<AddressSchema> }) => {
    return (
        <>
            <div className="space-y-2">
                <Label htmlFor="name-input">
                    Nome completo <span className="text-destructive">*</span>
                </Label>
                <Input id="name-input" placeholder="Insira seu nome completo" type="text" required {...register('user.name')} />
            </div>
            <div className="space-y-2">
                <div className="flex items-center justify-between gap-1">
                    <Label htmlFor="email-input" className="leading-6">
                        E-mail
                    </Label>
                    <span className="text-sm text-muted-foreground">Opcional</span>
                </div>
                <Input id="email-input" placeholder="Insira seu E-mail" type="email" className="!mt-2" {...register('user.email')} />
            </div>
            <div className="space-y-2">
                <div className="flex items-center justify-between gap-1">
                    <Label htmlFor="phone-input" className="leading-6">
                        Número de telefone
                    </Label>
                    <span className="text-sm text-muted-foreground">Opcional</span>
                </div>
                <Input
                    id="phone-input"
                    type="text"
                    placeholder="Insira seu número de telefone"
                    {...register('user.phone_number')}
                    ref={withMask("(99) 99999-9999", {
                        placeholder: "",
                        showMaskOnHover: false,
                    })}
                />
            </div>
        </>
    );
};