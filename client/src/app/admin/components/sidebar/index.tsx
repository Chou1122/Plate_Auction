"use server"

import {
    TbKey, TbKeyframes, TbLeaf, TbLivePhoto,
    TbLockCancel,
    TbMessageReport, TbUserSquareRounded, TbUsersGroup
} from "react-icons/tb";
import Item from "./components/item";

export default async function Sidebar() {
    return (
        <div className="flex w-72 flex-col p-5 bg-white rounded-lg h-fit shadow-lg text-sm gap-1">
            <Item href="/admin/me" icon={TbUserSquareRounded} title="My profile" />
            <Item href="/admin/session" icon={TbKeyframes} title="Session" />
            <Item href="/admin/password" icon={TbKey} title="Password" />

            <hr className="mt-5" />
            <h5 className="text-gray-400 text-sm font-semibold ml-6 my-2">Management</h5>

            <Item href="/admin/users" icon={TbUsersGroup} title="Manage users" />
            <Item href="/admin/plates" icon={TbLeaf} title="Plate numbers" />
            <Item href="/admin/room" icon={TbLivePhoto} title="Auction room" />

            <hr className="mt-5" />
            <h5 className="text-gray-400 text-sm font-semibold ml-6 my-2">Report</h5>

            <Item href="/admin/reports" icon={TbMessageReport} title="Reports" />
            <Item href="/admin/block" icon={TbLockCancel} title="Block user" />
        </div>
    )
}