import Link from "next/link";
import { FaFacebook, FaLinkedinIn, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

interface IProps {
    orientation?: "vertical" | "horizontal"
}

export default function Social({ orientation }: IProps) {
    return (
        <div className={"flex gap-5 " + (orientation === "horizontal" ? "flex-row" : "flex-col")} >
            <Link href={""} className="text-white">
                <FaFacebook size={32} />
            </Link>
            <Link href={""} className="text-white">
                <FaTiktok size={32} />
            </Link>
            <Link href={""} className="text-white">
                <FaYoutube size={32} />
            </Link>
            <Link href={""} className="text-white">
                <FaLinkedinIn size={32} />
            </Link>
            <Link href={""} className="text-white">
                <FaTwitter size={32} />
            </Link>
        </div>
    )
}