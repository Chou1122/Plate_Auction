"use client"

import { Section, SectionBody, SectionHeader } from "@/app/components/section";
import Session, { ISessionData } from "./components/session";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/auth/auth";
import axios, { IResponse } from "@/configs/axios";
import { toast } from "react-toastify";
import Button from "@/app/components/form/button";
import RevokeAllBtn from "./components/revoke_all";

export default function SessionPage() {
    const [sessions, setSessions] = useState<ISessionData[]>();
    const { device } = useAuth();

    async function getSessions(): Promise<ISessionData[]> {
        try {
            const response = await axios.get<IResponse<{ session: ISessionData[] }>>("/session");
            if (response.status === 200) {
                return response.data.data.session;
            } else throw new Error(response.data.message);
        } catch (error) {
            toast.error("Failed to fetch data");
            return [];
        }
    }

    useEffect(() => {
        getSessions().then(data => setSessions(data));
    }, [])

    return (
        <Section>
            <SectionHeader>
                Session
            </SectionHeader>
            <SectionBody>
                <p className="text-sm">This is a list of devices that have logged into your account. Revoke any sessions that you do not recognize.
                </p>

                <div className="space-y-2 mt-5">
                    {
                        sessions
                            ? sessions.map((item, index) =>
                                <Session
                                    data={item}
                                    currentSession={device === item.device}
                                    key={index.toString()} />
                            )
                            : <>
                                Khong co phien nao
                            </>
                    }
                </div>

                <div className="flex justify-between items-center mt-5 p-5 bg-red-50 border border-red-400 rounded-lg">
                    If you met something wrong, let
                    <RevokeAllBtn />
                </div>
            </SectionBody>
        </Section>
    )
}