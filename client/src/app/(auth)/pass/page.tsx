"use client"

import Button from "@/app/components/form/button";
import Input from "@/app/components/form/input";
import FormTitle from "../components/title_form";
import axios from "@/configs/axios";
import { toast } from "react-toastify";
import useInputError from "../hooks/error";
import AuthForm from "../components/form";
import { useRouter, useSearchParams } from "next/navigation";

interface IResetData {
    password: string;
    re_password: string;
}

export default function Pass() {
    const { error } = useInputError();
    const router = useRouter();
    const queries = useSearchParams();
    const email = queries.get("email") || "";

    console.log(email);


    function sender(data: IResetData) {
        return axios.put("/auth/reset", {
            password: data.password,
            re_password: data.re_password
        });
    }

    function handleSuccess() {
        toast.success("Password changed successfully");
        router.replace("/login");
    }

    return (
        <AuthForm sender={sender} onSuccess={handleSuccess}>
            <FormTitle title="Change your password" subtitle="Create new password." />

            <input hidden type="email" defaultValue={email} name="email" />
            <Input placeholder="password" title="Password" name="password" type="password" error={error} />
            <Input placeholder="password" title="Re-type password" name="re_password" type="password" error={error} />

            <div className="mt-10 mb-5">
                <Button color={"primary"} title="Change password" fullSized type="submit" />
            </div>
        </AuthForm>
    )
}