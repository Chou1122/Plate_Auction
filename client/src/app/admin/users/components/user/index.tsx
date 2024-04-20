import Select from "@/app/components/form/select";
import { Avatar } from "flowbite-react";
import { TbUserExclamation, TbUserMinus } from "react-icons/tb";

export default function User() {
    return (
        <div className="flex justify-between items-center border-b border-gray-200 py-2">
            <div className="flex items-center gap-3 text-sm">
                <Avatar rounded size="sm"/>
                <p className="font-semibold text-blue-900">Do Tuan Nghia</p>
                <p className="text-gray-400">nghiacangao@gmail.com</p>
            </div>

            <div className="flex justify-center items-center gap-3">
                <Select noPadding sizing="sm"/>
                <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                    <TbUserExclamation size={24}/>
                </button>

                <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                    <TbUserMinus size={24}/>
                </button>
            </div>
        </div>
    )
}