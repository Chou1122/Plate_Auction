import Link from "next/link"

interface IProps {
    type?: "normal" | "light",
    showName?: boolean
}

export default function Logo({ type, showName }: IProps) {
    return (
        <div className="w-fit">
            <Link
                href={"/"}
                className={
                    "block py-2 px-4 font-lato font-black w-full " +
                    (type === 'light'
                        ? 'text-white'
                        : 'bg-white text-cgreen-600')
                }>
                <span className="block text-3xl tracking-widest">AUCTION</span>
                <span className="block text-md">SYSTEM</span>
            </Link>
            
            {
                showName &&
                <p className="font-lato peer-hover:ml-0 peer-hover:mt-2 mt-0 ml-4 transition-all text-sm">Online auction system for plate</p>
            }
        </div>
    )
}