import Link from "next/link";
import { TbSmartHome } from "react-icons/tb";

interface IProps {
    icon: any;
    title: string
    selected?: boolean;
}

export default function Item({ icon: Icon, title, selected }: IProps) {
    return (
        <Link href={""}
            className={"before:w-1 before:flex before:flex-none before:rounded-full before:content-[''] flex w-full " +
                (selected ? "before:bg-blue-700" : "before:bg-transparent")}>
            <span
                className="font-montserat hover:bg-gray-100 font-medium rounded-md py-1 px-2 flex items-center gap-2 text-gray-700 hover:text-black w-full ml-2">
                <Icon size="1.5em" /> {title}
            </span>
        </Link>
    )
}