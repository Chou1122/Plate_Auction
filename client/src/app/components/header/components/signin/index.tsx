"use client"

import { useAuth } from "@/hooks/auth/auth";
import { Avatar, Dropdown } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TbAssembly, TbLogin, TbLogout } from "react-icons/tb";

export default function UserStatus() {
    const { user, signOut } = useAuth();
    const router = useRouter();

    function handleSignOut() {
        signOut();
        router.replace("/login");
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
                className="hidden xs:block rounded-full p-3 bg-green-100 hover:bg-cgreen-600"
                href={"/login"}>
                <TbLogin size={24} />
            </Link>

    )
}