export const Footer = async () => {
    return (
        <footer className="max-w-[75rem] w-full gap-6 pt-8 pr-12 pb-5 pl-12 bg-foreground">
            <div className="flex flex-col items-center justify-center gap-5">
                <h2 className="text-3xl text-font-color font-harmonia text-center">Siga nosso <a  className="relative animateBorderBottom text-font-color font-harmonia leading-line-height-small transition-all duration-300 hover:text-decoration" target="_blank" href="https://www.instagram.com/fazendoartecagulhas/">Instagram!</a></h2>
                <p className="w-1/2 text-sm text-font-color/70 text-center tracking-letter-space-smallest">Olá! Não se esqueça de nos acompanhar no Instagram, <a className="relative animateBorderBottom text-font-color font-harmonia leading-line-height-small transition-all duration-300 hover:text-decoration italic" target="_blank" href="https://www.instagram.com/fazendoartecagulhas/">@fazendoartecagulhas</a>
                    , e ativar as notificações de postagens. Lá nós postamos o que está em confecção! 
                    Além disso, frequentemente disponibilizo descontos exclusivos para os lançamentos na <a className="relative animateBorderBottom text-font-color font-harmonia leading-line-height-small transition-all duration-300 hover:text-decoration italic" target="_blank" href="https://shopee.com.br/ntlfb">shopee</a>, então 
                    é bom ficar atento. Agradeço muito pelo seu apoio e carinho! 
                </p>
            </div>
            {/* <SocialMediaIcons/> */}
        </footer>
    )
}