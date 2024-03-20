import Link from "next/link";
import Logo from "../logo";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Button from "../button";
import { IoMdMenu } from "react-icons/io";

export default function Nav() {
    return (
        <nav className="flex justify-between items-start">
            <div>
                <Link href={""}>
                    <Logo />
                </Link>
            </div>

            <div className="flex flex-row gap-5 font-montserat font-semibold text-blue-950 text-lg items-center">
                <div className="hidden lg:flex gap-5">
                    <Link className="hover:text-white hover:font-bold transition-all" href={""}>Upcoming</Link>
                    <Link className="hover:text-white hover:font-bold transition-all" href={""}>Ongoing</Link>
                    <Link className="hover:text-white hover:font-bold transition-all" href={""}>Result</Link>
                </div>

                <div className="hidden lg:flex gap-5">
                    <Link className="text-white transition-all" href={""}>
                        <MdEmail size={32} />
                    </Link>
                    <Link className="text-white transition-all" href={""}>
                        <IoCall size={32} />
                    </Link>
                </div>

                <Button>
                    Sign up
                </Button>

                <button className="block lg:hidden text-blue-950 border-2 border-blue-950 p-2 rounded-md">
                    <IoMdMenu />
                </button>
            </div>
        </nav>
    )
}