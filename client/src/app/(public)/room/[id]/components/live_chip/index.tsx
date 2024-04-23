interface IProps {
    content?: string
    time?: number
}

export default function LiveChip({ content, time }: IProps) {
    function formatSeconds(s: number) {
        let d = new Date(s * 1000);
        let f = d.toUTCString().match(/(\d\d:\d\d:\d\d)/);
        return f ? f[0] : "00:00:00";
    }

    return (
        <div className="flex items-center bg-red-50 rounded-full p-1 px-3 font-semibold font-montserat text-red-500 text-sm">
            <div className="h-1 w-1 rounded-full bg-red-500 animate-ping"></div>
            <span className="ml-3">{time ? formatSeconds(time) : content}</span>
        </div>
    )
}