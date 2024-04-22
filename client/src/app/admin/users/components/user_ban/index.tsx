import Button from "@/app/components/form/button";
import axios, { IResponse } from "@/configs/axios";
import { useAuth } from "@/hooks/auth/auth";
import { Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { TbUserCheck, TbUserExclamation, TbUserMinus } from "react-icons/tb";
import { toast } from "react-toastify";

export interface IBanData {
    banned: boolean;
    ban_until: Date;
}

interface IProps {
    id: string;
    banned: boolean;
    onSuccess: (data: IBanData) => void;
}

export default function UserBan({ id, onSuccess, banned }: IProps) {
    const { user } = useAuth();
    const [show, setShow] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    async function handleBanUser() {
        if (id === user.id) {
            toast.error("Can't ban yourself")
        } else {
            try {
                setLoading(true);
                const response = await axios.put<IResponse<{ ban: IBanData }>>("/user/" + id + "/ban");

                if (response.status === 200) {
                    toast.success("Banned successfully");
                    onSuccess(response.data.data.ban);
                    setShow(false);
                } else throw new Error(response.data.message);
            } catch (error) {
                toast.error("Failed to ban");
            } finally {
                setLoading(false);
            }
        }
    }

    async function handleUnbanUser() {
        if (id === user.id) {
            toast.error("Can't ban yourself")
        } else {
            try {
                setLoading(true);
                const response = await axios.put<IResponse<{ ban: IBanData }>>("/user/" + id + "/unban");

                if (response.status === 200) {
                    toast.success("Banned successfully");
                    onSuccess(response.data.data.ban);
                    setShow(false);
                } else throw new Error(response.data.message);
            } catch (error) {
                toast.error("Failed to ban");
            } finally {
                setLoading(false);
            }
        }
    }

    async function handleBanPopup() {
        setShow(true);
    }

    return (
        <>
            <Modal show={show} onClose={() => setShow(false)} size="md">
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to ban this user?
                        </h3>
                        <div className="flex justify-center gap-4">
                            {banned
                                ? <Button
                                    color="primary"
                                    onClick={handleUnbanUser}
                                    className="h-fit"
                                    disabled={loading}
                                    title="Yes, I'm sure" />
                                : <Button
                                    color="failure"
                                    onClick={handleBanUser}
                                    className="h-fit"
                                    disabled={loading}
                                    title="Yes, I'm sure" />}
                            <Button
                                color="gray"
                                onClick={() => setShow(false)}
                                className="h-fit"
                                title="No, cancel" />

                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {
                banned
                    ? <button
                        className="p-2 hover:bg-green-100 hover:text-green-600 rounded-lg text-gray-600"
                        onClick={handleBanPopup}>
                        <TbUserCheck size={24} />
                    </button>
                    : <button
                        className="p-2 hover:bg-yellow-100 hover:text-yellow-600 rounded-lg text-gray-600"
                        onClick={handleBanPopup}>
                        <TbUserExclamation size={24} />
                    </button>
            }
        </>
    )
}