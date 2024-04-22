import Button from "@/app/components/form/button";
import axios, { IResponse } from "@/configs/axios";
import { useAuth } from "@/hooks/auth/auth";
import { Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { TbUserMinus } from "react-icons/tb";
import { toast } from "react-toastify";

interface IProps {
    id: string;
    onSuccess: () => void;
}

export default function UserDel({ id, onSuccess }: IProps) {
    const { user } = useAuth();
    const [show, setShow] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    async function handleDeleteUser() {
        if (id === user.id) {
            toast.error("Can't delete yourself")
        } else {
            try {
                setLoading(true);
                const response = await axios.delete<IResponse<any>>("/user/" + id);

                if (response.status === 200) {
                    toast.success("Deleted successfully");
                    onSuccess();
                    setShow(false);
                } else throw new Error(response.data.message);
            } catch (error) {
                toast.error("Failed to delete");
            } finally {
                setLoading(false);
            }
        }
    }

    async function handleDeletePopup() {
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
                            Are you sure you want to delete this user?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button
                                color="failure"
                                onClick={handleDeleteUser}
                                className="h-fit"
                                disabled={loading}
                                title="Yes, I'm sure" />
                            <Button
                                color="gray"
                                onClick={() => setShow(false)}
                                className="h-fit"
                                title="No, cancel" />

                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <button
                className="p-2 hover:bg-red-100 hover:text-red-600 rounded-lg text-gray-600"
                onClick={handleDeletePopup}>
                <TbUserMinus size={24} />
            </button>
        </>
    )
}