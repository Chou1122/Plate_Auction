import Button from "@/app/components/form/button";
import axios from "@/configs/axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { toast } from "react-toastify";

export interface ISessionData {
    device: string,
    ip: string,
    language: string,
    platform: string,
    timezone: string
}

interface IProps {
    currentSession?: boolean,
    data: ISessionData
}

export default function Session({ currentSession, data }: IProps) {
    const [loading, setLoading] = useState<boolean>();

    async function handleRevoke() {
        try {
            setLoading(true);
            const response = await axios.post("/session/revoke", { device: data.device });
            if (response.status === 200) {
                toast.success("Session revoked");
                window.location.reload();
            }
        } catch (error) {
            toast.error("Unable to revoke session");
        } finally {
            setLoading(false);
        }

    }

    return (
        <div className="rounded-lg border-gray-300 border bg-gray-50 p-5 flex items-start justify-between">
            <div className="flex items-center gap-4">
                <HiOutlineComputerDesktop size={36} color="gray" />

                <div>
                    <div className="flex font-semibold text-sm">
                        <p className="text-white bg-green-500 rounded-full px-2">{data.device}</p>
                        <span className="mx-2">·</span>
                        <p className="text-gray-400">{data.language}</p>
                    </div>
                    <div className="flex text-xs font-semibold mt-2">
                        <p>{data.platform}</p>
                        <span className="mx-2">·</span>
                        <p>{data.ip}</p>
                        <span className="mx-2">·</span>
                        <p>{data.timezone}</p>
                        {currentSession &&
                            <>
                                <span className="mx-2">·</span>
                                <p className="text-green-500 font-semibold">Your current session</p>
                            </>
                        }
                    </div>
                </div>
            </div>

            {!currentSession &&
                <Button title="Revoke" size="xs" color="failure" onClick={handleRevoke} disabled={loading} />
            }
        </div>
    )
}