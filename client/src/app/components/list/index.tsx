"use client"

import Card from "../card";
import Input from "../form/input";
import { FiSearch } from "react-icons/fi";
import Select from "../form/select";
import { GrLocation } from "react-icons/gr";
import { BiCar } from "react-icons/bi";
import { IoApps, IoLeafOutline } from "react-icons/io5";
import DatePicker from "../form/date";
import { CgCalendarDates } from "react-icons/cg";
import Pagination from "../form/pagination";
import { useState } from "react";
import Drawer from "../form/drawer";
import Table from "../form/table";
import { CiBoxList, CiViewTable } from "react-icons/ci";
import { FaTableList } from "react-icons/fa6";
import { LuTableProperties } from "react-icons/lu";

export default function List() {
    const [currentPage, setCurrentPage] = useState(1);
    const [trigger, setTrigger] = useState(0);
    const onPageChange = (page: number) => setCurrentPage(page);

    function handleItemClick() {
        setTrigger(() => trigger + 1);
    }

    return (
        <>
            <Drawer name="drawer" trigger={trigger} />

            <div className="container mx-auto">
                {/* <div className="p-3 grid grid-cols-12 gap-3 mt-10 mb-0 cursor-default">
                    <Input type="text" icon={FiSearch} placeholder="Plate number" className="col-span-6 sm:col-span-4 lg:col-span-2" />
                    <Select icon={GrLocation} className="col-span-6 sm:col-span-4 lg:col-span-2" />
                    <Select icon={BiCar} className="col-span-6 sm:col-span-4 lg:col-span-2" />
                    <Select icon={IoLeafOutline} className="col-span-6 sm:col-span-4 lg:col-span-2" />
                    <DatePicker icon={CgCalendarDates} className="col-span-6 sm:col-span-4 lg:col-span-2" />
                    <DatePicker icon={CgCalendarDates} className="col-span-6 sm:col-span-4 lg:col-span-2" />
                </div> */}

                {/* <div className="my-5 w-fit p-1 flex rounded-lg gap-2">
                    <button className="p-2 bg-white rounded-lg hover:bg-green-500 hover:text-white shadow-lg transition-all">
                        <IoApps size="24px" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-green-500 hover:text-white transition-all">
                        <LuTableProperties size="24px" />
                    </button>
                </div>

                <Table onClick={handleItemClick} /> */}

                <div className="flex flex-row flex-wrap gap-2 md:gap-6 justify-center">
                    {(new Array(20)).fill(0).map((item, index) =>
                        <Card key={index.toString()} onClick={handleItemClick} />
                    )}
                </div>
            </div>
        </>

    )
}