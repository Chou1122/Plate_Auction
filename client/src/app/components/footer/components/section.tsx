import Link from "../../form/link";

interface IProps {
    title: string,
    links: {
        href: string;
        name: string;
    }[]
}

export default function SectionFooter({ links, title }: IProps) {
    return (
        <div className="col-span-6 sm:col-span-4 xl:col-span-3">
            <h1 className="uppercase tracking-widest font-black w-fit after:block after:h-1 after:w-2/3 after:rounded-full after:overflow-hidden after:bg-white">{title}</h1>

            <div className="mt-5 px-4 flex flex-col gap-2">
                {links.map((link, index) => (
                    <Link
                        href={link.href}
                        key={index.toString()}
                        title={link.name} 
                        color="white"/>
                ))}
            </div>
        </div>
    )
}