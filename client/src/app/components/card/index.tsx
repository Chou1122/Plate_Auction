import Link from "next/link";
import { ImLeaf } from "react-icons/im";
import { IoIosTime } from "react-icons/io";
import { IoHeart, IoWallet } from "react-icons/io5";

interface IProps {
    like?: boolean,
    enable_blur?: boolean
}

export default function Card({ like, enable_blur }: IProps) {
    return (
        <div
            className={
                "bg-gray-50 border-2 hover:border-blue-950 border-gray-200 p-3 rounded-2xl font-montserat hover:shadow-xl transition-all hover:-translate-y-1 group hover:scale-105 " +
                (enable_blur ? "[&:not(:hover)]:group-hover/card:blur" : "")
            }>
            <div className="flex justify-between">
                <span className="px-3 py-1 rounded-full bg-red-100 text-red-500 font-semibold before:h-2 before:w-2 before:rounded-full flex items-center before:block before:bg-red-500 before:mr-2 text-sm">Live</span>

                <button className={(like ? "text-red-500" : "text-gray-300") + ""}>
                    <IoHeart size={24} />
                </button>
            </div>

            <div className="py-5 flex flex-col justify-center items-center">
                <div className="border-[2px] border-black rounded-md shadow-lg p-2 px-6 text-xl font-extrabold flex flex-col justify-center items-center w-fit bg-white">
                    <span>30A</span>
                    <span>123.45</span>
                </div>
            </div>

            <div className="flex flex-row justify-between my-5 px-2">
                <span className="flex items-center text-gray-300"><IoIosTime className="mr-2" /> 2:15 </span>
                <span className="flex items-center text-gray-300"><ImLeaf className="mr-2" /> Tam hoa </span>
            </div>

            <Link href={""} className="bg-blue-100 flex flex-row items-center text-blue-950 text-xl font-extrabold px-4 py-2 rounded-lg group-hover:bg-blue-950 group-hover:text-white transition-all">
                <span className="mr-4"><IoWallet /></span>
                150.000.000
            </Link>
        </div>
    )
}