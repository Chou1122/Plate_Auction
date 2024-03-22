import { CustomFlowbiteTheme, SelectProps, Select as Select_ } from "flowbite-react";

const theme: CustomFlowbiteTheme['select'] = {
    field: {
        select: {
            colors: {
                gray: "bg-gray-50 border-gray-300 text-blue-900 focus:border-green-600 focus:ring-green-600"
            }
        }
    }
}

interface IProps extends SelectProps { }

export default function Select(props: IProps) {
    return (
        <Select_ theme={theme} {...props}>
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
        </Select_>
    )
}