import { Button as Button_ } from 'flowbite-react';
import type { ButtonProps, CustomFlowbiteTheme } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme['button'] = {
    base: "px-2 py-1 rounded-full hover:-translate-y-1 transition-all hover:shadow-xl font-montserat",
    color: {
        primary: 'bg-cgreen-600 text-white hover:bg-cgreen-500 shadow-green-300/35',
        dark: "bg-blue-950 text-white hover:bg-blue-800 shadow-blue-300/35"
    },
};

interface IProps extends ButtonProps {
    fullWidth?: boolean
}

export default function Button({ children, title, fullWidth: full_width, ...rest }: IProps) {
    return (
        <Button_ theme={customTheme} pill {...rest} className={(full_width ? "w-full" : "")} >
            {children}
            <span className='text-center font-semibold w-full'>{title}</span>
        </Button_>
    )
}