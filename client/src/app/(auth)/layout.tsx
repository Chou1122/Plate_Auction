import { ReactNode } from "react";
import Footer from "@components/footer";
import Header from "@components/header";

export default function AuthLogin({ children }: { children: ReactNode }) {
    return (
        <div className="bg-gray-50">
            <Header />
            <main className="flex justify-center my-10 min-h-screen mt-40">
                <form className="w-full mx-0 xs:mx-5 sm:mx-0 sm:w-[500px] md:w-[600px] border border-gray-200 p-10 rounded-3xl xs:rounded-xl h-fit bg-white shadow-xl">
                    {children}
                </form>
            </main>
            <Footer />
        </div>
    )
}