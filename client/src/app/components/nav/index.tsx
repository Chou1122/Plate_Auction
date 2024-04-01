import Link from "next/link";
import Logo from "../logo";
import HoverLink from "./components/link";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

export default function Nav({ whiteMode }: { whiteMode?: boolean }) {
    return (
        <nav className="flex justify-between items-center">
            <Logo />

            <div className="flex flex-row gap-5 lg:gap-10 font-montserat font-bold text-blue-950 text-lg items-center">
                <div className="hidden lg:flex gap-10">
                    <HoverLink href="" name="Upcoming" changeColor={whiteMode} />
                    <HoverLink href="" name="Ongoing" changeColor={whiteMode} />
                    <HoverLink href="" name="Result" changeColor={whiteMode} />
                </div>

                <div
                    className={
                        "social hidden lg:flex gap-2 rounded-full px-1 py-1 " +
                        (whiteMode ? 'bg-white' : 'bg-green-100')}>
                    <Link
                        className="text-cgreen-500 transition-all hover:bg-cgreen-600 hover:text-white p-2 rounded-full"
                        href={"mailto:dgbs@vpa.com.vn"}>
                        <MdEmail size={24} />
                    </Link>

                    <Link
                        className="text-cgreen-500 transition-all hover:bg-cgreen-600 hover:text-white p-2 rounded-full"
                        href={"tel:1900.0555.15"}>
                        <IoCall size={24} />
                    </Link>
                </div>

                <Link
                    className="hidden xs:block rounded-full px-5 py-3 bg-blue-950 text-white hover:bg-cgreen-600 transition-all text-center font-semibold text-sm"
                    href={"/signup"}>
                    Sign up
                </Link>

                <button className="block lg:hidden hover:bg-white p-3 rounded-full text-xl">
                    <IoMdMenu />
                </button>
            </div>
        </nav>
    )
}