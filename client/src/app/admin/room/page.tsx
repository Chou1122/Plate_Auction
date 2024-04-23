"use client"

import { Section, SectionBody, SectionHeader } from "@/app/components/section";
import Room from "./components/room";
import Button from "@/app/components/form/button";

export default function RoomPage() {
    return (
        <Section>
            <SectionHeader>
                Manage Auction Room
            </SectionHeader>
            <SectionBody>
                <div>
                    <h1 className="font-semibold mb-5">List off all room</h1>
                    <div className="flex gap-6 flex-wrap">
                        <Room />
                        <Room />
                        <Room />
                        <Room />
                    </div>
                </div>
            </SectionBody>
        </Section>
    )
}