import Sidebar from "@/app/components/sidebar"
import { ReactNode } from "react"

interface IProps {
    children: ReactNode
}

export default function FAQLayout({children}: IProps) {
    return (
        <div className="flex my-10 min-h-screen mt-20 container mx-auto gap-10">
            <Sidebar />
            <main className="w-full">
                {children}
            </main>
        </div>
    )
}