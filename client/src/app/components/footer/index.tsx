import Image from "next/image";
import Logo from "../logo";
import OnlineImg from "@/assets/onlinegov.png"
import Link from "next/link";
import SectionFooter from "./components/section";
import Social from "../social";
import { IoIosPaper, IoMdMail, IoMdMap } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import TextIcon from "./components/item";

const links1 = [{
    name: "Homepage",
    href: "/"
}, {
    name: "Homepage",
    href: "/"
}]

export default function Footer() {
    return (
        <footer className="relative bg-blue-950 w-full px-10 py-16 text-white font-lato">
            <div className="container grid grid-cols-12 gap-10 mx-auto">
                <div className="flex flex-col justify-between col-span-2">
                    <div>
                        <Logo type="light" />
                        <p className="">Online auction system for plate</p>
                    </div>

                    <div>
                        <Image src={OnlineImg} alt="" />
                        <p className="">Copyright all rights reserved. </p>
                    </div>
                </div>

                <SectionFooter links={links1} />
                <SectionFooter links={links1} />
                <SectionFooter links={links1} />

                <div className="col-span-4">
                    <Social orientation="horizontal" />

                    <div className="mt-5">
                        <TextIcon icon={IoIosPaper} content="Giấy chứng nhận: ĐKHĐ: 41/TP-ĐKHĐ do Sở Tư pháp Hà Nội cấp ngày 21/01/2019" />
                        <TextIcon icon={IoMdMap} content="Địa chỉ: L4-05 Tầng 4 Toà nhà N02 - TNL PLAZA GOLDSEASON 47 Nguyễn Tuân, P. Thanh Xuân Trung, Quận Thanh Xuân, Hà Nội" />
                        <TextIcon icon={IoCall} content="Hotline: 1900.0555.15" />
                        <TextIcon icon={IoMdMail} content="Email: dgbs@vpa.com.vn" />
                    </div>
                </div>
            </div>
        </footer>
    )
}