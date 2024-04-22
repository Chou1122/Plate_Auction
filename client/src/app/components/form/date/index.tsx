import { CustomFlowbiteTheme, Datepicker, DatepickerProps } from "flowbite-react";
import Label from "../label";

const theme: CustomFlowbiteTheme['datepicker'] = {
    views: {
        days: {
            items: {
                item: {
                    selected: "bg-green-700 text-white hover:bg-green-600"
                }
            }
        },
        months: {
            items: {
                item: {
                    selected: "bg-green-700 text-white hover:bg-green-600"
                }
            }
        },
        years: {
            items: {
                item: {
                    selected: "bg-green-700 text-white hover:bg-green-600"
                }
            }
        },
        decades: {
            items: {
                item: {
                    selected: "bg-green-700 text-white hover:bg-green-600"
                }
            }
        }
    },
    popup: {
        footer: {
            button: {
                base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-2 focus:ring-green-950",
                today: "bg-green-700 text-white hover:bg-green-800"
            }
        }
    },
    root: {
        input: {
            field: {
                input: {
                    colors: {
                        gray: "bg-gray-50 border-gray-300 text-green-600 focus:border-green-600 focus:ring-green-600"
                    }
                }
            }
        }
    }
}

interface IProps extends DatepickerProps { }

export default function DatePicker({ name, className, title, ...props }: IProps) {
    return (
        <div className={"mb-3 " + className}>
            <div className="mb-2 block">
                <Label name={name} title={title} />
            </div>
            <Datepicker theme={theme} {...props} name={name} id={name} />
        </div>
    )
}