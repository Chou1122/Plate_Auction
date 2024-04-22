"use client"

import Button from "@/app/components/form/button";
import Input from "@/app/components/form/input";
import { Section, SectionBody, SectionHeader } from "@/app/components/section";
import { TbPlus, TbSearch } from "react-icons/tb";
import User, { IUserShower } from "./components/user";
import UserViewer from "./components/user_view";
import { useEffect, useState } from "react";
import axios, { IResponse } from "@/configs/axios";
import { toast } from "react-toastify";

export default function AccountPage() {
    const [users, setUsers] = useState<IUserShower[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    async function fetchUser(): Promise<IUserShower[]> {
        try {
            setLoading(true);
            const response = await axios.get<IResponse<{ users: IUserShower[] }>>("/user")

            if (response.status === 200) {
                return response.data.data.users;
            } else throw new Error(response.data.message);
        } catch (e) {
            toast.error("Failed to fetch data");
            return [];
        } finally {
            setLoading(false);
        }
    }

    function handleUpdateData(data: IUserShower) {
        const tmp: IUserShower[] = [...users, {
            email: data.email,
            fullname: data.fullname,
            id: data.id,
            role: data.role,
            avatar: ""
        }];

        setUsers(tmp);
    }

    useEffect(() => {
        fetchUser().then(data => setUsers(data));
    }, [])


    return (
        <Section>
            <SectionHeader>
                Manage accounts
            </SectionHeader>
            <SectionBody>

                <div className="flex items-center justify-between mb-5">
                    <p>Total 13 members</p>

                    <div className="flex items-center gap-3 rounded-lg">
                        <Input type="text" placeholder="Search" icon={TbSearch} noPadding />
                        <UserViewer onSuccess={handleUpdateData} />
                    </div>
                </div>

                <div className="p-5 bg-gray-50 rounded-lg">
                    {
                        !loading
                            ? users.map((item, index) =>
                                <User data={item} key={index.toString()} />
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