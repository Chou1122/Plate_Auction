import Button from "@/app/components/form/button";
import { TbPlus } from "react-icons/tb";
import Table from "../components/table";

export default function AccountPage() {
    return (
        <>
            <div className="flex justify-between mb-5">
                <h1 className="text-2xl font-montserat font-semibold text-gray-700">Manage accounts</h1>
                <Button title="Create" icon={TbPlus} />
            </div>
            <div className="shadow-xl">
                <Table />
            </div>
        </>
    )
}