import Link from "next/link";
import Logo from "../logo";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Button from "../button";

export default function Nav() {
    return (
        <nav className="py-8 flex justify-between items-start">
            <div>
                <Link href={""}>
                    <Logo />
                </Link>
            </div>

            <div className="flex flex-row gap-10 font-lato font-semibold text-blue-950 text-lg items-center">
                <Link className="hover:text-white hover:font-bold transition-all" href={""}>Upcoming</Link>
                <Link className="hover:text-white hover:font-bold transition-all" href={""}>Ongoing</Link>
                <Link className="hover:text-white hover:font-bold transition-all" href={""}>Result</Link>
                <Link className="text-white transition-all" href={""}>
                    <MdEmail size={32} />
                </Link>
                <Link className="text-white transition-all" href={""}>
                    <IoCall size={32} />
                </Link>

                <Button>
                    Sign up
                </Button>
            </div>
        </nav>
    )
}