"use client"

import axios from "@/configs/axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FormProvider } from "../contexts/error";
import { ReactNode } from "react";

interface IResetData {
    password: string;
    re_password: string;
}

interface IProps {
    children: ReactNode
}

export default function PassLayout({ children }: IProps) {
    const router = useRouter();

    function sender(data: IResetData) {
        return axios.put("/auth/reset", {
            password: data.password,
            re_password: data.re_password
        });
    }

    function handleSuccess() {
        toast.success("Password changed successfully");
        router.push("/login");
    }

    return (
        <FormProvider sender={sender} onSuccess={handleSuccess}>
            {children}
        </FormProvider>
    )
}