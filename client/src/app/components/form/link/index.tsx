import { default as Link_ } from "next/link"

interface IProps {
    title: string,
    href: string,
    colorWhite?: boolean
}

export default function Link({ href, title, colorWhite }: IProps) {
    return (
        <Link_ href={href} className={
            "font-semibold transition-all after:block after:h-1 after:w-0 after:rounded-full after:overflow-hidden hover:after:w-full after:transition-all font-montserat text-sm w-fit inline-grid " +
            (colorWhite ? "text-white after:bg-white" : "text-green-600 hover:text-green-500 after:bg-green-500")}>
            {title}
        </Link_>
    )
}