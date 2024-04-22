import React from "react"

interface IProps {
    icon: any,
    content?: string,
    children?: React.ReactNode
}

export default function TextIcon({ icon: Icon, content, children }: IProps) {
    return (
        <div
            className="flex items-center mb-2 col-span-12 sm:col-span-2 lg:col-span-4">
            <span className="p-2 rounded-full bg-green-300/20 mr-2 flex-none">
                <Icon
                    className="text-green-300"
                    size={21} />
            </span>
            <span className="block">
                <span className="font-montserat text-green-300 text-sm mr-2"> {content}</span>
                {children}
            </span>
        </div>
    )
}