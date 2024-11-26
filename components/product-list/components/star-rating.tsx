import { StarIcon } from "lucide-react"

type StarRatingProps = {
    stars: number,
    purchase_count?: number,
}

export const StarRating = ({ stars, purchase_count }: StarRatingProps) => {
    return (
        <div className="flex items-center gap-1 mt-3">
            <div className="flex items-center gap-1">
                {Array(stars).fill(0).map((_, i) => (
                    <StarIcon key={i} fill="#fdd261" stroke="#fdd261" width={14} height={14}/>
                ))}
                {Array(5 - stars).fill(0).map((_, i) => (
                    <StarIcon key={i} fill="#41414D" width={14} height={14}/>
                ))}
                <span className="ml-1 text-sm opacity-75">
                    (2)
                </span>
                {purchase_count !== undefined &&
                    <span className="text-base font-normal break-words antialiased ml-1">
                        {purchase_count} vendido(s)
                    </span>
                }
            </div>
        </div>
    )
}   