import { default as Link_ } from "next/link"

interface IProps {
    title: string,
    href: string,
}

export default function Link({ href, title }: IProps) {
    return (
        <Link_ href={href} className="font-semibold text-green-600 transition-all hover:text-green-500 after:block after:h-1 after:w-0 after:bg-green-500 hover:after:w-full after:transition-all font-montserat">
            {title}
        </Link_>
    )
}