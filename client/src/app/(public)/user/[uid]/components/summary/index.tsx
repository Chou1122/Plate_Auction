import { IUserData } from "@/types/user"
import { Avatar, Badge } from "flowbite-react"
import { GoLightBulb } from "react-icons/go"
import TinyBox from "../tiny_box"

interface IProps {
    user?: IUserData
}

export default function Summary({ user }: IProps) {
    return (
        <div className="bg-white shadow-lg rounded-3xl space-y-10 p-10 w-96 flex-none">
            <div className="flex flex-col items-center gap-3">
                {user
                    ? <>
                        <Avatar rounded size="xl" img={user.avatar} />
                        <h1 className="text-2xl font-semibold font-montserat text-gray-700">{user.fullname}</h1>
                        <Badge
                            size="xs"
                            icon={GoLightBulb}
                            color="warning"
                            className="w-fit px-3 lowercase">
                            {user.role}
                        </Badge>
                    </>
                    : <>
                        <Avatar rounded size="xl" className="animate-pulse" />
                        <h1 className="h-7 w-48 bg-gray-200 rounded-lg animate-pulse"></h1>
                        <Badge
                            size="xs"
                            icon={GoLightBulb}
                            color="warning"
                            className="w-24 px-3 lowercase animate-pulse">
                        </Badge>
                    </>}
            </div>

            <div className="space-y-3 w-full">
                {user
                    ? <>
                        <TinyBox title="Email" content={user.email} />
                        <TinyBox title="Gender" content={user.gender} />
                        <TinyBox title="ID" content={user.id} />
                    </>
                    : <>
                        <TinyBox loading />
                        <TinyBox loading />
                        <TinyBox loading />
                    </>}
            </div>
        </div>
    )
}