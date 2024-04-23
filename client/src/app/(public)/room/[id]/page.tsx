import Plate from "./components/plate";
import CurrentValue from "./components/current";
import LiveChip from "./components/live_chip";
import Line from "./components/line";
import PriceBtn from "./components/pricebtn";

export default function RoomPage() {
    return (
        <div className="mx-auto container flex my-10 p-5 gap-10 justify-center">
            <div className="space-y-10">
                <Plate plate="29A-21780" />
                <CurrentValue value={1000000} user={{ avatar: "", fullname: "Pham Hong Minh", id: "hello" }} />
            </div>

            <div className="space-y-5 w-[500px] ">
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                    <LiveChip content="200 participants" />
                    <LiveChip time={200} />
                </div>

                <div className="bg-gray-100 rounded-lg p-5 w-full h-64 space-y-2 overflow-y-scroll">
                    <Line user={{ avatar: "", fullname: "Pham Hong Minh", id: "hello" }} time={100} value={150000000} />
                    <Line user={{ avatar: "", fullname: "Pham Hong Minh", id: "hello" }} time={100} value={150000000} />
                    <Line user={{ avatar: "", fullname: "Pham Hong Minh", id: "hello" }} time={100} value={150000000} />
                    <Line user={{ avatar: "", fullname: "Pham Hong Minh", id: "hello" }} time={100} value={150000000} />
                    <Line user={{ avatar: "", fullname: "Pham Hong Minh", id: "hello" }} time={100} value={150000000} />
                    <Line user={{ avatar: "", fullname: "Pham Hong Minh", id: "hello" }} time={100} value={150000000} />
                    <Line user={{ avatar: "", fullname: "Pham Hong Minh", id: "hello" }} time={100} value={150000000} />
                    <Line user={{ avatar: "", fullname: "Pham Hong Minh", id: "hello" }} time={100} value={150000000} />
                    <Line user={{ avatar: "", fullname: "Pham Hong Minh", id: "hello" }} time={100} value={150000000} />
                    <Line user={{ avatar: "", fullname: "Pham Hong Minh", id: "hello" }} time={100} value={150000000} />
                    <Line user={{ avatar: "", fullname: "Pham Hong Minh", id: "hello" }} time={100} value={150000000} />
                    <Line user={{ avatar: "", fullname: "Pham Hong Minh", id: "hello" }} time={100} value={150000000} />
                    <Line user={{ avatar: "", fullname: "Pham Hong Minh", id: "hello" }} time={100} value={150000000} />
                    <Line user={{ avatar: "", fullname: "Pham Hong Minh", id: "hello" }} time={100} value={150000000} />
                </div>

                <PriceBtn />
            </div>
        </div>
    )
}