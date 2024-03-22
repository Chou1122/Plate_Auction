import { CustomFlowbiteTheme, TextInput, TextInputProps } from "flowbite-react"

const theme: CustomFlowbiteTheme['textInput'] = {
    field: {
        input: {
            colors: {
                gray: "bg-gray-50 border-gray-300 text-green-600 focus:border-green-600 focus:ring-green-600"
            }
        }
    }
}

interface IProps extends TextInputProps { }

export default function Input(prop: IProps) {
    return (
        <TextInput theme={theme} {...prop} />
    )
}