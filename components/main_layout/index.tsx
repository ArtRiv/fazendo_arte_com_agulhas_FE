import { Footer } from "../footer"
import { Header } from "../header"

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main className="my-12">
                {children}
            </main>
            <Footer />
        </>
    )
} 