import Image from "next/image";
import Logo from "../logo";
import OnlineImg from "@/assets/onlinegov.png"
import SectionFooter from "./components/section";
import Social from "../social";
import { IoIosPaper, IoMdMail, IoMdMap } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import TextIcon from "./components/item";
import Link from "../form/link";

const links1 = [{
    name: "Homepage",
    href: "/"
}, {
    name: "News",
    href: "/news"
}, {
    name: "Official auction list",
    href: "/official"
}, {
    name: "Auction room",
    href: "/room"
}, {
    name: "Auction result",
    href: "/result"
}, {
    name: "Notification",
    href: "/notify"
}]

const links2 = [{
    name: "Term of use",
    href: "/term"
}, {
    name: "Instructions",
    href: "/instruction"
}]

export default function Footer() {
    return (
        <footer className="relative bg-blue-950 w-full px-10 py-16 text-white font-lato">
            <div className="container grid grid-cols-12 gap-0 gap-y-10 sm:gap-10 mx-auto">
                <div className="flex flex-col justify-between col-span-12 sm:col-span-4 xl:col-span-3">
                    <Logo type="light" showName />
                    <Image src={OnlineImg} alt="" />
                </div>

                <SectionFooter links={links1} title="about me" />
                <SectionFooter links={links2} title="navigator" />

                <div className="col-span-12 xl:col-span-3">
                    <Social orientation="horizontal" />
                    <div className="grid grid-cols-4 mt-5">
                        <TextIcon icon={IoCall} content="Hotline:">
                            <Link href={"tel:1900055515"} title="1900.0555.15" colorWhite />
                        </TextIcon>
                        <TextIcon icon={IoMdMail} content="Email:" >
                            <Link href={"mailto:dgbs@vpa.com.vn"} title="dgbs@vpa.com.vn" colorWhite />
                        </TextIcon>
                        <TextIcon icon={IoMdMap} content="Trụ sở chính:" >
                            <span className="font-montserat text-sm">L4-05 Tầng 4 Toà nhà N02 - TNL PLAZA GOLDSEASON 47 Nguyễn Tuân, P. Thanh Xuân Trung, Quận Thanh Xuân, Hà Nội</span>
                        </TextIcon>
                        <TextIcon icon={IoIosPaper} content="Giấy chứng nhận:">
                            <span className="font-montserat text-sm">ĐKHĐ: 41/TP-ĐKHĐ do Sở Tư pháp Hà Nội cấp ngày 21/01/2019</span>
                        </TextIcon>
                    </div>
                </div>
            </div>

            <div className="h-[1px] bg-gray-500 w-full my-5"></div>
            <p className="text-gray-500 font-montserat text-sm">Trang thông tin điện tử đấu giá trực tuyến đã được Sở Tư pháp thành phố Hà Nội phê duyệt đủ điều kiện thực hiện hình thức đấu giá trực tuyến theo Quyết định số 226/QĐ-STP ngày 16/3/2023</p>
        </footer>
    )
}