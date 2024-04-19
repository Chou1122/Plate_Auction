interface IProps {
    title?: string
}

export default function SidebarBreak({ title }: IProps) {
    return (
        <>
            <hr className="mt-5" />
            {title &&
                <h5 className="text-gray-400 text-sm font-semibold ml-6 my-2">
                    {title}
                </h5>
            }
        </>
    )
}