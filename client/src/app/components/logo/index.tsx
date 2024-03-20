interface IProps {
    type?: "normal" | "light"
}

export default function Logo({ type }: IProps) {
    return (
        <>
            {type === "light"
                ? <div className="py-2 font-lato font-black w-fit text-white">
                    <span className="block text-3xl tracking-widest">AUCTION</span>
                    <span className="block text-md">SYSTEM</span>
                </div>
                : <div className="bg-white px-4 py-2 font-lato font-black w-fit text-cgreen-600">
                    <span className="block text-3xl tracking-widest">AUCTION</span>
                    <span className="block text-md">SYSTEM</span>
                </div>
            }
        </>
    )
}