import Link from "next/link";

interface ILinkProp {
    icon: any;
    href: string;
    className: string;
    size?: number;
    def?: boolean;
}

export function IconLink({ icon: Icon, href, className, size = 32, def }: ILinkProp) {
    return (
        <Link
            href={href}
            className={
                " transition-all p-2 rounded-full " +
                (def ? "text-white hover:bg-white " : " ") +
                className
            }>
            <Icon size={size} />
        </Link>
    )
}