import Link from "next/link";
import { FaFacebook, FaLinkedinIn, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

interface ILinkProp {
    icon: any;
    href: string;
    className: string;
}

function CLink({ icon: Icon, href, className }: ILinkProp) {
    return (
        <Link
            href={href}
            className={className + " text-white transition-all hover:bg-white p-2 rounded-full hover:scale-105"}>
            <Icon size={32} />
        </Link>
    )
}

interface IProps {
    orientation?: "vertical" | "horizontal"
}

export default function Social({ orientation }: IProps) {
    return (
        <div className={"social flex gap-3 " + (orientation === "horizontal" ? "flex-row py-3" : "flex-col px-3")} >
            <CLink icon={FaFacebook} className="hover:text-[#1773ea]" href="https://www.facebook.com/" />
            <CLink icon={FaTiktok} className="text-white hover:text-[#080808]" href="https://www.tiktok.com/" />
            <CLink icon={FaYoutube} className="hover:text-[#ef0000]" href="https://www.youtube.com/" />
            <CLink icon={FaLinkedinIn} className="hover:text-[#087eb7]" href="https://www.linkedin.com" />
            <CLink icon={FaTwitter} className="hover:text-[#080808]" href="https://www.twitter.com/" />
        </div>
    )
}