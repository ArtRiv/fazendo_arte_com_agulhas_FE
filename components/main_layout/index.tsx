import { Footer } from "../footer"
import { Header } from "../header"
import { SidebarComponent } from "../sidebar"
import { SidebarProvider } from "../ui/sidebar"

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <SidebarProvider defaultOpen={false}>
                <Header />
                <main className="my-12">
                    {children}
                </main>
                <Footer />
                <SidebarComponent/>
            </SidebarProvider>
        </>
    )
} 