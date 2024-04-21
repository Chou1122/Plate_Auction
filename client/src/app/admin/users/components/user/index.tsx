import Select from "@/app/components/form/select";
import { EUserRole } from "@/types/user";
import { Avatar } from "flowbite-react";
import { useState } from "react";
import { TbPasswordUser, TbUserExclamation, TbUserMinus } from "react-icons/tb";

const UserRoleSets = [
    { name: "Admin", value: EUserRole.ADMIN },
    { name: "Auctioneer", value: EUserRole.AUCTIONEER },
    { name: "Provider", value: EUserRole.PROVIDER },
]

export interface IUserShower {
    fullname: string;
    role: EUserRole;
    id: string;
    avatar?: string;
}

interface IProps {
    data: IUserShower
}

export default function User({ data }: IProps) {


    return (
        <div className="flex justify-between items-center border-b border-gray-200 py-2">
            <div className="flex items-center gap-3 text-sm">
                <Avatar rounded size="sm" />
                <p className="font-semibold text-blue-900">Do Tuan Nghia</p>
                <p className="text-gray-400">nghiacangao@gmail.com</p>
            </div>

            <div className="flex justify-center items-center gap-3">
                <Select noPadding sizing="sm" dataset={UserRoleSets} />

                <button className="p-2 hover:bg-green-100 hover:text-green-600 rounded-lg text-gray-600">
                    <TbPasswordUser size={24} />
                </button>

                <button className="p-2 hover:bg-yellow-100 hover:text-yellow-600 rounded-lg text-gray-600">
                    <TbUserExclamation size={24} />
                </button>

                <button className="p-2 hover:bg-red-100 hover:text-red-600 rounded-lg text-gray-600">
                    <TbUserMinus size={24} />
                </button>
            </div>
        </div>
    )
}