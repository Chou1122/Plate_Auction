import { TbUserSquareRounded, TbUsersGroup } from "react-icons/tb";
import Item from "./components/item";

export default function Sidebar() {
    return (
        <div className="flex w-60 flex-col p-5 bg-white rounded-lg h-fit shadow-lg text-sm gap-1">
            <Item icon={TbUserSquareRounded} title="My account" selected/>
            <Item icon={TbUsersGroup} title="Manage user" />
        </div>
    )
}