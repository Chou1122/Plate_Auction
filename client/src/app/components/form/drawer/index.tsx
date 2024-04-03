"use client"

import { useEffect, useState } from "react";
import { HiOutlineX } from "react-icons/hi"
import Chip from "../chip";
import Link from "next/link";
import Button from "../button";
import { MdAccessTimeFilled, MdNumbers, MdTimelapse } from "react-icons/md";
import ListItem from "./components/list_item";
import { FaCarSide, FaLocationArrow } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";

interface IProps {
    name: string,
    trigger?: number
}

export default function Drawer({ name, trigger }: IProps) {
    const [open, setOpen] = useState(false);

    function handleClose() {
        setOpen(false);
    }

    useEffect(() => {
        if (trigger != 0) setOpen(true);
    }, [trigger])

    return (
        <div
            id={name}
            className={"fixed top-0 z-40 h-screen p-4 overflow-y-auto transition-all translate-x-full bg-white w-96 " + (open ? "right-96 shadow-2xl" : "right-0 shadow-sm")}>

            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold font-montserat">Plate info</h1>
                <button
                    className="p-3 rounded-xl bg-gray-100 hover:bg-gray-300"
                    onClick={handleClose}>
                    <HiOutlineX />
                </button>
            </div>

            <div className="mt-10 flex flex-col gap-5">
                <div className="flex flex-wrap gap-2">
                    <Chip />
                    <Chip />
                    <Chip />
                </div>

                <div className="flex gap-2 font-semibold text-blue-500 text-sm">
                    <Link href={""} className="hover:underline truncate max-w-20 flex-none">#hanoinoioi</Link>
                    <Link href={""} className="hover:underline truncate max-w-20 flex-none">#ngu</Link>
                    <Link href={""} className="hover:underline truncate max-w-20 shrink">#tamhoa</Link>
                </div>

                <div className="w-full bg-gray-50 rounded-2xl p-5">
                    <ListItem icon={MdNumbers} title="Biển số" content="30A-123.45" />
                    <ListItem icon={FaCarSide} title="Loại xe" content="Xe con " />
                    <ListItem icon={FaLocationArrow} title="Tỉnh" content="Hà Nội" />
                    <ListItem icon={BsFillCalendarDateFill} title="Ngày tạo" content="30/01/2020" />
                </div>

                <div className="w-full bg-gray-50 rounded-2xl p-5">
                    <ListItem icon={MdAccessTimeFilled} title="Mở đăng ký" content="30/01/2020" />
                    <ListItem icon={MdTimelapse} title="Đóng đăng ký" content="30/01/2020" />
                    <ListItem icon={MdAccessTimeFilled} title="Mở đấu giá" content="30/01/2020" />
                    <ListItem icon={MdTimelapse} title="Đóng đấu giá" content="30/01/2020 " />
                </div>
            </div>
            <div className="mt-10">
                <Button title="Join auction" color="primary" fullSized />
            </div>
        </div>
    )
}