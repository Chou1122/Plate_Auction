"use client"

import { Sidebar, SidebarBreak, SidebarItem } from "@/app/components/sidebar";
import {
    TbKey, TbKeyframes, TbLeaf, TbLivePhoto,
    TbLockCancel,
    TbMessageReport, TbUserSquareRounded, TbUsersGroup
} from "react-icons/tb";

export default async function SidebarAdmin() {
    return (
        <Sidebar >
            <SidebarItem href="/admin/me" icon={TbUserSquareRounded} title="My profile" />
            <SidebarItem href="/admin/session" icon={TbKeyframes} title="Session" />
            <SidebarItem href="/admin/password" icon={TbKey} title="Password" />

            <SidebarBreak title="Management" />

            <SidebarItem href="/admin/users" icon={TbUsersGroup} title="Manage users" />
            <SidebarItem href="/admin/plates" icon={TbLeaf} title="Plate numbers" />
            <SidebarItem href="/admin/room" icon={TbLivePhoto} title="Auction room" />

            <SidebarBreak title="Report" />

            <SidebarItem href="/admin/reports" icon={TbMessageReport} title="Reports" />
            <SidebarItem href="/admin/block" icon={TbLockCancel} title="Block user" />
        </Sidebar>
    )
}