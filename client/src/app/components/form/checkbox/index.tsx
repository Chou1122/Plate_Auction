import { CheckboxProps, Checkbox as Checkbox_, CustomFlowbiteTheme, Label } from "flowbite-react";

const theme: CustomFlowbiteTheme['checkbox'] = {
    root: {
        color: {
            default: "text-green-600 focus:ring-green-600",
        }
    }
}

interface IProps extends CheckboxProps {

}


export default function Checkbox({name, title, ...props}: IProps) {
    return (
        <div className="">
            <Checkbox_ theme={theme} {...props} name={name}/>
            <Label htmlFor={name} className="ml-2">{title}</Label>
        </div>
    )
}