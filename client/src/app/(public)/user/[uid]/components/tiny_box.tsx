interface IProps {
    title?: string;
    content?: string;
    loading?: boolean;
}

export default function TinyBox({ title, content, loading }: IProps) {
    return (
        <>
            {!loading
                ? <div className="p-5 py-3 rounded-2xl border border-gray-200 font-montserat bg-gray-50 w-full">
                    < span className="text-sm font-semibold text-gray-400" > {title}</span >
                    <p className="text-md font-semibold text-gray-900 lowercase">{content}</p>
                </div >
                : <div className="p-5 py-3 rounded-2xl border border-gray-200 font-montserat bg-gray-50 w-full space-y-3">
                    <div className="h-3 w-10 bg-gray-200 animate-pulse rounded-md"></div>
                    <div className="h-5 w-28 bg-gray-300 animate-pulse rounded-md"></div>
                </div >}
        </>

    )
}