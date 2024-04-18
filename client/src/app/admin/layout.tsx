import { ReactNode } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "./components/sidebar";

export default function Admin({ children }: { children: ReactNode }) {
    return (
        <div className="flex my-10 min-h-screen mt-20 container mx-auto gap-10">
            <Sidebar />
            <main className="w-full">
                {children}
            </main>
        </div>
    )
}