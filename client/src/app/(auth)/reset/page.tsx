import Button from "@/app/components/form/button";
import Input from "@/app/components/form/input";
import Link from "@/app/components/form/link";
import FormTitle from "../components/title_form";

export default function reset() {
    return (
        <>
            <FormTitle title="Reset password" subtitle="Give us your email linking with account." />

            <Input placeholder="demo@gmail.com" title="Email" name="email" />
            <div className="my-5">
                <Button color={"primary"} title="Send reset password link" fullWidth />
            </div>

            <div className="flex gap-2 justify-center font-montserat text-sm">
                <p>I just have remembered my password.</p>
                <Link href="/login" title="Login now"></Link>
            </div>
        </>
    )
}