"use client"

import { IError } from "@/app/(public)/(auth)/contexts/error";
import Button from "@/app/components/form/button";
import Input from "@/app/components/form/input";
import { Section, SectionBody, SectionHeader } from "@/app/components/section";
import axios, { IResponse } from "@/configs/axios";
import { formToObject } from "@/utils";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

export default function PasswordPage() {
    const [error, setError] = useState<IError>();
    const [loading, setLoading] = useState<boolean>(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = formToObject(e.target as HTMLFormElement);
        console.log(data);

        try {
            setLoading(false);

            const response = await axios.put<IResponse<any>>("/auth/me/password", data);
            if (response.status === 200) {
                toast.success("Updated successfully");
            } else if (response.status === 400) {
                toast.error(response.data.message);
                setError({
                    message: response.data.message,
                    name: response.data.name
                })
            } else throw new Error(response.data.message);
        } catch (e) {
            toast.error("Failed to update");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Section>
            <SectionHeader>
                Change password
            </SectionHeader>
            <SectionBody>
                <form className="w-1/3" onSubmit={handleSubmit}>
                    <Input
                        title="Current password"
                        name="old_password"
                        description="Your current password"
                        error={error}
                        disabled={loading}
                    />
                    <Input
                        title="New password"
                        name="password"
                        description="Your new password"
                        disabled={loading}
                        error={error}
                    />
                    <Input
                        title="Retype password"
                        name="re_password"
                        description="Retype your password"
                        disabled={loading}
                        error={error}
                    />
                    <Button
                        title="Change"
                        disabled={loading}
                        fullSized
                        color="primary"
                        type="submit"
                    />
                </form>
            </SectionBody>
        </Section>
    )
}