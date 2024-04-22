"use client"

import Input from "@/app/components/form/input";
import { Section, SectionBody, SectionHeader } from "@/app/components/section";
import Plate from "./components/plate";
import Pagination from "@/app/components/form/pagination";
import { TbSearch, TbTrash } from "react-icons/tb";
import PlateAdd from "./components/plate_add";

export default function PlatePage() {
    return (
        <Section>
            <SectionHeader>
                Manage plates
            </SectionHeader>
            <SectionBody>
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3 rounded-lg justify-end w-full">
                        <Input type="text" placeholder="Search" icon={TbSearch} noPadding />
                        <PlateAdd />
                    </div>
                </div>

                <div className="border border-gray-300 rounded-2xl overflow-hidden">
                    <div className="w-full bg-gray-50 p-5 flex gap-2 items-center">
                        <p className="bg-gray-100 px-2 rounded-full text-gray-400 text-sm font-semibold">Total 13 plates</p>
                        <button className="p-2 rounded-md hover:bg-gray-100">
                            <TbTrash />
                        </button>
                    </div>

                    <Plate />
                    <Plate />
                    <Plate />
                </div>
                <div className="flex justify-end mt-5">
                    <Pagination
                        totalPages={10}
                        currentPage={9}
                        layout="pagination"
                        showIcons onPageChange={() => { }} />
                </div>
            </SectionBody>
        </Section>
    )
}