"use client"

import { useAuth } from "@/hooks/auth/auth";
import { Avatar, Dropdown } from "flowbite-react";
import Link from "next/link";
import { TbAssembly, TbLogout } from "react-icons/tb";

export default function SigninButton() {
    const { user, signOut } = useAuth();
    function handleSignOut() {
        signOut();
    }

    return (
        user.id
            ? <Dropdown
                label={<Avatar rounded img={user.avatar} />}
                arrowIcon={false}
                inline
                className="w-56 rounded-xl shadow-lg overflow-hidden px-1">
                <Dropdown.Header className="bg-gray-100 rounded-md">
                    <p className="">
                        {user.fullname}
                        <span className="lowercase text-xs text-yellow-500 bg-yellow-100 rounded-full w-fit px-2 py-1 ml-2">{user.role}</span>
                    </p>
                    <span className="text-xs text-gray-400 font-semibold">{user.id.substring(0, 8)}</span>
                </Dropdown.Header>

                <Dropdown.Item
                    onClick={handleSignOut}
                    className="rounded-md">
                    <TbLogout className="mr-2" size={20} /> Logout
                </Dropdown.Item>
                <Dropdown.Item
                    as={Link} href="/admin"
                    className="rounded-md">
                    <TbAssembly className="mr-2" size={20} />Dashboard
                </Dropdown.Item>

            </Dropdown>
            : <Link
                className="hidden xs:block rounded-full px-5 py-3 bg-blue-950 text-white hover:bg-cgreen-600 transition-all text-center font-semibold text-sm"
                href={"/signup"}>
                Sign up
            </Link>

    )
}