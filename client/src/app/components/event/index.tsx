import Link from "next/link";
import { IoFlame } from "react-icons/io5";
import Card from "../card";

export default function EventPanel() {
    return (
        <div className="rounded-xl shadow-2xl p-10 bg-white border border-gray-200">
            <div className="flex flex-row gap-10 justify-between">
                <div>
                    <h1 className="text-blue-950 flex text-3xl font-bold items-center">
                        Ongoing bill
                        <span className="text-orange-400">
                            <IoFlame size={36} />
                        </span>
                    </h1>
                    <h3 className="text-blue-400 text-xl font-semibold mt-2">
                        #highest_price:
                        <span className="font-black ml-3">
                            150.000.000
                        </span>
                    </h3>
                </div>

                <Link
                    href={""}
                    className="hidden md:flex px-5 py-2 bg-cgreen-600 text-white text-lg font-semibold h-fit rounded-full hover:-translate-y-1 transition-all hover:shadow-xl hover:bg-cgreen-500 shadow-green-300/35">
                    Join now
                </Link>
            </div>

            <div className="flex gap-4 mt-10 flex-wrap justify-center group/card">
                <Card enable_blur/>
                <Card enable_blur/>
                <Card enable_blur/>
            </div>
        </div>
    )
}