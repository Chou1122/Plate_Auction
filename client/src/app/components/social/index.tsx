import { FaFacebook, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IconLink } from "../form/icon_link";



interface IProps {
    orientation?: "vertical" | "horizontal"
}

export default function Social({ orientation }: IProps) {
    return (
        <div className={"social flex gap-3 " + (orientation === "horizontal" ? "flex-row py-3" : "flex-col px-3")} >
            <IconLink icon={FaFacebook} className="hover:text-[#1773ea]" href="https://www.facebook.com/" def />
            <IconLink icon={FaTiktok} className="hover:text-[#080808]" href="https://www.tiktok.com/" def />
            <IconLink icon={FaYoutube} className="hover:text-[#ef0000]" href="https://www.youtube.com/" def />
            <IconLink icon={FaLinkedinIn} className="hover:text-[#087eb7]" href="https://www.linkedin.com" def />
            <IconLink icon={FaXTwitter} className="hover:text-[#080808]" href="https://www.twitter.com/" def />
        </div>
    )
}