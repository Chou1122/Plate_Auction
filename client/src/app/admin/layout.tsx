import { ReactNode } from "react";
import AuthGetter from "@/hooks/auth/auth_getter";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Admin({ children }: { children: ReactNode }) {
    return (
        <div className="bg-gray-50 cursor-default">
            <Header />
            {/* <div className="flex my-10 min-h-screen mt-20 container mx-auto gap-10">
                    <Sidebar />
                    <main className="w-full">
                        {children}
                    </main>
                </div> */}
            {children}
            <Footer />
        </div>
    )
}