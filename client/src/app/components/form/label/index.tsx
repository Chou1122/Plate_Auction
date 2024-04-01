import { LabelProps, Label as Label_ } from "flowbite-react";

interface IProps extends LabelProps {
    name?: string;
}

export default function Label({ name, title }: IProps) {
    return (
        <Label_ htmlFor={name} className="ml-2 text-sm font-semibold font-montserat">{title}</Label_>
    )
}