import Button from "@/app/components/form/button";
import { Avatar } from "flowbite-react";

export default function RoomPage() {
    return (
        <div className="mx-auto container flex my-10 p-5 gap-10 justify-center">
            <div className="space-y-10">
                <div className="border-2 border-blue-900 flex flex-col justify-center items-center font-montserat text-9xl font-bold p-5 bg-white rounded-lg shadow-lg">
                    <span>29A</span>
                    <span>17056</span>
                </div>

                <div className="space-y-5">
                    <div className="p-3 bg-green-50 border-2 border-green-500 rounded-xl animate-pulse">
                        <p className="text-2xl font-semibold text-green-500 w-full text-center">Current: <span className="font-bold">1.000.000 đ</span></p>
                    </div>

                    <div className="flex items-center gap-2 font-montserat">
                        <div className="flex gap-3 items-center rounded-full bg-yellow-100 p-1 pr-3 w-fit text-yellow-500 text-sm">
                            <Avatar rounded size="xs" />
                            <span className="font-semibold">Pham Hong Minh</span>
                        </div>
                        <span>gave this price</span>
                    </div>
                </div>
            </div>

            <div className="space-y-5 w-96">
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                    <div className="flex items-center bg-red-50 rounded-full p-1 px-3 font-semibold font-montserat text-red-500 text-sm">
                        <div className="h-1 w-1 rounded-full bg-red-500 animate-ping"></div>
                        <span className="ml-3">Live 200 participants</span>
                    </div>

                    <div className="flex items-center bg-red-50 rounded-full p-1 px-3 font-semibold font-montserat text-red-500 text-sm">
                        <div className="h-1 w-1 rounded-full bg-red-500 animate-ping"></div>
                        <span className="ml-3">20:01:00</span>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-lg p-5 w-full h-64">
                    <p className="font-montserat text-sm">
                        <span className="font-semibold">Pham hong minh</span>
                        <span className="bg-green-200 text-green-500 rounded-full px-2">200.000.000đ</span>
                        <span className="bg-red-200 text-red-500 rounded-full px-2">00:00:01</span>
                    </p>

                    <p className="font-montserat text-sm"><span className="font-semibold">Pham hong minh</span> dau gia <span className="bg-green-200 text-green-500 rounded-full px-2">200.000.000đ</span></p>

                    <p className="font-montserat text-sm"><span className="font-semibold">Pham hong minh</span> dau gia <span className="bg-green-200 text-green-500 rounded-full px-2">200.000.000đ</span></p>
                </div>

                <div className="mt-10 space-y-5">
                    <Button title="Chốt giá 150.000.000 đ" color="primary" fullSized />
                    <Button title="Set price" color="gray" fullSized />
                </div>
            </div>
        </div>
    )
}