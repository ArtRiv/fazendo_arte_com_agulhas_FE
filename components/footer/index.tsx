import './styles/style.css'
import { InstagramIcon } from '../icons/instagram'
import { TiktokIcon } from '../icons/tiktok'
import { ShopeeIcon } from '../icons/shopee'

export const Footer = async () => {
    return (
        <footer className="w-full [background:var(--gradient-background)] footer">
            <div className="max-w-[100rem] h-full my-0 mx-auto px-24 py-5 flex flex-col items-center">
                <h2 className="text-3xl text-center">
                    Siga nosso <a href="https://www.instagram.com/fazendoartecagulhas/">Instagram!</a>
                </h2>
                <p className="mt-4 max-w-1/2 w-1/2 text-sm text-zinc-600 text-center tracking-letter-space-smallest">
                    Olá! Não se esqueça de nos acompanhar no Instagram, <a target="_blank" href="https://www.instagram.com/fazendoartecagulhas/">@fazendoartecagulhas</a>
                    , e ativar as notificações de postagens. Lá nós postamos o que está em confecção!
                    Além disso, frequentemente disponibilizo descontos exclusivos para os lançamentos na <a target="_blank" href="https://shopee.com.br/ntlfb">shopee</a>
                    , então é bom ficar atento. Agradeço muito pelo seu apoio e carinho!
                </p>
                <SocialMediaNav/>
            </div>
        </footer>
    )
}

const SocialMediaNav = () => {
    return (
        <div className="flex gap-3 mt-4">
            <a target="_blank" href="https://www.instagram.com/fazendoartecagulhas/">
                <InstagramIcon/>
            </a>
            <a target="_blank" href="https://www.tiktok.com/@fazendoartecomagulhas">
                <TiktokIcon/>
            </a>
            <a target="_blank" href="https://shopee.com.br/ntlfb">
                <ShopeeIcon/>
            </a>
        </div>
    )
}