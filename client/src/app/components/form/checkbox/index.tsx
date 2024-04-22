import { CheckboxProps, Checkbox as Checkbox_, CustomFlowbiteTheme } from "flowbite-react";
import Label from "../label";

const theme: CustomFlowbiteTheme['checkbox'] = {
    root: {
        color: {
            default: "text-green-600 focus:ring-green-600",
        }
    }
}

interface IProps extends CheckboxProps {

}


export default function Checkbox({ name, title, children, ...props }: IProps) {
    return (
        <div className="">
            <Checkbox_ theme={theme} {...props} name={name} id={name} />
            {
                children
                    ? children
                    : <Label name={name} title={title} />
            }
        </div>
    )
}