import Link from "next/link"

interface IProps {
    type?: "normal" | "light",
    showName?: boolean
}

export default function Logo({ type, showName }: IProps) {
    return (
        <div>
            <Link
                href={"/"}
                className={
                    "block py-2 px-4 font-lato font-black w-fit transition-all " +
                    (type === 'light'
                        ? 'text-white hover:bg-white hover:text-cgreen-600'
                        : 'bg-white text-cgreen-600')
                }>
                <span className="block text-3xl tracking-widest">AUCTION</span>
                <span className="block text-md">SYSTEM</span>
            </Link>
            {showName && <p className="">Online auction system for plate</p>}
        </div>
    )
}