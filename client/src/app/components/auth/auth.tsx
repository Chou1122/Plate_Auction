import { headers } from "next/headers"
import { ReactNode } from "react"

interface IProps {
    children: ReactNode
}

export default function AuthProvider({ children }: IProps) {
    const headerList = headers();
    const user = JSON.parse(headerList.get('x-user') || "{}");

    console.log(user);
    return (
        <>
            {children}
        </>
    )
}