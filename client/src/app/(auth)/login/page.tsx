import Checkbox from "@components/form/checkbox";
import Input from "@components/form/input";
import Button from "@components/form/button";
import Link from "@components/form/link";
import FormTitle from "../components/title_form";

export default function LoginPage() {
    return (
        <>
            <FormTitle title="Login" subtitle="Let's start your challenge" />

            <Input placeholder="demo@gmail.com" title="Email" name="email" />
            <Input placeholder="password" title="Password" name="password" type="password" />
            <div className="flex justify-between w-full">
                <Checkbox name="remember" title="Remember me" />
                <Link href={"/reset"} title="Forget password" />
            </div>
            <div className="my-5">
                <Button color={"primary"} title="Login" fullWidth />
            </div>
            
            <div className="flex gap-2 justify-center font-montserat text-sm">
                <p>You haven't account yet</p>
                <Link href="/signup" title="Register now"></Link>
            </div>
        </>
    )
}