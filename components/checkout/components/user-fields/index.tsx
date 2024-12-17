import { Input } from "@/components/ui/input";
import PhoneNumberInput from "./phone-number-input";
import { Label } from "@/components/ui/label";

export const UserFields = () => {
    return (
        <>
            <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <Input id="name" placeholder="Insira seu nome" type="text" required />
            </div>
            <div className="space-y-2">
                <div className="flex items-center justify-between gap-1">
                    <Label htmlFor="input-04" className="leading-6">
                        E-mail
                    </Label>
                    <span className="text-sm text-muted-foreground">Opcional</span>
                </div>
                <Input id="input-04" placeholder="Insira seu E-mail" type="email" className="!mt-2" />
            </div>
            <PhoneNumberInput />
        </>
    );
};