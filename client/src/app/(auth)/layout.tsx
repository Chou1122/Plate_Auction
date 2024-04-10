import { ReactNode } from "react";
import Footer from "@components/footer";
import Header from "@components/header";

export default function AuthLogin({ children }: { children: ReactNode }) {
    return (
        <div className="bg-gray-50 cursor-default">
            <Header />
            <main className="flex justify-center my-10 min-h-screen mt-40">
                {children}
            </main>
            <Footer />
        </div>
    )
}