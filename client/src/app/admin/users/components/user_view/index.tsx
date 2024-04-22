"use client";

import { IError } from "@/app/(public)/(auth)/contexts/error";
import Button from "@/app/components/form/button";
import Input from "@/app/components/form/input";
import Select from "@/app/components/form/select";
import axios, { IResponse } from "@/configs/axios";
import { EUserRole } from "@/types/user";
import { Modal } from "flowbite-react";
import { ChangeEvent, useState } from "react";
import { TbPlus } from "react-icons/tb";
import { toast } from "react-toastify";
import { IUserShower } from "../user";

const UserRoleSets = [
    { name: "Admin", value: EUserRole.ADMIN },
    { name: "Auctioneer", value: EUserRole.AUCTIONEER },
    { name: "Provider", value: EUserRole.PROVIDER },
]

interface IProps {
    onSuccess: (data: IUserShower) => void;
}

export default function UserViewer({ onSuccess }: IProps) {
    const [show, setShow] = useState<boolean>(false);
    const [error, setError] = useState<IError>();
    const [loading, setLoading] = useState<boolean>(false);

    const [fullname, setFullname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [role, setRole] = useState<EUserRole>(EUserRole.ADMIN);

    async function handleCreate() {
        try {
            setLoading(true);
            const response = await axios.post<IResponse>("/user", {
                fullname, email, role
            });

            if (response.status === 200) {
                toast.success("Created");
                setPassword(response.data.data.password);
                setError({ message: "", name: "" });
                onSuccess(response.data.data);
                setShow(false);
            } else if (response.status === 400) {
                toast.error(response.data.message);
                setError({
                    message: response.data.message,
                    name: response.data.name,
                });
            } else throw new Error(response.data.message);
        } catch (e) {
            toast.error("Failed to create user");
        } finally {
            setLoading(false);
        }
    }

    function handleOpenModal() {
        setShow(true);
    }

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const name = e.target.name;

        switch (name) {
            case "fullname":
                setFullname(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "role":
                setRole(e.target.value as EUserRole);
                break;
        }
    }

    return (
        <div>
            <Button
                title="Add member"
                icon={TbPlus}
                size="sm"
                color="primary"
                className="h-fit"
                onClick={handleOpenModal}
            />

            <Modal show={show} onClose={() => setShow(false)}>
                <Modal.Header>Create new user</Modal.Header>
                <Modal.Body>
                    <div className="grid grid-cols-2 gap-3">
                        <Input
                            title="Fullname"
                            name="fullname"
                            value={fullname}
                            disabled={loading}
                            error={error}
                            onChange={handleChange}
                            className="col-span-1"
                        />
                        <Input
                            title="Email"
                            name="email"
                            value={email}
                            disabled={loading}
                            error={error}
                            onChange={handleChange}
                            className="col-span-1"
                        />
                        <Select
                            title="Role"
                            name="role"
                            dataset={UserRoleSets}
                            value={role}
                            onChange={handleChange}
                            className="col-span-1"
                        />

                        <Input
                            title="Password"
                            name="password"
                            defaultValue={password}
                            disabled={true}
                            error={error}
                            className="col-span-1"
                            color={password === "" ? "primary" : "success"}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer className="flex justify-end">
                    <Button color="primary" onClick={handleCreate}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}