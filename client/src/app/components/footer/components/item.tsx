interface IProps {
    icon: any,
    content: string
}

export default function TextIcon({ icon: Icon, content }: IProps) {
    return (
        <span
            className="flex items-start mb-2 col-span-12 sm:col-span-2 lg:col-span-4">
            <Icon
                className="mr-2 flex-none"
                size={21} />
            {content}
        </span>
    )
}