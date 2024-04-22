import { default as Link_ } from "next/link"

interface IProps {
    title: string,
    href: string,
    color?: "white" | "dark" | "green"
    size?: "sm" | "md"
    bold?: boolean
}

export default function Link({ href, title, color = "white", size = "sm", bold }: IProps) {
    return (
        <Link_ href={href} className={
            "transition-all after:block after:h-1 after:w-0 after:rounded-full after:overflow-hidden hover:after:w-full after:transition-all font-montserat w-fit inline-grid " +
            (size === "sm" ? "text-sm " : "text-sm ") +
            (bold ? 'font-bold ' : 'font-semibold ') +
            (color === 'white'
                ? "text-white after:bg-white"
                : color === 'dark'
                    ? "text-blue-950 after:bg-blue-950"
                    : "text-green-600 hover:text-green-500 after:bg-green-500")
        }>
            {title}
        </Link_>
    )
}