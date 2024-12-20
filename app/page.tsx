import { PageLayout } from "@/components/main_layout";
import { ProductList } from "@/components/product-list";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product/product";
import Image from "next/image";

export default async function Home() {

  return (
    <PageLayout>
      <Hero/>
      <BestSellingProductsSection/>
    </PageLayout>
  );
}

const Hero = () => {
  return (
    <section className="flex flex-wrap justify-center max-w-[75rem] px-12 mx-auto">
      <div className="w-1/2 flex justify-end py-3 relative z-10 max-w-full grow shrink-0">
        <div className="mr-[-40px] [background:_var(--gradient-background)] [transform:perspective(0)] h-auto min-w-full pt-16 pr-20 pb-20 pl-20 flex flex-col justify-start self-center rounded-3xl shadow-2xl transition-all duration-1000 hover:shadow-zinc-400
         hover:-rotate-1 select-none">
          <h2>
            <strong className="text-inherit text-3xl font-bold [line-height:38.4px]">
              Novos amigurumis edição Especial de Natal!
            </strong>
          </h2>
          <p className="text-base mt-5 opacity-75 font-normal">
            Passe um pouco da alegria natalina com os amigurumis de Pugs de Natal - agora com 40% de desconto. A oferta termina em 1º de dezembro, então não perca a diversão festiva!
          </p>
          <Button variant="link" className="mt-5 self-start text-left p-0 font-bold text-lg">
            Ver mais
          </Button>
        </div>
      </div>
      <div className="w-1/2 flex relative max-w-full grow shrink-0 overflow-hidden ">
        <div className="[transform:perspective(0)] overflow-hidden h-[30rem] min-h-full relative w-full rounded-3xl">
          <Image className="cursor-pointer w-full h-full rounded-3xl animate-circular object-cover object-center [transition:opacity_.4s_cubic-bezier(.25,.46,.45,.94)] shadow-2xl" alt="main image" src={"https://medaami.com/cdn/shop/files/TN-polos.jpg?v=1731954258&width=1500"} width={552} height={480} />
        </div>
      </div>
    </section>
  )
}

const products_teste: Product[] = [
  {
      title: "Frieren - Sousou no Frieren",
      price: 189.99,
      media: ["https://i.ibb.co/NjdLy09/frieren.jpg"],
      id: "price_1Q9uB8C072cq1x08z"
  },
  {
      title: "Fern - Sousou no Frieren",
      price: 99.99,
      media: ["https://i.ibb.co/r04HC67/fern.jpg"],
      id: "price_1Q9uB87rHWzx08z"
  },
  {
      title: "Nahida - Genshin Impact",
      price: 99.99,
      media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
      id: "price_1Q9uB8C072cq1xZ7rx08z"
  },
  {
      title: "Alhaitham - Genshin Impact",
      price: 99.99,
      media: ["https://i.ibb.co/2yyqYFX/alhaitham-img.jpg"],
      id: "price_1QC072cq1xZ7rHWzx08z"
  },
  {
      title: "Pugs - Edição de natal",
      price: 99.99,
      media: ["https://i.ibb.co/LPQTY0Y/yoimiya-img.jpg"],
      id: "price_1Q9uB8C072cq1xZ7Wzx08z"
  },
  {
      title: "Pugs - Edição de natal",
      price: 99.99,
      media: ["https://i.ibb.co/1ZTfHLL/venti-img.jpg"],
      id: "price_1Q9uB8C072c7rHWzx08z"
  },
  {
      title: "Pugs - Edição de natal",
      price: 99.99,
      media: ["https://i.ibb.co/q17wCKZ/kaedehara-kazuha-img.jpg"],
      id: "price_1Qq1xZ7rHWzx08z"
  },
  {
      title: "Pugs - Edição de natal",
      price: 99.99,
      media: ["https://i.ibb.co/3crqkD9/ayaka-img.jpg"],
      id: "price_1Q9uB8C0708z"
  },
  {
      title: "Pugs - Edição de natal",
      price: 99.99,
      media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
      id: "pricB8C072cq1xZ7rHWzx08z"
  },
  {
      title: "Pugs - Edição de natal",
      price: 99.99,
      media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
      id: "price_1Q9uB8C072cq1xZ7rHWzx08z"
  },
  {
      title: "Pugs - Edição de natal",
      price: 99.99,
      media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
      id: "price_1Q9uB8C072cq1xZ7rHWzx08z"
  },
  {
      title: "Pugs - Edição de natal",
      price: 99.99,
      media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
      id: "price_1Q9uB8C072cq1xZ7rHWzx08z"
  },
  {
      title: "Pugs - Edição de natal",
      price: 99.99,
      media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
      id: "price_1Q9uB8C072cq1xZ7rHWzx08z"
  },
  {
      title: "Pugs - Edição de natal",
      price: 99.99,
      media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
      id: "price_1Q9uB8C072cq1xZ7rHWzx08z"
  },
  {
      title: "Pugs - Edição de natal",
      price: 99.99,
      media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
      id: "price_1Q9uB8C072cq1xZ7rHWzx08z"
  },
  {
      title: "Pugs - Edição de natal",
      price: 99.99,
      media: ["https://i.ibb.co/c3t2Rm3/nahida-1.jpg"],
      id: "price_1Q9uB8C072cq1xZ7rHWzx08z"
  },
]

const BestSellingProductsSection = () => {
  return (
    <section className="flex flex-wrap justify-center max-w-[80rem] mx-auto mt-16">
      <h2 className="ml-8 w-full text-left mb-14 text-inherit text-3xl font-bold [line-height:38.4px]">
        Nossos produtos mais vendidos!
      </h2>
      <ProductList products={products_teste}/>
    </section>
  )
}

