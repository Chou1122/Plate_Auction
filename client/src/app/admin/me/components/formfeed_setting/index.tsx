import Checkbox from "@/app/components/form/checkbox";
import { IUSerSetting } from "@/types/user"
import { ChangeEvent, useState } from "react";

interface IProps {
    setting?: IUSerSetting;
    onChange: (setting: IUSerSetting) => void;
}

export default function FormFeedSetting({ setting, onChange }: IProps) {
    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        // @ts-ignore
        const value = e.target.checked;
        const name = e.target.name;

        if (setting) {
            let tmp: IUSerSetting;
            switch (name) {
                case "attended":
                    tmp = { ...setting, displayAttendedPlate: value };
                    break;
                case "collected":
                    tmp = { ...setting, displayCollectedPlate: value };
                    break;
                default:
                    tmp = setting;
                    break;
            }

            onChange(tmp);
        }

    }
    return (
        <div>
            <h2 className="text-xl font-semibold font-montserat mb-3">Visible settings</h2>

            {setting
                ? <>
                    <Checkbox
                        title="Display plate number that you attended"
                        name="attended"
                        onChange={handleChange}
                        checked={setting.displayAttendedPlate}
                    />
                    <Checkbox
                        title="Display plate number that you collected successfully"
                        name="collected"
                        onChange={handleChange}
                        checked={setting.displayCollectedPlate} />
                </>
                : <>
                    <div className="flex gap-2 mb-3">
                        <div className="h-4 w-4 bg-gray-200 rounded-md animate-pulse"></div>
                        <div className="h-4 w-28 bg-gray-200 rounded-md animate-pulse"></div>
                    </div>

                    <div className="flex gap-2">
                        <div className="h-4 w-4 bg-gray-200 rounded-md animate-pulse"></div>
                        <div className="h-4 w-36 bg-gray-200 rounded-md animate-pulse"></div>
                    </div>
                </>}

        </div>
    )
}