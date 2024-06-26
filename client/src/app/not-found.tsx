import Image from "next/image";
import Link from "./components/form/link";
import ImgNotfound from "@/assets/notfound.png"

export default function NotFoundAdmin() {
    return (
        <div className="h-screen w-screen flex justify-center items-center flex-col bg-gray-50">
            <Image src={ImgNotfound} alt="" />
            <h1 className="font-montserat my-2 text-sm bg-white px-3 py-2 rounded-full font-semibold text-blue-900">404 | Page not found. <Link href="/" title="Go home" color="green"/></h1>
        </div>
    )
}