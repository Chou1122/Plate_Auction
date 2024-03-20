import Link from "next/link";

interface IProps {
    links: {
        href: string;
        name: string;
    }[]
}

export default function SectionFooter({ links }: IProps) {
    return (
        <div className="col-span-2">
            <h1 className="uppercase tracking-wider font-semibold">ABOUT ME</h1>

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