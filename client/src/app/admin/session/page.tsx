"use client"

import { Section, SectionBody, SectionHeader } from "@/app/components/section";
import Session from "./components/session";

export default function SessionPage() {
    return (
        <Section>
            <SectionHeader>Session</SectionHeader>
            <SectionBody>
                <p className="text-sm"> This is a list of devices that have logged into your account. Revoke any sessions that you do not recognize.
                </p>

                <div className="space-y-2 mt-5">
                    <Session currentSession device="123123231231" location="Hanoi" os="Windows" />
                    <Session device="123123231231" location="Hanoi" os="Windows" />
                    <Session device="123123231231" location="Hanoi" os="Windows" />
                    <Session device="123123231231" location="Hanoi" os="Windows" />
                    <Session device="123123231231" location="Hanoi" os="Windows" />
                </div>
            </SectionBody>
        </Section>
    )
}