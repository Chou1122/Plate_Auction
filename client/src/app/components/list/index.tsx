"use client"

import Card from "../card";
import Input from "../form/input";
import { FiSearch } from "react-icons/fi";
import Select from "../form/select";
import { GrLocation } from "react-icons/gr";
import { BiCar } from "react-icons/bi";
import { IoLeafOutline } from "react-icons/io5";
import DatePicker from "../form/date";
import { CgCalendarDates } from "react-icons/cg";
import Pagination from "../form/pagination";
import { useState } from "react";

export default function List() {
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page: number) => setCurrentPage(page);

    return (
        <div className="container mx-auto">
            <div className="p-3 grid grid-cols-12 gap-3 my-10 cursor-default">
                <Input type="text" icon={FiSearch} placeholder="Plate number" className="col-span-6 sm:col-span-4 lg:col-span-2" />
                <Select icon={GrLocation} className="col-span-6 sm:col-span-4 lg:col-span-2" />
                <Select icon={BiCar} className="col-span-6 sm:col-span-4 lg:col-span-2" />
                <Select icon={IoLeafOutline} className="col-span-6 sm:col-span-4 lg:col-span-2" />
                <DatePicker icon={CgCalendarDates} className="col-span-6 sm:col-span-4 lg:col-span-2" />
                <DatePicker icon={CgCalendarDates} className="col-span-6 sm:col-span-4 lg:col-span-2" />
            </div>

            <div className="flex flex-row flex-wrap gap-2 md:gap-6 justify-center">
                {(new Array(20)).fill(0).map((item, index) =>
                    <Card key={index.toString()} />
                )}
            </div>

            <div className="my-5 py-5 w-full flex justify-center cursor-default">
                <Pagination
                    layout="pagination"
                    currentPage={currentPage}
                    totalPages={1000}
                    onPageChange={onPageChange}
                    showIcons
                />
            </div>
        </div>
    )
}