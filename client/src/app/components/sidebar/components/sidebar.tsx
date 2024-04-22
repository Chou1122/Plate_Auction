"use client"

import { ReactNode } from "react";

interface IProps {
    children: ReactNode
}

export default async function Sidebar({ children }: IProps) {
    return (
        <div className="flex w-72 flex-col p-5 bg-white rounded-lg h-fit shadow-lg text-sm gap-1 sticky top-28">
            {children}
        </div>
    )
}