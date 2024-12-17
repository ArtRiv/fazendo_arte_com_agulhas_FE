import { PageLayout } from "@/components/main_layout";

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <PageLayout>
            <section className="flex gap-6 flex-wrap justify-center max-w-[85rem] px-12 mx-auto mt-16">
                <div className="w-full">
                    <h1 className="ml-16 w-full text-left mb-6 text-inherit text-5xl font-semibold [line-height:38.4px]">
                        Produtos
                    </h1>
                    {children}
                </div>
            </section>
        </PageLayout>
    );
}
