import Link from "next/link";

interface IProps {
    href: string
    name: string
}
export default function HoverLink({ href, name }: IProps) {
    return (
        <Link
            className="transition-all hover:text-white after:block after:h-1 after:w-0 after:bg-white hover:after:w-full after:transition-all"
            href={href}>
            {name}
        </Link>
    )
}