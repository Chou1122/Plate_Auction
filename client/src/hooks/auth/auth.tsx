"use client"

import axios from "@/configs/axios"
import { ReactNode, createContext, useContext, useState } from "react"
import { toast } from "react-toastify"

interface IProps {
    children: ReactNode
    init_user?: IUser
}

export interface IUser {
    fullname: string,
    role: string,
    id: string,
    avatar: string
}

export interface IAuthContext {
    user: IUser,
    signOut: () => void
}

export const defaultUser: IUser = {
    fullname: "",
    role: "",
    id: "",
    avatar: ""
}

export const UserContext = createContext<IAuthContext>({
    user: defaultUser,
    signOut: () => void 0
});

export function useAuth() {
    return useContext(UserContext);
}

export default function AuthProvider({ children, init_user }: IProps) {
    const [user, setUser] = useState<IUser>(init_user || defaultUser);

    async function signOut() {
        const response = await axios.post("/auth/logout");
        if (response.status !== 200) toast.error("Can't sign out");
    }

    return (
        <UserContext.Provider value={{ user, signOut }}>
            {children}
        </UserContext.Provider>
    )
}