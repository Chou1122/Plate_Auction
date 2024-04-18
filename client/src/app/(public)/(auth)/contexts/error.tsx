"use client"

import { createContext, useState, FormEvent, ReactNode, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { formToObject } from "@/utils";

export interface IError {
    message: string;
    name: string;
    data?: any;
}

interface IFormContext {
    error: IError;
    loading: boolean;
}

const defaultValue: IFormContext = {
    error: { message: "", name: "" },
    loading: false
}

interface IProps {
    children: ReactNode,
    onSuccess: (data: any) => void,
    sender: (data: any) => Promise<any>
}

const FormContext = createContext<IFormContext>(defaultValue);

export function useForm() {
    return useContext(FormContext);
}

export function FormProvider({ children, onSuccess, sender }: IProps) {
    const [error, setError] = useState<IError>({ message: "", name: "" });
    const [loading, setLoading] = useState<boolean>(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            setLoading(true);
            const data = formToObject(e.target as HTMLFormElement);
            const response = await sender(data);
            const code = response.status;

            switch (code) {
                case 200:
                    onSuccess(data);
                    break;
                case 400:
                    toast.error(response.data.message);
                    setError({
                        message: response.data.message,
                        name: response.data.name,
                        data: response.data.data
                    });
                    break;
                case 401:
                    toast.error("Unauthorized");
                    setError({ message: "", name: "" });
                    break;
                default:
                    setError({ message: "", name: "" });
                    break;
            }
        } catch (err) {
            toast.error("Something went wrong");
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <FormContext.Provider value={{ error, loading }}>
            <form
                onSubmit={handleSubmit}
                className="w-full mx-0 xs:mx-5 sm:mx-0 sm:w-[500px] md:w-[600px] border border-gray-200 p-10 rounded-3xl xs:rounded-xl h-fit bg-white shadow-xl">
                {children}
            </form>
        </FormContext.Provider>
    )
}