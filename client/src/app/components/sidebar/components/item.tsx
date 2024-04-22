"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
    icon: any;
    title: string;
    href: string;
    selected?: boolean;
}

export default function SidebarItem({ icon: Icon, title, href }: IProps) {
    const pathname = usePathname()

    return (
        <Link href={href}
            className={"before:w-1 before:flex before:flex-none before:rounded-full before:content-[''] before:my-1 flex w-full " +
                (pathname === href ? "before:bg-blue-700" : "before:bg-transparent")}>
            <span
                className="font-montserat hover:bg-gray-100 font-medium rounded-md py-1 px-2 flex items-center gap-2 text-gray-700 hover:text-black w-full ml-2">
                <Icon size="1.5em" /> {title}
            </span>
        </Link>
    )
}