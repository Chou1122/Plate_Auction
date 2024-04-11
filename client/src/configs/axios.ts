import { default as _axios } from "axios";

export interface IResponse<T = any> {
    message: string;
    name: string;
    data: T;
}

const axios = _axios.create({
    baseURL: "http://localhost:8000/v1",
    withCredentials: true,
    validateStatus: (statusCode: number) => {
        return (statusCode === 200 || statusCode === 400 || statusCode === 401)
    }
})

export default axios;