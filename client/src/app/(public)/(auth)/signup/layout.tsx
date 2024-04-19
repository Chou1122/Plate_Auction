"use client"

import axios from "@/configs/axios";
import { toast } from "react-toastify";
import { ReactNode, useEffect, useState } from "react";
import { FormProvider } from "../contexts/error";
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import { useRouter } from "next/router";

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
    const [deviceID, setDeviceID] = useState<string>();
    const router = useRouter()

    function signupSender(data: ISignup) {
        console.log(data);

        return axios.post("/auth/signup", {
            fullname: data.fullname,
            phone: data.phone,
            cid: data.cid,
            password: data.password,
            re_password: data.re_password,
            email: data.email,
            otp: data.otp,
            device: deviceID
        });
    }

    function OTPSender(data: ISignup) {
        return axios.post("/auth/sendOTP", {
            email: data.email,
            device: deviceID,
        });
    }

    function sender(data: ISignup) {
        // @ts-ignore
        const ref = data.e.nativeEvent.submitter;
        if (ref.value === "send_OTP") {
            return OTPSender(data);
        }
        else {
            return signupSender(data);
        }
    }

    function handleSuccess(data: ISignup) {
        // @ts-ignore
        const ref = data.e.nativeEvent.submitter;
        if (ref.value === "send_OTP") {
            toast.success("Send OTP to " + data.email + " successfully");
        }
        else {
            toast.success("Successful registration");
            router.push("/login");
        }
    }

    useEffect(() => {
        FingerprintJS.load()
            .then(fs => fs.get())
            .then(f => setDeviceID(f.visitorId))
    }, [])

    return (
        <FormProvider sender={sender} onSuccess={handleSuccess}>
            {children}
        </FormProvider>
    )
}