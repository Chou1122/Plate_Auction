import { ReactNode } from "react";

interface IProps {
    children: ReactNode
}
export default function AuthLogin({ children }: IProps) {
    return (
        <main className="flex justify-center my-10 min-h-screen mt-40">
            {children}
        </main>
    )
}