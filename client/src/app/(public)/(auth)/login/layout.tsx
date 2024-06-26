"use client"

import axios, { IResponse } from "@/configs/axios";
import { ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { FormProvider } from "../contexts/error";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/hooks/auth/auth";
import { IDeviceInfo, getDeviceInfo } from "@/utils";

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
    const [deviceInfo, setDeviceInfo] = useState<IDeviceInfo>();

    const router = useRouter()
    const params = useSearchParams();
    const next = params.get("next");
    const { signIn } = useAuth();

    function sender(data: ILoginData) {
        return axios.post<IResponse>("/auth/login", {
            email: data.email,
            password: data.password,
            remember: data.remember === "on" ? true : false,
            device: deviceID,
            device_info: deviceInfo
        });
    }

    function handleSuccess() {
        signIn();
        toast.success("Login successfully");
        next ? router.push(next) : router.push("/")
    }

    useEffect(() => {
        getDeviceInfo().then((info) => {
            console.log(info);
            
            setDeviceInfo(info);
            setDeviceID(info.device);
        })
    }, [])

    return (
        <FormProvider sender={sender} onSuccess={handleSuccess} >
            {children}
        </FormProvider>
    )
}