import Checkbox from "@components/form/checkbox";
import Input from "@components/form/input";
import Button from "@components/form/button";
import Link from "@components/form/link";

export default function LoginPage() {
    return (
        <>
            <div className="mb-10">
                <h1 className="font-montserat font-extrabold text-left text-4xl text-blue-950">Login</h1>
                <p className="text-gray-400 font-montserat font-medium">Let's start your challenge</p>
            </div>

            <Input placeholder="demo@gmail.com" title="Email" name="email" />
            <Input placeholder="password" title="Password" name="password" type="password" />
            <div className="flex justify-between w-full">
                <Checkbox name="remember" title="Remember me" />
                <Link href={"/reset"} title="Forget password" />
            </div>
            <div className="my-5">
                <Button color={"primary"} title="Login" fullWidth />
            </div>
            <div className="flex gap-2 justify-center">
                <p>You haven't account yet</p>
                <Link href="/signup" title="Register now"></Link>
            </div>
        </>
    )
}