import { CustomFlowbiteTheme, TextInput, TextInputProps } from "flowbite-react"
import Label from "../label"
import { ReactNode } from "react"

const theme: CustomFlowbiteTheme['textInput'] = {
    field: {
        input: {
            base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50 transition-all",
            colors: {
                gray: "bg-gray-50 border-gray-300 text-green-600 focus:border-green-600 focus:ring-green-600 hover:border-green-600"
            }
        }
    }
}

interface IProps extends TextInputProps {
    error?: {
        message: string,
        name: string
    },
    description?: string,
    addBtn?: ReactNode,
    noPadding?: boolean
}

export default function Input({ className, name, title, error, description, addBtn, noPadding, ...props }: IProps) {

    return (
        <div className={(noPadding ? " " : "mb-3 ") + className}>
            {title || addBtn &&
                <div className="mb-2 flex justify-between">
                    <Label name={name} title={title} />
                    {addBtn}
                </div>
            }
            <TextInput
                color={error && error.name === name ? "failure" : "gray"}
                theme={theme}
                helperText={error && error.name === name && error.message}
                name={name}
                {...props}
            />
            {description &&
                <span className="font-montserat text-sm text-gray-400">{description}</span>
            }
        </div>
    )
}