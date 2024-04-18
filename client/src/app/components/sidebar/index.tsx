"use client"

import {
    TbActivityHeartbeat,
    TbAd2,
    TbLockCheck,
    TbSettingsCheck,
} from "react-icons/tb";
import Item from "./components/item";
import { TiLightbulb } from "react-icons/ti";

export default async function Sidebar() {
    return (
        <div className="flex w-80 flex-col p-5 bg-white rounded-lg h-fit shadow-lg text-sm gap-1">
            <Item href="/faq" icon={TiLightbulb} title="FAQ" />
            <Item href="/faq/manual" icon={TbAd2} title="Training manual" />

            <hr className="mt-5" />
            <h5 className="text-gray-400 text-sm font-semibold ml-6 my-2">Policy</h5>

            <Item href="/faq/security" icon={TbLockCheck} title="Security Policy" />
            <Item href="/faq/usage" icon={TbSettingsCheck} title="Term of use" />
            <Item href="/faq/flow" icon={TbActivityHeartbeat} title="Operating flow" />
        </div>
    )
}