"use client"

import { IUser } from "@/hooks/auth/auth";
import { Avatar, Badge } from "flowbite-react";
import Link from "next/link";
import { GoLightBulb } from "react-icons/go";

interface IProps {
    user?: IUser
}

export default function UserSummary({ user }: IProps) {
    return (
        <div className="flex mt-5 gap-5 items-center">
            <Avatar size="lg" rounded className="w-fit" img={user?.avatar} />
            {user
                ? <div className="flex flex-col items-start">
                    <Link
                        href={"/user/" + user.id}
                        className="font-montserat font-semibold hover:text-green-500 hover:underline">
                        {user.fullname}
                    </Link>
                    <p className="text-sm text-gray-400 mb-2 -mt-1">nghiacangao@gmail.com</p>
                    <Badge size="xs" icon={GoLightBulb} color="warning" className="w-fit px-3 lowercase">{user.role}</Badge>
                </div>
                : <div className="space-y-2">
                    <div className="h-4 bg-gray-200 animate-pulse w-40 rounded-md"></div>
                    <div className="h-3 w-48 animate-pulse bg-gray-200 rounded-md"></div>
                    <Badge size="xs" icon={GoLightBulb} color="warning" className="w-24 px-3 animate-pulse"></Badge>
                </div>}

        </div>
    )
}