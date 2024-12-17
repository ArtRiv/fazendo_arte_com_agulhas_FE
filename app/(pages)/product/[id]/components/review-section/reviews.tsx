import { ScrollArea } from "@/components/ui/scroll-area";
import { Star } from "lucide-react";
import Image from "next/image";
import { DialogImage } from "../product-section/dialog-image";

type Review = {
    rating: number,
    user: string,
    title: string,
    description: string,
    created_at: string,
    media: Array<string>,
}

const reviews_teste: Review[] = [
    {
        rating: 5,
        user: "Natalia Luiza",
        title: "Muito lindo!",
        description: "O amigurumi é perfeito, os detalhes são incríveis. Ficou lindo na decoração do quarto da minha filha!",
        created_at: "2024-12-13T10:00:00Z",
        media: ["https://i.ibb.co/NjdLy09/frieren.jpg", "https://i.ibb.co/NjdLy09/frieren.jpg"]
    },
    {
        rating: 5,
        user: "Marcos André",
        title: "Qualidade impecável!",
        description: "Comprei para presentear minha sobrinha e ela amou! O material é super macio e bem-feito.",
        created_at: "2024-12-12T15:45:00Z",
        media: ["https://i.ibb.co/NjdLy09/frieren.jpg"]
    },
    {
        rating: 5,
        user: "Ana Carolina",
        title: "Amei o capricho!",
        description: "Chegou super rápido e é ainda mais bonito pessoalmente. Dá para ver que foi feito com muito amor.",
        created_at: "2024-12-11T18:30:00Z",
        media: ["https://i.ibb.co/NjdLy09/frieren.jpg"]
    },
    {
        rating: 5,
        user: "Rafael Souza",
        title: "Recomendo muito!",
        description: "O amigurumi é maravilhoso. Fiz o pedido para meu filho e ele ficou encantado!",
        created_at: "2024-12-10T09:15:00Z",
        media: ["https://i.ibb.co/NjdLy09/frieren.jpg"]
    },
    {
        rating: 5,
        user: "Gabriela Alves",
        title: "Delicado e lindo!",
        description: "Comprei dois para decorar meu ateliê e ficou perfeito! Super recomendo.",
        created_at: "2024-12-09T13:50:00Z",
        media: ["https://i.ibb.co/NjdLy09/frieren.jpg", "https://i.ibb.co/NjdLy09/frieren.jpg"]
    },
    {
        rating: 5,
        user: "Lucas Mendes",
        title: "Ótima compra!",
        description: "Excelente acabamento e muito fofo. Minha esposa adorou o presente!",
        created_at: "2024-12-08T12:00:00Z",
        media: ["https://i.ibb.co/NjdLy09/frieren.jpg"]
    },
    {
        rating: 5,
        user: "Juliana Pereira",
        title: "Encantador!",
        description: "Estou apaixonada pelo meu amigurumi. Cada detalhe é perfeito, realmente encantador!",
        created_at: "2024-12-07T10:30:00Z",
        media: ["https://i.ibb.co/NjdLy09/frieren.jpg"]
    }
];

export const Reviews = () => {
    return (
        <div className="w-full">
            <ScrollArea className="h-screen">
                <ul className="flex flex-wrap gap-4">
                    {reviews_teste.map((review, index) => (
                        <Review key={index} {...review} />
                    ))}
                </ul>
            </ScrollArea>
        </div>
    )
}

const Review = ({ rating, user, title, description, created_at, media }: Review) => {
    return (
        <li className="border border-pink-200 p-4 rounded shadow w-full">
            <h3 className="text-lg">{title}</h3>
            <p className="text-sm text-gray-500">Por {user} em {new Date(created_at).toLocaleDateString()}</p>
            <div className="flex mt-2">
                <span className="text-yellow-400 flex items-center">
                    {Array.from({ length: rating }, (_, index) => (
                        <Star key={index} size={20} className="fill-yellow-400" />
                    ))}
                </span>
                <span className="text-gray-300 flex items-center">
                    {Array.from({ length: 5 - rating }, (_, index) => (
                        <Star key={`empty-${index}`} size={20} className="fill-gray-300" />
                    ))}
                </span>
            </div>
            <p className="mt-2">{description}</p>
            {media.length > 0 && (
                <div className="mt-2 flex gap-2">
                    {media.map((img, index) => (
                        <DialogImage key={index} src={img} alt={`Imagem do produto ${title}`}>
                            <div className="relative overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:rotate-1 cursor-pointer">
                                <Image key={index} src={img} alt={`media-${index}`} width={64} height={64} className="w-16 h-16 object-cover rounded" />
                            </div>
                        </DialogImage>
                    ))}
                </div>
            )}
        </li>
    )
}