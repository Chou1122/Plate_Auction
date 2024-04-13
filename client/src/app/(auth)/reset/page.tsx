"use client"

import Button from "@/app/components/form/button";
import Input from "@/app/components/form/input";
import Link from "@/app/components/form/link";
import FormTitle from "../components/title_form";
import axios, { IResponse } from "@/configs/axios";
import { toast } from "react-toastify";
import AuthForm from "../components/form";
import useInputError from "../hooks/error";

interface IResetData {
    email: string;
}

export default function ResetPage() {
    const { error } = useInputError();

    function sender(data: IResetData) {
        return axios.post<IResponse>("/auth/reset", {
            email: data.email
        });
    }

    function handleSuccess(data: IResetData) {
        toast.success("We have send you a reset link to " + data.email);
    }

    return (
        <AuthForm sender={sender} onSuccess={handleSuccess}>
            <FormTitle title="Reset password" subtitle="Give us your email linking with account." />

            <Input placeholder="demo@gmail.com" title="Email" name="email" error={error} />
            <div className="my-5">
                <Button color={"primary"} title="Send reset password link" fullSized type="submit" />
            </div>

            <div className="flex gap-2 justify-center font-montserat text-sm">
                <p>I just have remembered my password.</p>
                <Link href="/login" title="Login now" color="green"></Link>
            </div>
        </AuthForm>
    )
}