import { ReactNode } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SidebarAdmin from "./components/sidebar";

export default function Admin({ children }: { children: ReactNode }) {
    return (
        <div className="bg-gray-50 cursor-default">
            <Header />

            <div className="flex my-10 min-h-screen mt-20 container mx-auto gap-10">
                <SidebarAdmin />
                <main className="w-full">
                    {children}
                </main>
            </div>

            <Footer />
        </div>
    )
}