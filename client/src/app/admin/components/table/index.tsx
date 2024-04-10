import { CustomFlowbiteTheme, Table as Table_ } from "flowbite-react"

const theme: CustomFlowbiteTheme['table'] = {
    row: {
        hovered: "hover:bg-green-100"
    },
    head: {
        base: "group/head text-xs uppercase text-white",
        cell: {
            base: "bg-cgreen-500 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg h-16"
        }
    }
}

interface IProps {
    onClick?: () => void;
}

export default function Table({ onClick }: IProps) {
    function handleClick() {
        onClick && onClick();
    }

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-xl mb-16 overflow-x-scroll">
            <Table_ className="font-montserat w-full" striped hoverable theme={theme}>
                <Table_.Head>
                    <Table_.HeadCell>STT</Table_.HeadCell>
                    <Table_.HeadCell className="text-center">Name</Table_.HeadCell>
                    <Table_.HeadCell className="text-center">Email</Table_.HeadCell>
                    <Table_.HeadCell className="text-center">Password</Table_.HeadCell>
                    <Table_.HeadCell className="text-center">Role</Table_.HeadCell>
                </Table_.Head>
                <Table_.Body>
                    {(new Array(20)).fill(0).map((item, index) =>
                        <Table_.Row onClick={handleClick} key={index.toString()}>
                            <Table_.Cell>{index}</Table_.Cell>
                            <Table_.Cell className="text-center">Do Tuan Nghia</Table_.Cell>
                            <Table_.Cell className="text-center">nghia123@gmail.com</Table_.Cell>
                            <Table_.Cell className="text-center">***</Table_.Cell>
                            <Table_.Cell className="text-center">Admin</Table_.Cell>
                        </Table_.Row>
                    )}
                </Table_.Body>
            </Table_>
        </div>
    )
}