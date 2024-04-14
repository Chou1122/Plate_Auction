"use client"

import axios, { IResponse } from "@/configs/axios";
import { toast } from "react-toastify";
import { FormProvider } from "../contexts/error";
import { ReactNode } from "react";

interface IResetData {
    email: string;
}

interface IProps {
    children: ReactNode
}
export default function ResetLayout({ children }: IProps) {
    function sender(data: IResetData) {
        return axios.post<IResponse>("/auth/reset", {
            email: data.email
        });
    }

    function handleSuccess(data: IResetData) {
        toast.success("We have send you a reset link to " + data.email);
    }

    return (
        <FormProvider sender={sender} onSuccess={handleSuccess}>
            {children}
        </FormProvider>
    )
}