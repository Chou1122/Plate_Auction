import Report from "./components/report";

export default function ReportPage() {
    return (
        <div className="bg-white rounded-lg shadow-lg p-5">
            <h1 className="font-montserat text-2xl font-semibold text-gray-700">Review reports</h1>
            <hr className="my-2" />

            <div className="bg-gray-50 rounded-lg p-5 space-y-3">
                <Report />
            </div>

            <span className="text-sm text-gray-400 mt-3 block">Total <span className="font-semibold">4</span> blocked users</span>
        </div>
    )
}