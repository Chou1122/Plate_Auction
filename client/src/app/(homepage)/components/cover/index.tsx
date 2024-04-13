import Social from "@/app/components/social";

export default function Cover({ className }: { className?: string }) {
    return (
        <div className={className}>
            <Social />
            <div>
                <div className="uppercase text-white flex flex-col gap-3 font-lato tracking-wider">
                    <span className="block text-4xl font-light">Online</span>
                    <span className="block text-9xl font-black">Auction</span>
                    <span className="block text-4xl font-light">Of the plate</span>
                </div>

                <div className="rounded-full overflow-hidden py-1 bg-white flex flex-row px-1 w-fit mt-10">
                    <input type="text" className="border-none focus:outline-none focus:ring-0 w-full" />

                    <button className="rounded-full bg-blue-900 hover:bg-blue-950 text-white px-5 ml-3">
                        Search
                    </button>
                </div>
            </div>
        </div>


    )
}