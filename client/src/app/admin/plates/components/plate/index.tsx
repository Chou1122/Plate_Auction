"use client"

import Checkbox from "@/app/components/form/checkbox"

export default function Plate() {
    return (
        <div className="flex items-center odd:bg-gray-100 rounded-md hover:bg-cgreen-600 p-2 px-3">
            <Checkbox name="a" />

            <div className="grid grid-cols-12 w-full">
                <p className="col-span-1">1</p>
                <p className="col-span-3">29Z1 - 170422</p>
                <p className="col-span-2">Ngu quy</p>
                <p className="col-span-4">Ha Noi</p>
                <p className="col-span-2">Xe may</p>
            </div>
        </div>

    )
}