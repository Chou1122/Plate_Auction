import Button from "@/app/components/form/button";
import Input from "@/app/components/form/input";

export default function Pass() {
    return (
        <>
            <div className="mb-10">
                <h1 className="font-montserat font-extrabold text-left text-4xl text-blue-950">Change your password</h1>
                <p className="text-gray-400 font-montserat font-medium">Create new password.</p>
            </div>

            <Input placeholder="password" title="Password" name="password" type="password" />
            <Input placeholder="password" title="Password" name="re_password" type="password" />

            <div className="my-5">
                <Button color={"primary"} title="Change password" fullWidth />
            </div>
        </>
    )
}