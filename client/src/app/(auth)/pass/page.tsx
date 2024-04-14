"use client"

import Button from "@/app/components/form/button";
import Input from "@/app/components/form/input";
import FormTitle from "../components/title_form";
import { useForm } from "../contexts/error";
import { useSearchParams } from "next/navigation";

export default function Pass() {
    const { error, loading } = useForm();
    const queries = useSearchParams();
    const email = queries.get("email") || "";

    return (
        <>
            <FormTitle title="Change your password" subtitle="Create new password." />

            <input hidden type="email" defaultValue={email} name="email" />
            <Input placeholder="password" title="Password" name="password" type="password" error={error} />
            <Input placeholder="password" title="Re-type password" name="re_password" type="password" error={error} />

            <div className="mt-10 mb-5">
                <Button color={"primary"} title="Change password" fullSized type="submit" disabled={loading} />
            </div>
        </>
    )
}