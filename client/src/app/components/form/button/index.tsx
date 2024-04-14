import { Button as Button_ } from 'flowbite-react';
import type { ButtonProps, CustomFlowbiteTheme } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme['button'] = {
    base: "px-2 py-1 font-montserat transition-all hover:shadow-xl hover:-translate-y-1 disabled:hover:translate-y-0",
    color: {
        primary: 'bg-cgreen-600 text-white hover:bg-cgreen-500 shadow-green-300/35 disable:bg-cgreen-500/10',
        cyan: "bg-green-500 text-white hover:bg-green-400",
        gray: "bg-white text-green-500 hover:bg-gray-100"
    },
};

interface IProps extends ButtonProps {
    icon?: any;
}

export default function Button({ children, title, className, icon: Icon, ...rest }: IProps) {
    return (
        <Button_ theme={customTheme} {...rest} className={className + " "} >
            {Icon && <Icon size="1.5em" className="font-semibold mr-1" />}
            {children}
            <span className='text-center font-semibold w-full'>{title}</span>
        </Button_>
    )
}