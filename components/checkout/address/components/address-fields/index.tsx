import { Input } from "@/components/ui/input"
import { DistrictInput } from "./district-input"
import { UseFormRegister, Controller, Control } from "react-hook-form"
import { AddressSchema } from "../form"

export const AddressFields = ({
    register,
    control,
}: {
    register: UseFormRegister<AddressSchema>;
    control: Control<AddressSchema>;
}) => {
    return (
        <div className="space-y-2">
            <legend className="text-sm font-medium text-foreground">Endereço</legend>
            <div className="rounded-lg shadow-sm shadow-black/5">
                <div className="-mt-px flex">
                    <div className="flex-1 min-w-0 focus-within:z-10">
                        <Input
                            placeholder="Rua"
                            className="rounded-b-none rounded-r-none shadow-none [direction:inherit]"
                            {...register('address.street')}
                        />
                    </div>
                    <div className="flex-1 -ms-px min-w-0 focus-within:z-10">
                        <Input
                            placeholder="Número"
                            className="rounded-b-none rounded-l-none shadow-none [direction:inherit]"
                            {...register('address.street_number')}
                        />
                    </div>
                </div>
                <div className="relative focus-within:z-10">
                    <Input
                        placeholder="Complemento"
                        className="peer rounded-none pe-9 shadow-none [direction:inherit]"
                        {...register('address.complement')}
                    />
                </div>
                <div className="relative focus-within:z-10">
                    <Input
                        placeholder="CEP"
                        className="peer rounded-none pe-9 shadow-none [direction:inherit]"
                        {...register('address.CEP')}
                    />
                </div>
                <div className="-mt-px flex">
                    <div className="flex-1 min-w-0 focus-within:z-10">
                        <Input
                            placeholder="Bairro"
                            className="rounded-t-none rounded-r-none shadow-none [direction:inherit]"
                            {...register('address.district')}
                        />
                    </div>
                    <div className="flex-1 -ms-px min-w-0 focus-within:z-10">
                        <Input
                            placeholder="Cidade"
                            className="rounded-none shadow-none [direction:inherit]"
                            {...register('address.city')}
                        />
                    </div>
                    <Controller
                        name="address.district"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <DistrictInput
                                value={field.value}
                                onChange={(value) => field.onChange(value)}
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    )
}