import { Input } from "@/components/ui/input"
import { StateInput } from "./state-input"
import { Control } from "react-hook-form"
import { withMask } from "use-mask-input";
import { AddressSchema } from "../form"
import { FormControl, FormField, FormItem } from "@/components/ui/form"

export const AddressFields = ({ control }: { control: Control<AddressSchema> }) => {
    return (
        <div className="space-y-2">
            <legend className="text-sm font-medium text-foreground">Endereço <span className="text-destructive">*</span></legend>

            <div className="rounded-lg shadow-sm shadow-black/5">
                <div className="-mt-px flex">
                    <div className="flex-1 min-w-0 focus-within:z-10">
                        <FormField
                            control={control}
                            name="address.street"
                            render={({ field }) => (
                                <FormItem className="space-y-2">
                                    <FormControl>
                                        <Input
                                            className="rounded-b-none rounded-r-none shadow-none [direction:inherit]"
                                            placeholder="Rua"
                                            type="text"
                                            required
                                            {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex-1 -ms-px min-w-0 focus-within:z-10">
                        <FormField
                            control={control}
                            name="address.street_number"
                            render={({ field }) => (
                                <FormItem className="space-y-2">
                                    <FormControl>
                                        <Input
                                            className="rounded-b-none rounded-l-none shadow-none [direction:inherit]"
                                            placeholder="Número da rua"
                                            type="text"
                                            {...field} />
                                    </FormControl>
                                </FormItem>

                            )}
                        />
                    </div>
                </div>
                <div className="relative focus-within:z-10">
                    <FormField
                        control={control}
                        name="address.complement"
                        render={({ field }) => (
                            <FormItem className="space-y-2">
                                <FormControl>
                                    <Input
                                        className="peer rounded-none pe-9 shadow-none [direction:inherit]"
                                        placeholder="Complemento"
                                        type="text"
                                        required
                                        {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
                <div className="relative focus-within:z-10">
                    <FormField
                        control={control}
                        name="address.CEP"
                        render={({ field }) => (
                            <FormItem className="space-y-2">
                                <FormControl>
                                    <Input
                                        className="peer rounded-none pe-9 shadow-none [direction:inherit]"
                                        placeholder="CEP"
                                        type="text"
                                        required
                                        {...field}
                                        ref={withMask("99999-999", {
                                            placeholder: "",
                                            showMaskOnHover: false,
                                        })} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
                <div className="-mt-px flex">
                    <div className="flex-1 min-w-0 focus-within:z-10">
                        <div className="relative focus-within:z-10">
                            <FormField
                                control={control}
                                name="address.district"
                                render={({ field }) => (
                                    <FormItem className="space-y-2">
                                        <FormControl>
                                            <Input
                                                className="rounded-none shadow-none [direction:inherit]"
                                                placeholder="Bairro"
                                                type="text"
                                                required
                                                {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <div className="flex-1 -ms-px min-w-0 focus-within:z-10">
                        <FormField
                            control={control}
                            name="address.city"
                            render={({ field }) => (
                                <FormItem className="space-y-2">
                                    <FormControl>
                                        <Input
                                            className="rounded-none shadow-none [direction:inherit]"
                                            placeholder="Cidade"
                                            type="text"
                                            required
                                            {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="space-y-2 flex-1 -ms-px win-w-0 focus-within:z-10">
                        <FormField
                            control={control}
                            name="address.state"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <StateInput
                                            value={field.value}
                                            onChange={(value) => field.onChange(value)}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}