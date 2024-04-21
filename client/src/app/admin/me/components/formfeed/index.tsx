import { IError } from "@/app/(public)/(auth)/contexts/error"
import Input from "@/app/components/form/input"
import Select from "@/app/components/form/select"
import { EUserGender, IUserData } from "@/types/user"
import { ChangeEvent, useState } from "react"

interface IProps {
    user?: IUserData
    onChange: (user: IUserData) => void;
    error?: IError;
}

const GenderDataset = [
    { name: "Male", value: EUserGender.MALE },
    { name: "Female", value: EUserGender.FEMALE },
    { name: "Other", value: EUserGender.OTHER }
]

export default function FormFeedUser({ user, onChange, error }: IProps) {
    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const value = e.target.value;
        const name = e.target.name;

        if (user) {
            let tmp: IUserData;
            switch (name) {
                case "fullname":
                    tmp = { ...user, fullname: value };
                    break;
                case "email":
                    tmp = { ...user, email: value };
                    break;
                case "cid":
                    tmp = { ...user, cid: value };
                    break;
                case "phone":
                    tmp = { ...user, phone: value };
                    break;
                case "address":
                    tmp = { ...user, address: value };
                    break;
                case "gender":
                    tmp = { ...user, gender: value as EUserGender };
                    break;
                default:
                    tmp = user;
                    break;
            }

            onChange(tmp);
        }
    }

    return (
        <div className="mb-10">
            <h2 className="text-xl font-semibold font-montserat mb-3">Personal info</h2>
            <div className="grid grid-cols-3 gap-x-10">
                <Input
                    title="Full name"
                    name="fullname"
                    description="Your name may appear around GitHub"
                    value={user && user.fullname}
                    onChange={handleChange}
                    disabled={!user}
                    error={error}
                />
                <Input
                    title="Email"
                    name="email"
                    description="You will need to login in"
                    value={user && user.email}
                    onChange={handleChange}
                    disabled={!user}
                    error={error}
                />
                <Input
                    title="CID"
                    name="cid"
                    description="Your citizen identification"
                    value={user && user.cid}
                    onChange={handleChange}
                    disabled={!user}
                    maxLength={12}
                    error={error}
                />
                <Input
                    title="Phone number"
                    name="phone"
                    description="Your phone number you are using"
                    value={user && user.phone}
                    onChange={handleChange}
                    disabled={!user}
                    maxLength={10}
                    error={error}
                />
                <Input
                    title="Address"
                    name="address"
                    description="Your address"
                    value={user && user.address}
                    onChange={handleChange}
                    disabled={!user}
                    error={error}
                />
                <Select
                    title="Gender"
                    name="gender"
                    description="Your gender"
                    value={user && user.gender}
                    onChange={handleChange}
                    disabled={!user}
                    dataset={GenderDataset}
                />
            </div>
        </div>
    )
}