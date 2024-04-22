import Select from "@/app/components/form/select";
import { useAuth } from "@/hooks/auth/auth";
import { EUserRole } from "@/types/user";
import { Avatar } from "flowbite-react";
import UserPass from "../user_pass";
import UserDel from "../user_del";
import UserBan, { IBanData } from "../user_ban";

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
    banned: boolean;
    ban_until: Date;
}

export interface IProps {
    data: IUserShower
    onDelete: (id: string) => void,
    onBan: (id: string, data: IBanData) => void
}

export default function User({ data, onDelete, onBan }: IProps) {
    const { user } = useAuth();

    function formatTime(time: Date) {
        const date = new Date(time);
        return `${date.getFullYear()} - ${date.getMonth() + 1} - ${date.getDate()}`
    }

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
                        {data.banned &&
                            <p className="text-white bg-red-500 rounded-full px-2">
                                Banned until: <span className="font-semibold">{formatTime(data.ban_until)}</span></p>}
                    </div>
                    <p className="text-sm text-gray-400">{data.id}</p>
                </div>

            </div>

            <div className="flex justify-center items-center gap-3">
                <Select noPadding sizing="sm" dataset={UserRoleSets} value={data.role} />

                <UserPass id={data.id} />
                <UserBan id={data.id} onSuccess={(value) => onBan(data.id, value)} banned={data.banned} />
                <UserDel id={data.id} onSuccess={() => onDelete(data.id)} />
            </div>
        </div>
    )
}