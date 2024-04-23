interface IProps {
    plate: string
}

export default function Plate({ plate }: IProps) {
    return (
        <div className="border-2 border-blue-900 flex flex-col justify-center items-center font-montserat text-9xl font-bold p-5 bg-white rounded-lg shadow-lg">
            <span>{plate.split("-")[0]}</span>
            <span>{plate.split("-")[1]}</span>
        </div>
    )
}