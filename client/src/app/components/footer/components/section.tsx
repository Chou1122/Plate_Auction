import Link from "next/link";

interface IProps {
    title: string,
    links: {
        href: string;
        name: string;
    }[]
}

export default function SectionFooter({ links, title }: IProps) {
    return (
        <div className="col-span-6 sm:col-span-3">
            <h1 className="uppercase tracking-wider font-semibold">{title}</h1>

            <div className="mt-5 px-4 flex flex-col gap-2">
                {links.map((link, index) => (
                    <Link
                        href={link.href}
                        className="hover:underline"
                        key={index.toString()}>
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}