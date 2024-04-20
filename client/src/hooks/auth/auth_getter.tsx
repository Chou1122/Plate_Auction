import { headers } from "next/headers";
import { ReactNode } from "react";
import AuthProvider, { IUser } from "./auth";

interface IProps {
    children: ReactNode
}

interface IResponse<T = any> {
    message: string,
    data: T,
    name: string
}

export default function AuthGetter({ children }: IProps) {
    const headerList = headers();
    const data = JSON.parse(headerList.get('x-user') || "{}") as IResponse<{ user: IUser }>;

    return (
        <AuthProvider init_user={data.data && data.data.user}>
            {children}
        </AuthProvider>
    )
}