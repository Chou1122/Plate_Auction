import { ReactNode } from "react"
import FAQSidebar from "./components/sidebar"

interface IProps {
    children: ReactNode
}

export default function FAQLayout({ children }: IProps) {
    return (
        <div className="flex my-10 min-h-screen mt-20 container mx-auto gap-10">
            <FAQSidebar />
            <main className="w-full">
                {children}
            </main>
        </div>
    )
}