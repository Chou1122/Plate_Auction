import { CustomFlowbiteTheme, PaginationProps, Pagination as Pagination_ } from "flowbite-react";

const theme: CustomFlowbiteTheme['pagination'] = {
    pages: {
        selector: {
            base: "w-12 py-2 hover:underline leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700",
            active: "rounded-full bg-green-200 text-green-600 font-semibold hover:bg-green-100 hover:text-green-700",
        },
        next: {
            base: "rounded-lg bg-white py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-cgreen-600  transition-all enabled:hover:text-white border enabled:border-green-600 enabled:hover:ring-1 enabled:hover:ring-green-600 ml-2"
        },
        previous: {
            base: "rounded-lg bg-white py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-cgreen-600  transition-all enabled:hover:text-white border enabled:border-green-600 enabled:hover:ring-1 enabled:hover:ring-green-600 mr-2"
        }
    }
}

interface IProps extends PaginationProps {

}

export default function Pagination(props: IProps) {
    return (
        <Pagination_ theme={theme} {...props} />
    )
}