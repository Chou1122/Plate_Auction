import { Avatar } from "flowbite-react";
import Link from "next/link";
import { TbView360 } from "react-icons/tb";

export default function Room() {
    return (
        <div className="border border-300 rounded-xl bg-gray-50 p-5 w-80 hover:shadow-xl transition-all">
            <div className="flex justify-between items-center">
                <div className="flex gap-3">
                    <p className="bg-green-100 text-green-500 px-2 rounded-full font-semibold w-fit h-fit text-sm">29Z-12345</p>
                    <p className="bg-red-100 text-red-500 px-2 rounded-full font-semibold w-fit h-fit text-sm">Live</p>
                </div>

                <Link href={"/room/"} className="hover:bg-gray-100 rounded-lg p-1 text-gray-400">
                    <TbView360 size={24} />
                </Link>
            </div>

            <div className="bg-gray-100 rounded-xl mt-3 p-5 py-3">
                <p>Price: <span>100.000.000</span></p>
            </div>

            <div className="bg-gray-100 rounded-xl mt-3 p-5 flex items-center gap-3 ">
                <Avatar rounded size="sm"/>
                <Link href="/user/" className="font-semibold hover:underline">Pham Hong Minh</Link>
            </div>
        </div>

    )
}