"use client"

import { SidebarBreak, Sidebar, SidebarItem } from "@/app/components/sidebar";
import { TbActivityHeartbeat, TbAd2, TbLockCheck, TbSettingsCheck } from "react-icons/tb";
import { TiLightbulb } from "react-icons/ti";

export default function FAQSidebar() {
    return (
        <Sidebar>
            <SidebarItem href="/faq" icon={TiLightbulb} title="FAQ" />
            <SidebarItem href="/faq/manual" icon={TbAd2} title="Training manual" />

            <SidebarBreak title="Policy" />

            <SidebarItem href="/faq/security" icon={TbLockCheck} title="Security Policy" />
            <SidebarItem href="/faq/usage" icon={TbSettingsCheck} title="Term of use" />
            <SidebarItem href="/faq/flow" icon={TbActivityHeartbeat} title="Operating flow" />
        </Sidebar>
    )
}