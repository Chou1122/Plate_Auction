"use client"

import Checkbox from "@components/form/checkbox";
import Input from "@components/form/input";
import Button from "@components/form/button";
import Link from "@components/form/link";

import FormTitle from "../components/title";
import { useForm } from "../contexts/error";

export default function LoginPage() {
    const { error, loading } = useForm();

    return (
        <>
            <FormTitle title="Login" subtitle="Let's start your challenge" />

            <Input placeholder="demo@gmail.com" title="Email" name="email" error={error} />
            <Input placeholder="password" title="Password" name="password" type="password" error={error} />
            <div className="flex justify-between w-full">
                <Checkbox name="remember" title="Remember me" />
                <Link href={"/reset"} title="Forget password" color="green" />
            </div>
            <div className="my-5">
                <Button color={"primary"} title="Login" fullSized type="submit" disabled={loading} />
            </div>

            <div className="flex gap-2 justify-center font-montserat text-sm">
                <p>You haven't account yet</p>
                <Link href="/signup" title="Register now" color="green"></Link>
            </div>
        </>
    )
}