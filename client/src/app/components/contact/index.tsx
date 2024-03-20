import Link from "next/link";

export default function Contact() {
    return (
        <div className="font-lato z-50 text-blue-950 font-semibold">
            <Link
                href={"mailto:dgbs@vpa.com.vn"}
                className="hover:underline inline-block after:inline-block after:w-5 after:h-[1px] after:bg-blue-950">Email: dgbs@vpa.com.vn</Link>

            <Link
                href={"tel:1900055515"}
                className="inline-block hover:underline ml-5">Hotline: 1900.0555.15</Link>
        </div>
    )
}