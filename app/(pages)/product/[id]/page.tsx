import { PageLayout } from "@/components/main_layout";
import { ProductMainSection } from "./components/product-section/main-section";
import { ProductDescriptionSection } from "./components/product-section/description-section";
import { ReviewSection } from "./components/review-section/review-menu";
import { SimilarProducts } from "./components/similar-products-section/similar-products";

export default async function Page({ params }: { params: { id: string } }) {
    return (
        <PageLayout>
            <ProductMainSection/>
            <ProductDescriptionSection/>
            <ReviewSection/>
            <SimilarProducts/>
        </PageLayout>
    )
}


