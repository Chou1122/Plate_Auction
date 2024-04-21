"use client"

import Button from "@/app/components/form/button";
import Checkbox from "@/app/components/form/checkbox";
import { Section, SectionBody, SectionHeader } from "@/app/components/section";
import axios, { IResponse } from "@/configs/axios";
import { FormEvent, useEffect, useState } from "react";
import { TbEdit } from "react-icons/tb";
import { toast } from "react-toastify";
import UserSummary from "./components/summary";
import { IUserData } from "@/types/user";
import FormFeed from "./components/formfeed";
import { formToObject } from "@/utils";

export default function MePage() {
    const [user, setUser] = useState<IUserData>();
    const [loading, setLoading] = useState<boolean>(true);

    async function fetchData() {
        setLoading(true);
        const response = await axios.get<IResponse<{ user: IUserData }>>("/auth/me");
        if (response.status === 200) {
            const tmp = response.data.data.user;
            setUser(tmp);
        } else {
            toast.error("Failed to fetch");
        }

        setLoading(false);
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = formToObject(e.target as HTMLFormElement);

        try {
            const response = await axios.put("/auth/");
            if (response.status === 200) {
                toast.success("Updated successfully");
            } else {
                toast.error("Failed to update");
            }
        } catch (e) {
            toast.error("Failed to update");
        }
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
                    <FormFeed user={user} />
                    <div>
                        <h2 className="text-xl font-semibold font-montserat mb-3">Visible settings</h2>

                        <Checkbox title="Display plate number that you attended" name="attend" />
                        <Checkbox title="Display plate number that you collected successful" name="success" />
                    </div>



                    <div className="flex flex-row justify-end">
                        <Button title="Save" icon={TbEdit} color="primary" type="submit" />
                    </div>
                </form>

            </SectionBody>
        </Section>
    )
}