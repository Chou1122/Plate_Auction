"use client"

import Button from "@/app/components/form/button";
import Input from "@/app/components/form/input";
import Link from "@/app/components/form/link";
import FormTitle from "../components/title_form";
import { FormEvent, useState } from "react";
import { formToObject } from "@/utils";
import axios, { IResponse } from "@/configs/axios";
import { toast } from "react-toastify";

interface ResetData {
    email: string;
}

interface IError {
    message: string;
    name: string;
}

export default function ResetPage() {
    const [error, setError] = useState<IError>();

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const data = formToObject<ResetData>(e.target as HTMLFormElement);

        try {

            const response = await axios.post<IResponse>("/auth/reset", {
                email: data.email
            });

            if (response.status === 200) {
                toast.success("We have send you a reset link to " + data.email);
            } else if (response.status === 400) {
                toast.error(response.data.message);

                setError({
                    message: response.data.message,
                    name: response.data.name
                })
            } else {
                setError({ message: "", name: "" });
            }
        } catch (err) {
            toast.error("Something went wrong");
            console.log(err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormTitle title="Reset password" subtitle="Give us your email linking with account." />

            <Input placeholder="demo@gmail.com" title="Email" name="email" error={error} />
            <div className="my-5">
                <Button color={"primary"} title="Send reset password link" fullSized type="submit"/>
            </div>

            <div className="flex gap-2 justify-center font-montserat text-sm">
                <p>I just have remembered my password.</p>
                <Link href="/login" title="Login now"></Link>
            </div>
        </form>
    )
}