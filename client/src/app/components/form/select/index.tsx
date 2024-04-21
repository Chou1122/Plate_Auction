import { CustomFlowbiteTheme, SelectProps, Select as Select_ } from "flowbite-react";
import Label from "../label";
import { ReactNode } from "react";

const theme: CustomFlowbiteTheme['select'] = {
    field: {
        select: {
            base: "font-semibold",
            colors: {
                gray: "bg-gray-50 border-gray-300 focus:border-green-600 focus:ring-green-600 text-green-600"
            }
        }
    }
}

interface IProps extends SelectProps {
    description?: string
    noPadding?: boolean,
    addBtn?: ReactNode,
    dataset: {
        name: string,
        value: string
    }[]
}

export default function Select({ className, name, title, description, noPadding, addBtn, dataset, ...props }: IProps) {
    return (
        <div className={(noPadding ? " " : "mb-3 ") + className}>
            {(title || addBtn) &&
                <div className="mb-2 flex justify-between">
                    <Label name={name} title={title} />
                    {addBtn}
                </div>
            }

            <Select_ theme={theme} {...props} id={name} name={name}>
                {dataset.map((item, index) => (
                    <option key={index} value={item.value}>{item.name}</option>
                ))}
            </Select_>

            {
                description &&
                <span className="font-montserat text-sm text-gray-400">{description}</span>
            }
        </div>
    )
}