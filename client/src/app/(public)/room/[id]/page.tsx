"use client"

import Plate from "./components/plate";
import CurrentValue from "./components/current";
import LiveChip from "./components/live_chip";
import Line, { IContent } from "./components/line";
import { useEffect, useState } from "react";
import { socket } from "@/socket";
import Button from "@/app/components/form/button";
import { useAuth } from "@/hooks/auth/auth";

export default function RoomPage() {
    const [isConnected, setIsConnected] = useState(false);
    const [transit, setTransit] = useState<IContent[]>([]);
    const [currentValue, setCurrentValue] = useState(100000000);
    const [currentUser, setCurrentUser] = useState({ avatar: "", fullname: "Pham Hong Minh", id: "" });
    const { user } = useAuth();

    function updateTransit(newData: IContent) {
        setTransit(oldData => [...oldData, newData])
    }

    useEffect(() => {
        if (socket.connected) {
            onConnect();
        }

        function onConnect() {
            setIsConnected(true);
        }

        function onDisconnect() {
            setIsConnected(false);
        }

        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);
        socket.on("new", (data) => {
            const d = JSON.parse(data);
            updateTransit({
                time: 200,
                user: d.user,
                value: d.value
            });
            setCurrentValue(d.value);
            setCurrentUser(d.user);
        })

        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
        };
    }, []);


    function push() {
        socket.emit("new", JSON.stringify({
            user,
            plate: "1234567890",
            value: currentValue + 50000000
        }));
    }

    return (
        <div className="mx-auto container flex my-10 p-5 gap-10 justify-center">
            <div className="space-y-10">
                <Plate plate="29A-21780" />
                <CurrentValue value={currentValue} user={currentUser} />
            </div>

            <div className="space-y-5 w-[500px] ">
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                    <LiveChip content="200 participants" />
                    <LiveChip time={200} />
                </div>

                <div className="bg-gray-100 rounded-lg p-5 w-full h-64 space-y-2 overflow-y-scroll">
                    {transit.map((item, index) => (
                        <Line
                            key={indexedDB.toString()}
                            user={item.user}
                            time={item.time}
                            value={item.value} />
                    ))}
                </div>

                <div className="mt-10 space-y-5">
                    <Button title={"Chốt giá " + (currentValue + 50000000)} color="primary" fullSized onClick={push} />
                </div>
            </div>
        </div>
    )
}