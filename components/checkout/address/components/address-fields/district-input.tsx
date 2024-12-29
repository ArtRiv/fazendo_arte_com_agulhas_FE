"use client";

import { Check, ChevronDown } from "lucide-react";
import { Fragment, useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type District = {
    name: string;
    abbr: string;
};

type Region = {
    name: string;
    districts: District[];
};

const estados: Region[] = [
    {
        name: "Norte",
        districts: [
            { name: "Acre", abbr: "AC" },
            { name: "Amazonas", abbr: "AM" },
            { name: "Amapá", abbr: "AP" },
            { name: "Pará", abbr: "PA" },
            { name: "Rondônia", abbr: "RO" },
            { name: "Roraima", abbr: "RR" },
            { name: "Tocantins", abbr: "TO" },
        ],
    },
    {
        name: "Nordeste",
        districts: [
            { name: "Alagoas", abbr: "AL" },
            { name: "Bahia", abbr: "BA" },
            { name: "Ceará", abbr: "CE" },
            { name: "Maranhão", abbr: "MA" },
            { name: "Paraíba", abbr: "PB" },
            { name: "Pernambuco", abbr: "PE" },
            { name: "Piauí", abbr: "PI" },
            { name: "Rio Grande do Norte", abbr: "RN" },
            { name: "Sergipe", abbr: "SE" },
        ],
    },
    {
        name: "Centro-Oeste",
        districts: [
            { name: "Distrito Federal", abbr: "DF" },
            { name: "Goiás", abbr: "GO" },
            { name: "Mato Grosso", abbr: "MT" },
            { name: "Mato Grosso do Sul", abbr: "MS" },
        ],
    },
    {
        name: "Sudeste",
        districts: [
            { name: "Espírito Santo", abbr: "ES" },
            { name: "Minas Gerais", abbr: "MG" },
            { name: "Rio de Janeiro", abbr: "RJ" },
            { name: "São Paulo", abbr: "SP" },
        ],
    },
    {
        name: "Sul",
        districts: [
            { name: "Paraná", abbr: "PR" },
            { name: "Santa Catarina", abbr: "SC" },
            { name: "Rio Grande do Sul", abbr: "RS" },
        ],
    },
];

export const DistrictInput = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleSelect = (currentValue: string) => {
        onChange(currentValue);
        setOpen(false);
    };

    return (
        <div className="space-y-2 flex-1 -ms-px min-w-0 focus-within:z-10">
            <Popover modal={false} open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        id="select-state"
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full rounded-t-none rounded-l-none justify-between bg-background px-3 font-normal outline-offset-0 hover:bg-background focus-visible:border-ring focus-visible:outline-[3px] focus-visible:outline-ring/20"
                    >
                        {value ? (
                            <span className="flex min-w-0 items-center gap-2">
                                <span className="text-sm opacity-80">
                                    {
                                        estados
                                            .map((region) =>
                                                region.districts.find((district) => district.name === value)
                                            )
                                            .filter(Boolean)[0]?.abbr
                                    }
                                </span>
                                <span className="truncate">{value}</span>
                            </span>
                        ) : (
                            <span className="text-muted-foreground">Estado</span>
                        )}
                        <ChevronDown
                            size={16}
                            strokeWidth={2}
                            className="shrink-0 text-muted-foreground/80"
                            aria-hidden="true"
                        />
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className="z-50 pointer-events-auto w-full min-w-[var(--radix-popper-anchor-width)] border-input p-0"
                    align="start"

                >
                    <Command>
                        <CommandInput placeholder="Buscar estado..." />
                        <CommandList>
                            <CommandEmpty>Nenhum estado encontrado.</CommandEmpty>
                            {estados.map((region) => (
                                <Fragment key={region.name}>
                                    <CommandGroup heading={region.name}>
                                        {region.districts.map((district) => (
                                            <CommandItem
                                                className="flex items-center gap-3"
                                                key={district.name}
                                                value={district.name}
                                                onSelect={() => handleSelect(district.name)}
                                            >
                                                <span className="text-sm opacity-80">{district.abbr}</span>{" "}
                                                {district.name}
                                                {value === district.name && (
                                                    <Check size={16} strokeWidth={2} className="ml-auto" />
                                                )}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </Fragment>
                            ))}
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
};
