"use client"

import Button from "@/app/components/form/button";
import { Section, SectionBody, SectionHeader } from "@/app/components/section";
import axios, { IResponse } from "@/configs/axios";
import { FormEvent, useEffect, useState } from "react";
import { TbEdit } from "react-icons/tb";
import { toast } from "react-toastify";
import UserSummary from "./components/summary";
import { IUSerSetting, IUserData } from "@/types/user";
import FormFeedUser from "./components/formfeed";
import FormFeedSetting from "./components/formfeed_setting";
import { IError } from "@/app/(public)/(auth)/contexts/error";

export default function MePage() {
    const [user, setUser] = useState<IUserData>();
    const [setting, setSetting] = useState<IUSerSetting>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<IError>();

    async function fetchData() {
        setLoading(true);
        try {
            const response = await axios.get<IResponse<{ user: IUserData, setting: IUSerSetting }>>("/auth/me");
            if (response.status === 200) {
                setUser(response.data.data.user);
                setSetting(response.data.data.setting);
            } else throw new Error(response.data.message);

        } catch (e) {
            //@ts-ignore
            toast.error(e.message ? e.message : "Failed to fetch");
        } finally {
            setLoading(false);
        }
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const response = await axios.put("/auth/me", {
                user: user,
                setting: setting
            });

            if (response.status === 200) {
                toast.success("Updated successfully");
            } else if (response.status === 400) {
                setError({
                    message: response.data.message,
                    name: response.data.name,
                });
                toast.error(response.data.message);
            } else throw new Error(response.data.message);
        } catch (e) {
            //@ts-ignore
            toast.error(e.message ? e.message : "Failed to update");
        }
    }

    function handleUserChange(user: IUserData) {
        setUser(user);
    }

    function handleSettingChange(setting: IUSerSetting) {
        setSetting(setting);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Section>
            <SectionHeader>
                Manage accounts
            </SectionHeader>
            <SectionBody>
                <UserSummary user={user} />

                <form className="mt-5" onSubmit={handleSubmit}>
                    <FormFeedUser user={user} onChange={handleUserChange} error={error} />
                    <FormFeedSetting setting={setting} onChange={handleSettingChange} />

                    <div className="flex flex-row justify-end">
                        <Button title="Save" icon={TbEdit} color="primary" type="submit" disabled={loading} />
                    </div>
                </form>

            </SectionBody>
        </Section>
    )
}