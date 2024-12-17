import { Button } from "@/components/ui/button"
import { Star } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Reviews } from "./reviews";


export const ReviewSection = () => {
    return (
        <section className="mt-16 flex flex-col gap-6 flex-wrap justify-center max-w-[60rem] px-12 mx-auto">
            <ReviewMenu />
            <Reviews />
        </section>
    )
}

const ReviewMenu = () => {
    return (
        <div className="w-full px-6 py-4 rounded-md [background:_var(--gradient-background)]">
            <h2 className="text-2xl font-medium text-center">Avaliações</h2>
            <div className="px-3 py-4 w-full flex justify-between">
                <div className="flex flex-col justify-center items-center gap-2 w-1/3 my-auto">
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center text-yellow-400" aria-hidden="true">
                            <Star size={20} className="fill-yellow-400" />
                            <Star size={20} className="fill-yellow-400" />
                            <Star size={20} className="fill-yellow-400" />
                            <Star size={20} className="fill-yellow-400" />
                            <Star size={20} className="fill-yellow-400" />
                        </span>
                        <Label className="text-xs font-thin opacity-70">
                            5 de 5 estrelas
                        </Label>
                    </div>
                    <p className="text-sm opacity-80">Baseado em 7 avaliações</p>
                </div>
                <RadioGroup defaultValue="all">
                    <div className="flex items-center gap-2">
                        <RadioGroupItem value="all" id="radio-06-all" />
                        <Label htmlFor="radio-06-all">
                            Todas avaliações{" "}
                            <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
                                (7)
                            </span>
                        </Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <RadioGroupItem value="5-stars" id="radio-06-5-stars" />
                        <Label htmlFor="radio-06-5-stars" className="inline-flex items-center gap-1">
                            <span className="inline-flex items-center text-yellow-400" aria-hidden="true">
                                <Star size={16} className="fill-yellow-400" />
                                <Star size={16} className="fill-yellow-400" />
                                <Star size={16} className="fill-yellow-400" />
                                <Star size={16} className="fill-yellow-400" />
                                <Star size={16} className="fill-yellow-400" />
                            </span>
                            <span className="sr-only">5 stars</span>{" "}
                            <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
                                (7)
                            </span>
                        </Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <RadioGroupItem value="4-stars" id="radio-06-4-stars" />
                        <Label htmlFor="radio-06-4-stars" className="inline-flex items-center gap-1">
                            <span className="inline-flex items-center text-yellow-400" aria-hidden="true">
                                <Star size={16} className="fill-yellow-400" />
                                <Star size={16} className="fill-yellow-400" />
                                <Star size={16} className="fill-yellow-400" />
                                <Star size={16} className="fill-yellow-400" />
                                <Star size={16} className="fill-yellow-400 opacity-30" />
                            </span>
                            <span className="sr-only">4 stars</span>{" "}
                            <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
                                (0)
                            </span>
                        </Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <RadioGroupItem value="3-stars" id="radio-06-3-stars" />
                        <Label htmlFor="radio-06-3-stars" className="inline-flex items-center gap-1">
                            <span className="inline-flex items-center text-yellow-400" aria-hidden="true">
                                <Star size={16} className="fill-yellow-400" />
                                <Star size={16} className="fill-yellow-400" />
                                <Star size={16} className="fill-yellow-400" />
                                <Star size={16} className="fill-yellow-400 opacity-30" />
                                <Star size={16} className="fill-yellow-400 opacity-30" />
                            </span>
                            <span className="sr-only">3 stars</span>{" "}
                            <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
                                (0)
                            </span>
                        </Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <RadioGroupItem value="2-stars" id="radio-06-2-stars" />
                        <Label htmlFor="radio-06-2-stars" className="inline-flex items-center gap-1">
                            <span className="inline-flex items-center text-yellow-400" aria-hidden="true">
                                <Star size={16} className="fill-yellow-400" />
                                <Star size={16} className="fill-yellow-400" />
                                <Star size={16} className="fill-yellow-400 opacity-30" />
                                <Star size={16} className="fill-yellow-400 opacity-30" />
                                <Star size={16} className="fill-yellow-400 opacity-30" />
                            </span>
                            <span className="sr-only">2 stars</span>{" "}
                            <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
                                (0)
                            </span>
                        </Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <RadioGroupItem value="1-star" id="radio-06-1-star" />
                        <Label htmlFor="radio-06-1-star" className="inline-flex items-center gap-1">
                            <span className="inline-flex items-center text-yellow-400" aria-hidden="true">
                                <Star size={16} className="fill-yellow-400" />
                                <Star size={16} className="fill-yellow-400 opacity-30" />
                                <Star size={16} className="fill-yellow-400 opacity-30" />
                                <Star size={16} className="fill-yellow-400 opacity-30" />
                                <Star size={16} className="fill-yellow-400 opacity-30" />
                            </span>
                            <span className="sr-only">1 star</span>{" "}
                            <span className="text-xs font-normal leading-[inherit] text-muted-foreground">(0)</span>
                        </Label>
                    </div>
                </RadioGroup>
                <Button variant="outline" className="w-1/3 my-auto border-fuchsia-200 py-3 shadow-xl">
                    Avaliar
                </Button>
            </div>
        </div>
    )
}