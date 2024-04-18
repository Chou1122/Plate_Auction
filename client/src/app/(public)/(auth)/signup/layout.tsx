"use client"

import axios from "@/configs/axios";
import { toast } from "react-toastify";
import { ReactNode } from "react";
import { FormProvider } from "../contexts/error";

interface ISignup {
    fullname: string;
    phone: string;
    cid: string;
    password: string;
    re_password: string;
    email: string;
    otp: string;
}

interface IProps {
    children: ReactNode
}

export default function Signup({ children }: IProps) {
    function sender(data: ISignup) {
        return axios.post("/signup", {
            fullname: data.fullname,
            phone: data.phone,
            cid: data.cid,
            password: data.password,
            re_password: data.re_password,
            email: data.email,
            otp: data.otp
        });
    }

    function handleSuccess() {
        toast.success("Successful registration");
    }

    return (
        <FormProvider sender={sender} onSuccess={handleSuccess}>
            {children}
        </FormProvider>
    )
}