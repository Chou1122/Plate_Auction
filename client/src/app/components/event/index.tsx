import Link from "next/link";
import { IoFlame } from "react-icons/io5";

export default function Event() {
    return (
        <div className="rounded-xl shadow-xl p-10 bg-white">
            <div className="flex flex-row gap-10">
                <div>
                    <h1 className="text-blue-950 flex text-3xl font-bold items-center">
                        Ongoing bill
                        <span className="text-orange-400">
                            <IoFlame size={36} />
                        </span>
                    </h1>
                    <h3 className="text-cgreen-500 text-xl font-semibold mt-2">
                        #hightest_price:
                        <span className="font-black ml-3">
                            150.000.000
                        </span>
                    </h3>
                </div>

                <Link href={""} className="px-5 py-2 bg-cgreen-500 text-white text-xl font-semibold h-fit rounded-full">
                    Join now
                </Link>
            </div>
        </div>
    )
}