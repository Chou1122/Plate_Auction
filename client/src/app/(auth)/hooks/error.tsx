import { useState } from "react";

export interface IError {
    message: string;
    name: string;
    data?: any;
}

export default function useError() {
    const [error, setError] = useState<IError>({ message: "", name: "" });

    return {
        error,
        setError
    }
}