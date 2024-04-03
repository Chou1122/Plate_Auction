import Button from "@/app/components/form/button";
import Input from "@/app/components/form/input";
import FormTitle from "../components/title_form";

export default function Pass() {
    return (
        <>
            <FormTitle title="Change your password" subtitle="Create new password." />

            <Input placeholder="password" title="Password" name="password" type="password" />
            <Input placeholder="password" title="Re-type password" name="re_password" type="password" />

            <div className="mt-10 mb-5">
                <Button color={"primary"} title="Change password" fullSized />
            </div>
        </>
    )
}