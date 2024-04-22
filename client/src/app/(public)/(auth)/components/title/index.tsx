interface IProps {
    title: string,
    subtitle: string,
}

export default function FormTitle({ title, subtitle }: IProps) {
    return (
        <div className="mb-10">
            <h1 className="font-montserat font-extrabold text-left text-4xl text-blue-950 mb-2">{title}</h1>
            <p className="text-gray-400 font-montserat font-medium">{subtitle}</p>
        </div>
    )
}