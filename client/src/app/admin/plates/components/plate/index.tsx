"use client"

import Checkbox from "@/app/components/form/checkbox"
import { EPlateType, EPlateVehicle } from "@/types/plate"

export interface IPlateShower {
    plate: string
    type: EPlateType
    vehicle: EPlateVehicle,
    province: string
}

interface IProps {
    data: IPlateShower;
    index: number
}

export default function Plate({ data, index }: IProps) {
    return (
        <div className="flex items-center odd:bg-gray-50 rounded-md hover:bg-gray-100 p-2 px-3">
            <Checkbox name="a" />

            <div className="grid grid-cols-12 w-full">
                <p className="col-span-1">{index}</p>
                <p className="col-span-3 font-semibold">{data.plate}</p>
                <p className="col-span-2 bg-green-50 text-green-500 px-2 rounded-full w-fit text-sm font-semibold">
                    {data.type}
                </p>
                <p className="col-span-4">{data.province}</p>
                <p className="col-span-2">{data.vehicle}</p>
            </div>
        </div>

    )
} ``