import Button from "@/app/components/form/button";
import { TbLockOpen, TbUserHexagon, TbX } from "react-icons/tb";
import BlockedUser from "./components/blocked_user";
import Input from "@/app/components/form/input";

export default function BlockPage() {
    return (
        <div className="bg-white rounded-lg shadow-lg p-5">
            <h1 className="font-montserat text-2xl font-semibold text-gray-700">Block a user</h1>
            <hr className="my-2" />

            <p className="font-semibold">Blocking a user prevents the following on: </p>
            <div>
                <div className="flex items-center text-sm"><TbX color="red" className="mr-3" /> Attending auction in 30 days</div>
                <div className="flex items-center text-sm"><TbX color="red" className="mr-3" /> Attending auction in 30 days</div>
            </div>



            <h1 className="text-xl font-montserat font-semibold my-2">Blocked user</h1>
            <Input title="Search by email" name="email" icon={TbUserHexagon} className="w-fit mb-5"/>

            <div className="bg-gray-50 rounded-lg p-5 space-y-3">
                <BlockedUser />
                <BlockedUser />
                <BlockedUser />
                <BlockedUser />
            </div>

            <span className="text-sm text-gray-400 mt-3 block">Total <span className="font-semibold">4</span> blocked users</span>

        </div>
    )
}