import { MdNumbers } from "react-icons/md";

interface IProps {
    icon: any;
    title: string;
    content?: string;
}

export default function ListItem({ icon: Icon, title, content }: IProps) {
    return (
        <div className="flex items-center font-semibold justify-between font-montserat">
            <span className="flex items-center text-sm">{<Icon />} <span className="ml-2">{title}</span></span>
            <span className="ml-2">{content}</span>
        </div>
    )
}