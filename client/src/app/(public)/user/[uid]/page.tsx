"use client"

import { Section, SectionBody, SectionHeader } from "@/app/components/section";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios, { IResponse } from "@/configs/axios";
import { IUserData } from "@/types/user";
import { toast } from "react-toastify";
import Summary from "./components/summary";

export default function UserProfile() {
    const params = useParams<{ uid: string }>();
    const uid = params.uid;
    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<IUserData>();

    async function fetchUser() {
        setLoading(true);
        try {
            const response = await axios.get<IResponse<{ user: IUserData }>>("/auth/user/" + uid);
            if (response.status === 200) {
                setUser(response.data.data.user);
            } else {
                toast.error(response.data.message);
            }
        } catch (err) {
            toast.error("Failed to fetch user");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUser();
    }, [uid]);

    return (
        <main className="container mx-auto mt-10 py-10 flex gap-10">
            <Summary user={user}/>

            <Section>
                <SectionHeader>
                    Transaction on Account
                </SectionHeader>

                <SectionBody>
                    hello
                </SectionBody>
            </Section>
        </main>
    )
}