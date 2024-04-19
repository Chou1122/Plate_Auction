import Logo from "@components/logo";

import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

import Link from "@components/form/link";
import { IconLink } from "@components/form/icon_link";
import SigninButton from "../signin";

export default function Nav({ lightMode }: { lightMode?: boolean }) {
    return (
        <nav className="flex justify-between items-center">
            <Logo />

            <div className="flex flex-row gap-5 lg:gap-10 font-montserat font-bold text-blue-950 text-lg items-center">
                <div className="hidden lg:flex gap-10">
                    <Link
                        href=""
                        title="Official list"
                        color={lightMode ? "white" : "dark"}
                        size="md" bold />
                    <Link
                        href=""
                        title="Announcement list"
                        color={lightMode ? "white" : "dark"}
                        size="md" bold />
                    <Link
                        href=""
                        title="Result"
                        color={lightMode ? "white" : "dark"}
                        size="md" bold />
                </div>

                <div
                    className={
                        "social hidden lg:flex gap-2 rounded-full px-1 py-1 " +
                        (lightMode ? 'bg-white' : 'bg-green-100')}>
                    <IconLink
                        icon={IoCall}
                        href="tel:1900.0555.15"
                        className="text-cgreen-500 bg-transparent hover:bg-cgreen-500 hover:text-white peer"
                        size={24}
                    />

                    <IconLink
                        icon={MdEmail}
                        href="mailto:dgbs@vpa.com.vn"
                        className="bg-cgreen-500 text-white peer hover:bg-cgreen-500 hover:text-white peer-hover:text-cgreen-500 peer-hover:bg-transparent"
                        size={24}
                    />

                </div>

                <SigninButton />

                <button className="block lg:hidden hover:bg-white p-3 rounded-full text-xl">
                    <IoMdMenu />
                </button>
            </div>
        </nav>
    )
}