"use client"

import { useForm } from "react-hook-form"
import { AddressFields } from "./address-fields"
import { UserFields } from "./user-fields"
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Form } from "@/components/ui/form";
import { Dispatch, SetStateAction, useState } from "react";
import { ShippingOption } from "@/types/shipping/shipping_options";

const AddressSchema = z.object({
    user: z.object({
        name: z.string(),
        email: z.string().optional(),
        phone_number: z.string().optional(),
    }),
    address: z.object({
        street: z.string(),
        street_number: z.string(),
        complement: z.string(),
        CEP: z.string(),
        district: z.string(),
        city: z.string(),
        state: z.string()
    })
});

export type AddressSchema = z.infer<typeof AddressSchema>;

interface CustomFormProps {
    handleContinue: () => void
    setShippingOptions: Dispatch<SetStateAction<ShippingOption[] | undefined>>
}

export const CustomForm = ({ handleContinue, setShippingOptions }: CustomFormProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<AddressSchema>({
        resolver: zodResolver(AddressSchema),
        defaultValues: {
            address: {
                CEP: "",
                city: "",
                complement: "",
                district: "",
                state: "",
                street: "",
                street_number: "",
            },
            user: {
                email: "",
                name: "",
                phone_number: "",
            }
        }
    })

    async function handleSubmit(data: AddressSchema) {
        setIsLoading(true);
        try {
            const user_CEP = data.address.CEP;
            const res = await fetch("http://localhost:3000/api/superfrete-shipping", {
                method: "POST",
                body: JSON.stringify({ user_CEP }),
            });

            const shipping_options = await res.json();

            setShippingOptions(shipping_options);
            handleContinue();

        } catch (error) {
            console.error(error || "Failed to fetch client secret");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
                <UserFields register={form.register} />
                <AddressFields register={form.register} control={form.control} />
                <DialogFooter>
                    <div className="w-full flex flex-col justify-between gap-4 sm:flex-row sm:items-center items-end mt-auto">
                        <div className="flex justify-center space-x-1.5 max-sm:order-1">
                            {[...Array(2)].map((_, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        "h-1.5 w-1.5 rounded-full bg-primary",
                                        index < 1 ? "bg-primary" : "opacity-20",
                                    )}
                                />
                            ))}
                        </div>
                        <Button
                            variant={"outline"}
                            className="group"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <LoaderCircle
                                        className="-ms-1 me-2 animate-spin"
                                        size={16}
                                        strokeWidth={2}
                                        aria-hidden="true"
                                    />
                                    Carregando...
                                </>
                            ) : (
                                <>
                                    Avançar
                                    <ArrowRight
                                        className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                                        size={16}
                                        strokeWidth={2}
                                        aria-hidden="true"
                                    />
                                </>
                            )}
                        </Button>
                    </div>
                </DialogFooter>
            </form>
        </Form>
    )
}