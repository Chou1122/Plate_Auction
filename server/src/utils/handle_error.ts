import { InputError, Response } from "@/types/controller";

export default async function handleError<T = void>(
    res: Response,
    func: () => Promise<T>,
    errorCode: number = 500) {
        
    try {
        await func();
    } catch (error) {
        console.log(error);
        if (error instanceof InputError) {
            res.status(400).json({
                message: error.message,
                name: error.field,
                data: error.value
            });
        } else if (errorCode === 500) {
            res.status(500).json({
                message: "Error on server"
            });
        } else {
            res.sendStatus(errorCode);
        }
    }
}