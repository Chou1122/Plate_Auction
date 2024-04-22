import Select from "@/app/components/form/select";
import axios, { IResponse } from "@/configs/axios";
import { useAuth } from "@/hooks/auth/auth";
import { EUserRole } from "@/types/user";
import { Avatar } from "flowbite-react";
import { TbPasswordUser, TbUserExclamation, TbUserMinus } from "react-icons/tb";
import { toast } from "react-toastify";
import UserPass from "../user_pass";
import UserDel from "../user_del";

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
    email: string;
}

interface IProps {
    data: IUserShower
    onDelete: (id: string) => void
}

export default function User({ data, onDelete }: IProps) {
    const { user } = useAuth();

    return (
        <div className="flex justify-between items-center border-b border-gray-200 py-2">
            <div className="flex items-center gap-3 text-sm">
                <Avatar rounded size="sm" img={data.avatar} />
                <div>
                    <div className="flex gap-3">
                        <p className="font-semibold text-blue-900">{data.fullname}</p>
                        <p className="text-white bg-green-400 rounded-full px-2">{data.email}</p>
                        {user.id === data.id &&
                            <p className="text-white bg-yellow-300 rounded-full px-2">You</p>}
                    </div>
                    <p className="text-sm text-gray-400">{data.id}</p>
                </div>

            </div>

            <div className="flex justify-center items-center gap-3">
                <Select noPadding sizing="sm" dataset={UserRoleSets} value={data.role} />

                <UserPass id={data.id} />

                <button className="p-2 hover:bg-yellow-100 hover:text-yellow-600 rounded-lg text-gray-600">
                    <TbUserExclamation size={24} />
                </button>

                <UserDel id={data.id} onSuccess={() => onDelete(data.id)} />
            </div>
        </div>
    )
}