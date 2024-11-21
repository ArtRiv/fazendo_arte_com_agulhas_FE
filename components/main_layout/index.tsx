import { Footer } from "../footer"
import { Header } from "../header"
import { SidebarComponent } from "../sidebar"
import { SidebarProvider } from "../ui/sidebar"

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <Header />
            <SidebarComponent/>
            <main className="min-h-[1500px] max-w-[120rem]">
                {children}
            </main>
            <Footer />
        </SidebarProvider>
    )
} 