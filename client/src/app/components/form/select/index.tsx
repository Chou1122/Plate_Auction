import { CustomFlowbiteTheme, SelectProps, Select as Select_ } from "flowbite-react";
import Label from "../label";

const theme: CustomFlowbiteTheme['select'] = {
    field: {
        select: {
            colors: {
                gray: "bg-gray-50 border-gray-300 text-blue-900 focus:border-green-600 focus:ring-green-600"
            }
        }
    }
}

interface IProps extends SelectProps {
    description: string
}

export default function Select({ className, name, title, description, ...props }: IProps) {
    return (
        <div className={"mb-3 " + className}>
            <div className="mb-2 block">
                <Label name={name} title={title} />
            </div>

            <Select_ theme={theme} {...props} id={name} name={name}>
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
            </Select_>

            <span className="font-montserat text-sm text-gray-400">{description}</span>
        </div>
    )
}