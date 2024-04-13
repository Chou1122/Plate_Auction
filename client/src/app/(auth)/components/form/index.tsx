import { FormEvent, ReactNode } from "react";
import { toast } from "react-toastify";
import { formToObject } from "@/utils";
import useInputError from "../../hooks/error";

interface IProps {
    children: ReactNode,
    onSuccess: (data: any) => void,
    sender: (data: any) => Promise<any>
}

export default function AuthForm({ children, onSuccess, sender }: IProps) {
    const { setError } = useInputError();

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const data = formToObject(e.target as HTMLFormElement);
            const response = await sender(data);
            const code = response.status;

            if (code === 200) {
                onSuccess(data);
            } else if (code === 400) {
                toast.error(response.data.message);

                setError({
                    message: response.data.message,
                    name: response.data.name
                })
            } else {
                setError({ message: "", name: "" });
            }
        } catch (err) {
            toast.error("Something went wrong");
            console.log(err);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full mx-0 xs:mx-5 sm:mx-0 sm:w-[500px] md:w-[600px] border border-gray-200 p-10 rounded-3xl xs:rounded-xl h-fit bg-white shadow-xl">
            {children}
        </form>
    )
}