"use client"

import Button from "@/app/components/form/button";
import Checkbox from "@/app/components/form/checkbox";
import Input from "@/app/components/form/input";
import Select from "@/app/components/form/select";
import { Avatar, Badge, Dropdown } from "flowbite-react";
import Link from "next/link";
import { GoLightBulb } from "react-icons/go";
import { TbEdit } from "react-icons/tb";

export default function MePage() {
    return (
        <div className="bg-white rounded-lg shadow-lg p-10">
            <h1 className="text-2xl font-montserat font-semibold text-gray-700">Manage accounts</h1>
            <hr className="my-2" />

            <div className="flex mt-5 gap-5 items-center">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={<Avatar size="lg" rounded className="w-fit" />}>
                    <Dropdown.Item>Change image</Dropdown.Item>
                </Dropdown>

                <div className="flex flex-col items-start">
                    <Link
                        href="/"
                        className="font-montserat font-semibold hover:text-green-500 hover:underline">Đỗ Tuấn Nghĩa</Link>
                    <p className="text-sm text-gray-400 mb-2 -mt-1">nghiacangao@gmail.com</p>
                    <Badge size="xs" icon={GoLightBulb} color="warning" className="w-fit px-3">Admin</Badge>
                </div>
            </div>



            <form className="mt-5">
                <div className="mb-10">
                    <h2 className="text-xl font-semibold font-montserat mb-3">Personal info</h2>
                    <div className="grid grid-cols-3 gap-x-10">
                        <Input title="Full name" name="fullname" description="Your name may appear around GitHub" />
                        <Input title="Email" name="email" description="You will need to login in" />
                        <Input title="CID" name="cid" description="Your citizen identification" />
                        <Input title="Phone number" name="phone" description="Your phone number you are using" />
                        <Input title="Location" name="location" description="Your address" />
                        <Select title="Gender" name="gender" description="Your gender" />
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold font-montserat mb-3">Visible settings</h2>

                    <Checkbox title="Display plate number that you attended" name="attend" />
                    <Checkbox title="Display plate number that you collected successful" name="success" />
                </div>



                <div className="flex flex-row justify-end">
                    <Button title="Save" icon={TbEdit} color="primary" />
                </div>
            </form>
        </div>
    )
}