import { Button as Button_ } from 'flowbite-react';
import type { ButtonProps, CustomFlowbiteTheme } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme['button'] = {
    color: {
        primary: 'bg-blue-900 hover:bg-blue-950 text-white font-lato font-semibold',
    },
};

interface IProps extends ButtonProps { }

export default function Button({ children }: IProps) {
    return (
        <Button_ theme={customTheme} color={"primary"}>
            {children}
        </Button_>
    )
}