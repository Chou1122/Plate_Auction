import { CustomFlowbiteTheme, TextInput, TextInputProps } from "flowbite-react"
import Label from "../label"

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

interface IProps extends TextInputProps { }

export default function Input({ className, name, title, ...props }: IProps) {
    return (
        <div className={"mb-3 " + className}>
            <div className="mb-2 block">
                <Label name={name} title={title} />
            </div>
            <TextInput theme={theme} {...props} name={name} />
        </div>
    )
}