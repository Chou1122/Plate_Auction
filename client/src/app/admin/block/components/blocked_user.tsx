import Button from "@/app/components/form/button";
import { Avatar } from "flowbite-react";
import Link from "next/link";
import { TbLockOpen } from "react-icons/tb";

export default function BlockedUser() {
    return (
        <div className="flex justify-between items-center">
            <Avatar size="sm" rounded>
                <div>
                    <Link href="/" className="font-semibold hover:underline text-green-500 text-sm">Nguyen Hoai An</Link>
                    <p className="text-gray-400 text-sm">Nguyenhoaian@gmail.com</p>
                </div>
            </Avatar>

            <div>Block until: 21/03/2024</div>
            <Button title="Unblock" color="gray" icon={TbLockOpen} size="sm"/>
        </div>
    )
}