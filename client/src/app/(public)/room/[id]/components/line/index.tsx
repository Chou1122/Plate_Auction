interface IProps {
    user: {
        fullname: string,
        avatar: string,
        id: string
    },
    value: number,
    time: number
}

export default function Line({ user, value, time }: IProps) {
    function formatCurrency(value: number): string {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(value)
    }

    function formatSeconds(s: number) {
        let d = new Date(s * 1000);
        let f = d.toUTCString().match(/(\d\d:\d\d:\d\d)/);
        return f ? f[0] : "00:00:00";
    }

    return (
        <div className="font-montserat text-sm flex gap-2 items-center">
            <span className="font-semibold">{user.fullname}</span>
            <span className="bg-green-200 text-green-500 rounded-full px-2">{formatCurrency(value)}</span>
            <span className="bg-red-200 text-red-500 rounded-full px-2">{formatSeconds(time)}</span>
        </div>
    )
}