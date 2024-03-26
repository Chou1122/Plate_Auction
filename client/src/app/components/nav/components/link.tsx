import Link from "next/link";

interface IProps {
    href: string
    name: string,
    changeColor?: boolean
}
export default function HoverLink({ href, name, changeColor }: IProps) {
    return (
        <Link
            className={"transition-all after:block after:h-1 after:w-0 hover:after:w-full after:transition-all " + (changeColor ? "hover:text-white after:bg-white" : "after:bg-blue-950")}
            href={href}>
            {name}
        </Link>
    )
}