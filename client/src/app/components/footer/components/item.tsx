interface IProps {
    icon: any,
    content: string
}

export default function TextIcon({ icon: Icon, content }: IProps) {
    return (
        <span
            className="flex items-start mb-2">
            <Icon
                className="mr-2 flex-none"
                size={21} />
            {content}
        </span>
    )
}