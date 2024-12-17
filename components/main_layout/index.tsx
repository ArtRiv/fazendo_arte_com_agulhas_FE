import { Footer } from "../footer"
import { Header } from "../header"
import { SidebarComponent } from "../sidebar"
import { SidebarProvider } from "../ui/sidebar"

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen">
            <SidebarProvider defaultOpen={false}>
                <Header />
                <SidebarComponent />
                <main className="my-12">
                    {children}
                </main>
                <Footer />
            </SidebarProvider>
        </div>
    )
} 