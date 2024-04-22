"use client"

import Button from "@/app/components/form/button";
import Input from "@/app/components/form/input";
import Link from "@/app/components/form/link";
import FormTitle from "../components/title";
import { useForm } from "../contexts/error";

export default function ResetPage() {
    const { error, loading } = useForm();

    return (
        <>
            <FormTitle title="Reset password" subtitle="Give us your email linking with account." />

            <Input placeholder="demo@gmail.com" title="Email" name="email" error={error} />
            <div className="my-5">
                <Button color={"primary"} title="Send reset password link" fullSized type="submit" disabled={loading} />
            </div>

            <div className="flex gap-2 justify-center font-montserat text-sm">
                <p>I just have remembered my password.</p>
                <Link href="/login" title="Login now" color="green"></Link>
            </div>
        </>
    )
}