"use client"

import axios, { IResponse } from "@/configs/axios"
import { ReactNode, createContext, useContext, useState } from "react"
import { toast } from "react-toastify"

interface IProps {
    children: ReactNode
    init_user?: IUser,
    init_device?: string
}

export interface IUser {
    fullname: string,
    role: string,
    id: string,
    avatar: string,
}

export interface IAuthContext {
    user: IUser,
    device: string,
    signOut: () => void
    signIn: () => void
}

export const defaultUser: IUser = {
    fullname: "",
    role: "",
    id: "",
    avatar: "",
}

export const UserContext = createContext<IAuthContext>({
    user: defaultUser,
    device: "",
    signOut: () => void 0,
    signIn: () => void 0
});

export function useAuth() {
    return useContext(UserContext);
}

export default function AuthProvider({ children, init_user, init_device }: IProps) {
    const [user, setUser] = useState<IUser>(init_user || defaultUser);
    const [device, setDevice] = useState<string>(init_device || "");

    async function signOut() {
        const response = await axios.post("/auth/logout");
        if (response.status !== 200) toast.error("Can't sign out");
        setUser(defaultUser);
        setDevice("");
    }

    async function signIn() {
        const response = await axios.get<IResponse<{ user: IUser, device: string }>>("/auth");
        if (response.status !== 200) toast.error("Can't sign in");
        setUser(response.data.data.user);
        setDevice(response.data.data.device);
    }

    return (
        <UserContext.Provider value={{ user, device, signOut, signIn }}>
            {children}
        </UserContext.Provider>
    )
}