import Button from "@/app/components/form/button";
import Input from "@/app/components/form/input";
import axios, { IResponse } from "@/configs/axios";
import { useAuth } from "@/hooks/auth/auth";
import { Modal } from "flowbite-react";
import { useState } from "react";
import { TbPasswordUser } from "react-icons/tb";
import { toast } from "react-toastify";

interface IProps {
    id: string;
}

export default function UserPass({ id }: IProps) {
    const { user } = useAuth();
    const [show, setShow] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");

    async function handleChangePassword() {
        if (id === user.id) {
            toast.error("Can't change password yourself")
        } else {
            try {
                setLoading(true);
                setShow(true);
                const response = await axios.put<IResponse<any>>("/user/" + id + "/rspass");

                if (response.status === 200) {
                    toast.success("Updated successfully");
                    setPassword(response.data.data.password);
                } else throw new Error(response.data.message);
            } catch (error) {
                toast.error("Failed to update");
            } finally {
                setLoading(false);
            }
        }
    }

    function handleCopy() {
        navigator.clipboard.writeText(password);
        toast.success("Password copied to clipboard");
    }

    return (
        <>
            <Modal show={show} onClose={() => setShow(false)} size="md">
                <Modal.Header>Your new password</Modal.Header>
                <Modal.Body>
                    <div className="flex gap-3 justify-center">
                        {loading
                            ? <>Loading...</>
                            : <>
                                <Input
                                    name="password"
                                    defaultValue={password}
                                    disabled={true}
                                    className="col-span-1"
                                    color={password === "" ? "primary" : "success"}
                                />
                                <Button
                                    title="Copy"
                                    color="primary"
                                    className="h-fit"
                                    onClick={handleCopy}
                                />
                            </>}
                    </div>
                </Modal.Body>
            </Modal>
            <button
                className="p-2 hover:bg-green-100 hover:text-green-600 rounded-lg text-gray-600"
                onClick={handleChangePassword}>
                <TbPasswordUser size={24} />
            </button>
        </>
    )
}