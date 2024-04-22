"use client"

import Input from "@/app/components/form/input";
import { Section, SectionBody, SectionHeader } from "@/app/components/section";
import Plate, { IPlateShower } from "./components/plate";
import { TbSearch, TbTrash } from "react-icons/tb";
import PlateAdd from "./components/plate_add";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios, { IResponse } from "@/configs/axios";

export default function PlatePage() {
    const [plates, setPlates] = useState<IPlateShower[]>([]);
    const [selected, setSelected] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    async function fetchUser(): Promise<IPlateShower[]> {
        try {
            setLoading(true);
            const response = await axios.get<IResponse<{ plates: IPlateShower[] }>>("/plate")

            if (response.status === 200) {
                return response.data.data.plates;
            } else throw new Error(response.data.message);
        } catch (e) {
            toast.error("Failed to fetch data");
            return [];
        } finally {
            setLoading(false);
        }
    }

    function handleAddData(data: IPlateShower) {
        const tmp: IPlateShower[] = [...plates, data];
        setPlates(tmp);
    }

    useEffect(() => {
        fetchUser().then(data => setPlates(data));
    }, [])

    return (
        <Section>
            <SectionHeader>
                Manage plates
            </SectionHeader>
            <SectionBody>
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3 rounded-lg justify-end w-full">
                        <Input type="text" placeholder="Search" icon={TbSearch} noPadding />
                        <PlateAdd onSuccess={handleAddData} />
                    </div>
                </div>

                <div className="border border-gray-300 rounded-2xl overflow-hidden">
                    <div className="w-full bg-gray-50 p-5 flex gap-2 items-center">
                        <p className="bg-gray-100 px-2 rounded-full text-gray-400 text-sm font-semibold">
                            Total <span>{plates.length}</span> plates
                        </p>
                        <button className="p-2 rounded-md hover:bg-gray-100">
                            <TbTrash />
                        </button>
                    </div>

                    {
                        !loading
                            ? plates.map((item, index) =>
                                <Plate
                                    data={item}
                                    index={index}
                                    key={index.toString()}
                                // onDelete={handleDeleteData}
                                />
                            )
                            : <>
                                dang tai...
                            </>
                    }
                </div>
            </SectionBody>
        </Section>
    )
}