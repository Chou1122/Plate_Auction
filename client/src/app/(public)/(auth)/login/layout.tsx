"use client"

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios, { IResponse } from "@/configs/axios";
import FingerprintJS from '@fingerprintjs/fingerprintjs'

import { FormProvider } from "../contexts/error";
import { toast } from "react-toastify";

interface ILoginData {
    email: string;
    password: string;
    remember: "on" | "";
}

interface IProps {
    children: ReactNode
}

export default function LoginLayout({ children }: IProps) {
    const [deviceID, setDeviceID] = useState<string>();
    const router = useRouter()

    function sender(data: ILoginData) {
        return axios.post<IResponse>("/auth/login", {
            email: data.email,
            password: data.password,
            remember: data.remember === "on" ? true : false,
            device: deviceID
        });
    }

    function handleSuccess() {
        toast.success("Login successfully")
        router.push("/");
    }

    useEffect(() => {
        FingerprintJS.load()
            .then(fs => fs.get())
            .then(f => setDeviceID(f.visitorId))
    }, [])

    return (
        <FormProvider sender={sender} onSuccess={handleSuccess} >
            {children}
        </FormProvider>
    )
}