"use client"

import {
    TbActivityHeartbeat,
    TbAd2,
    TbLockCheck,
    TbSettingsCheck,
} from "react-icons/tb";
import Item from "./item";
import { TiLightbulb } from "react-icons/ti";
import { ReactNode } from "react";

interface IProps {
    children: ReactNode
}

export default async function Sidebar({ children }: IProps) {
    return (
        <div className="flex w-80 flex-col p-5 bg-white rounded-lg h-fit shadow-lg text-sm gap-1">
            {children}
        </div>
    )
}