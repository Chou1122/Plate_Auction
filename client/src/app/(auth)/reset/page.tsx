import Button from "@/app/components/form/button";
import Input from "@/app/components/form/input";
import Link from "@/app/components/form/link";

export default function reset() {
    return (
        <>
            <div className="mb-10">
                <h1 className="font-montserat font-extrabold text-left text-4xl text-blue-950">Reset password</h1>
                <p className="text-gray-400 font-montserat font-medium">Give us your email linking with account.</p>
            </div>

            <Input placeholder="demo@gmail.com" title="Email" name="email" />
            <div className="my-5">
                <Button color={"primary"} title="Send reset password link" fullWidth />
            </div>
            <div className="flex gap-2 justify-center">
                <p>I just have remembered my password.</p>
                <Link href="/login" title="Login now"></Link>
            </div>
        </>
    )
}