import Link from "next/link";
import Logo from "../logo";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Button from "../button";
import { IoMdMenu } from "react-icons/io";
import HoverLink from "./components/link";

export default function Nav() {
    return (
        <nav className="flex justify-between items-start">
            <Link href={""}>
                <Logo />
            </Link>

            <div className="flex flex-row gap-5 lg:gap-10 font-montserat font-bold text-blue-950 text-lg items-center">
                <div className="hidden lg:flex gap-10">
                    <HoverLink href="" name="Upcoming" />
                    <HoverLink href="" name="Ongoing" />
                    <HoverLink href="" name="Result" />
                </div>

                <div className="hidden lg:flex gap-2 bg-white rounded-full px-1 py-1">
                    <Link className="text-cgreen-500 transition-all hover:bg-cgreen-600 hover:text-blue-950 p-2 rounded-full" href={""}>
                        <MdEmail size={24} />
                    </Link>
                    <Link className="text-cgreen-500 transition-all hover:bg-cgreen-600 hover:text-blue-950 p-2 rounded-full" href={""}>
                        <IoCall size={24} />
                    </Link>
                </div>

                <Button color={"dark"}>
                    Sign up
                </Button>

                <button className="block lg:hidden hover:bg-white p-3 rounded-full text-xl">
                    <IoMdMenu />
                </button>
            </div>
        </nav>
    )
}