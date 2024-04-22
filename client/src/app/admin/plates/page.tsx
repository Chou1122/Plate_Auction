"use client"

import Button from "@/app/components/form/button";
import Input from "@/app/components/form/input";
import { Section, SectionBody, SectionHeader } from "@/app/components/section";
import { TbPlus, TbSearch } from "react-icons/tb";
import Plate from "./components/plate";
import Pagination from "@/app/components/form/pagination";

export default function PlatePage() {
    return (
        <Section>
            <SectionHeader>
                Manage plates
            </SectionHeader>
            <SectionBody>
                <div className="flex items-center justify-between mb-5">
                    <p>Total 13 plates</p>

                    <div className="flex items-center gap-3 rounded-lg">
                        <Input type="text" placeholder="Search" icon={TbSearch} noPadding />
                        <Button title="Add member" icon={TbPlus} size="sm" color="primary" className="h-fit" />
                    </div>
                </div>

                <div className="p-5 bg-gray-50 rounded-lg">
                    <Plate />
                    <Plate />
                    <Plate />
                    <Plate />

                    <div className="flex justify-end mt-5">
                        <Pagination totalPages={10} currentPage={9} layout="pagination" showIcons onPageChange={() => { }} />
                    </div>
                </div>
            </SectionBody>
        </Section>
    )
}