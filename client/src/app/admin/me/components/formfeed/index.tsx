import Input from "@/app/components/form/input"
import Select from "@/app/components/form/select"
import { IUserData } from "@/types/user"

interface IProps {
    user?: IUserData
}

const GenderDataset = [
    { name: "Male", value: "MALE" },
    { name: "Female", value: "FEMALE" },
    { name: "Other", value: "OTHER" }
]

export default function FormFeed({ user }: IProps) {
    return (
        <div className="mb-10">
            <h2 className="text-xl font-semibold font-montserat mb-3">Personal info</h2>
            <div className="grid grid-cols-3 gap-x-10">
                <Input
                    title="Full name"
                    name="fullname"
                    description="Your name may appear around GitHub"
                    value={user && user.fullname}
                    disabled={!user}
                />
                <Input
                    title="Email"
                    name="email"
                    description="You will need to login in"
                    value={user && user.email}
                    disabled={!user}
                />
                <Input
                    title="CID"
                    name="cid"
                    description="Your citizen identification"
                    value={user && user.cid}
                    disabled={!user}
                />
                <Input
                    title="Phone number"
                    name="phone"
                    description="Your phone number you are using"
                    value={user && user.phone}
                    disabled={!user}
                />
                <Input
                    title="Address"
                    name="address"
                    description="Your address"
                    value={user && user.address}
                    disabled={!user}
                />
                <Select
                    title="Gender"
                    name="gender"
                    description="Your gender"
                    value={user && user.gender}
                    disabled={!user}
                    dataset={GenderDataset}
                />
            </div>
        </div>
    )
}