import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { withMask } from "use-mask-input";
import { AddressSchema } from "../form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export const UserFields = ({ control }: { control: Control<AddressSchema> }) => {
    return (
        <>
            <FormField
                control={control}
                name="user.name"
                render={({ field }) => (
                    <FormItem className="space-y-2">
                        <FormLabel>Nome Completo <span className="text-destructive">*</span> </FormLabel>
                        <FormControl>
                            <Input placeholder="Insira seu nome completo" type="text" required {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="user.email"
                render={({ field }) => (
                    <FormItem className="space-y-2">
                        <div className="w-full flex items-center justify-between">
                            <FormLabel>Email</FormLabel>
                            <span className="text-sm text-muted-foreground">Opcional</span>
                        </div>
                        <FormControl>
                            <Input placeholder="Insira seu e-mail" type="email" {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="user.phone_number"
                render={({ field }) => (
                    <FormItem className="space-y-2">
                        <div className="w-full flex items-center justify-between">
                            <FormLabel>Telefone</FormLabel>
                            <span className="text-sm text-muted-foreground">Opcional</span>
                        </div>
                        <FormControl>
                            <Input
                                id="phone-input"
                                type="text"
                                placeholder="Insira seu número de telefone"
                                {...field}
                                ref={withMask("(99) 99999-9999", {
                                    placeholder: "",
                                    showMaskOnHover: false,
                                })}
                            />
                        </FormControl>
                    </FormItem>
                )}
            />
        </>
    );
};