import { useEffect, useState } from "react";

export interface IError {
    message: string;
    name: string;
    data?: any;
}

export default function useInputError() {
    const [error, setError] = useState<IError>({ message: "", name: "" });

    useEffect(() => {
        console.log(error);
    }, [error])

    return {
        error,
        setError
    }
}