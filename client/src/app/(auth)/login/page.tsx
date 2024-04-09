"use client"

import Checkbox from "@components/form/checkbox";
import Input from "@components/form/input";
import Button from "@components/form/button";
import Link from "@components/form/link";
import FormTitle from "../components/title_form";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { formToObject } from "@/utils";
import axios, { IResponse } from "@/configs/axios";
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import { toast } from "react-toastify";

interface ILoginData {
    email: string;
    password: string;
    remember: "on" | "";
}

interface IError {
    message: string;
    name: string;
}

export default function LoginPage() {
    const [error, setError] = useState<IError>();
    const [deviceID, setDeviceID] = useState<string>();
    const router = useRouter()

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = formToObject<ILoginData>(e.target as HTMLFormElement);

        try {
            const response = await axios.post<IResponse>("/auth/login", {
                email: data.email,
                password: data.password,
                remember: data.remember === "on" ? true : false,
                device: deviceID
            });

            if (response.status === 200) {
                toast.success("Login successfully")
                router.push("/");
            }
            else if (response.status === 400) {
                toast.error(response.data.message);
                setError({
                    message: response.data.message,
                    name: response.data.name
                })
            }
            else {
                setError({ message: "", name: "" });
            }
        } catch (err) {
            toast.error("Something went wrong");
            console.log(err);
        }
    }

    useEffect(() => {
        FingerprintJS.load()
            .then(fs => fs.get())
            .then(f => setDeviceID(f.visitorId))
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <FormTitle title="Login" subtitle="Let's start your challenge" />

            <Input placeholder="demo@gmail.com" title="Email" name="email" error={error} />
            <Input placeholder="password" title="Password" name="password" type="password" error={error} />
            <div className="flex justify-between w-full">
                <Checkbox name="remember" title="Remember me" />
                <Link href={"/reset"} title="Forget password" />
            </div>
            <div className="my-5">
                <Button color={"primary"} title="Login" fullSized type="submit" />
            </div>

            <div className="flex gap-2 justify-center font-montserat text-sm">
                <p>You haven't account yet</p>
                <Link href="/signup" title="Register now"></Link>
            </div>
        </form>
    )
}