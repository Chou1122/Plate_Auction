import { ReactNode } from "react"
import Header from "@components/header"
import Footer from "@components/footer"

interface IProps {
    children: ReactNode
}

export default function AppTemplate({ children }: IProps) {
    return (
        <div className="bg-gray-50 cursor-default">
            <Header />

            {children}

            <Footer />
        </div>
    )
}