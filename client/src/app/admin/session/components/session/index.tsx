import Button from "@/app/components/form/button";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

interface IProps {
    currentSession?: boolean,
    os: string,
    device: string,
    location: string
}

export default function Session({ currentSession }: IProps) {
    return (
        <div className="rounded-lg border-gray-300 border bg-gray-50 p-5 flex items-start justify-between">
            <div className="flex items-center gap-4">
                <HiOutlineComputerDesktop size={36} color="gray"/>

                <div>
                    <div className="flex font-semibold text-sm">
                        <p className="text-gray-400">Hanoi</p>
                        <span className="mx-2">·</span>
                        <p className="text-gray-500">sbdjasbdcjajsdcjasdlcas</p>
                    </div>
                    <div className="flex text-sm">
                        <p>Windows</p>
                        <span className="mx-2">·</span>
                        {currentSession && <p className="text-green-500 font-semibold">Your current session</p>}
                    </div>
                </div>
            </div>

            <Button title="Revoke" color="failure" size="sm"/>
        </div>
    )
}