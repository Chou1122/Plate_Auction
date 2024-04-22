import Button from "@/app/components/form/button";
import axios from "@/configs/axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function RevokeAllBtn() {
    const [loading, setLoading] = useState<boolean>();

    async function handleRevoke() {
        try {
            setLoading(true);
            const response = await axios.post("/session/revokeAll");
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
        <Button
            title="Revoke All"
            size="xs"
            color="failure"
            onClick={handleRevoke}
            disabled={loading} />
    )
}