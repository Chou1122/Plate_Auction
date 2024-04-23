import { Avatar } from "flowbite-react";
import Link from "next/link";

interface IProps {
    user: {
        avatar: string
        id: string
        fullname: string
    }
    value: number;
}
export default function CurrentValue({ user, value }: IProps) {
    function showCurrency(value: number): string {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(value)
    }

    return (
        <div className="space-y-5">
            <div className="p-3 bg-green-50 border-2 border-green-500 rounded-xl animate-pulse">
                <p className="text-2xl font-semibold text-green-500 w-full text-center">Current: <span className="font-bold">{showCurrency(value)}</span></p>
            </div>

            <div className="flex items-center gap-2 font-montserat">
                <div className="flex gap-3 items-center rounded-full bg-yellow-100 p-1 pr-3 w-fit text-yellow-500 text-sm">
                    <Avatar rounded size="xs" img={user.avatar} />
                    <Link href={"/user/" + user.id} className="font-semibold hover:underline">{user.fullname}</Link>
                </div>
                <span>gave this price</span>
            </div>
        </div>
    )
}