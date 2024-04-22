import { CustomFlowbiteTheme, Table as Table_ } from "flowbite-react"

const theme: CustomFlowbiteTheme['table'] = {
    row: {
        hovered: "hover:bg-green-100"
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
        <div className="bg-white rounded-xl overflow-hidden shadow-2xl mb-16 overflow-x-scroll">
            <Table_ className="font-montserat min-w-[1000px]" striped hoverable theme={theme}>
                <Table_.Head>
                    <Table_.HeadCell className="h-24 text-center">STT</Table_.HeadCell>
                    <Table_.HeadCell className="h-24 text-center">Biển số</Table_.HeadCell>
                    <Table_.HeadCell className="h-24 text-center">Thời gian đấu giá</Table_.HeadCell>
                    <Table_.HeadCell className="h-24 text-center">Tỉnh thành phố</Table_.HeadCell>
                    <Table_.HeadCell className="h-24 text-center">Loại xe</Table_.HeadCell>
                    <Table_.HeadCell className="h-24 text-center">Loại biển</Table_.HeadCell>
                    <Table_.HeadCell className="h-24 text-center">Thời hạn</Table_.HeadCell>
                </Table_.Head>
                <Table_.Body>
                    {(new Array(20)).fill(0).map((item, index) =>
                        <Table_.Row onClick={handleClick} key={index.toString()}>
                            <Table_.Cell>1</Table_.Cell>
                            <Table_.Cell className="text-center">30A-123.45</Table_.Cell>
                            <Table_.Cell className="text-center">30/01/2020</Table_.Cell>
                            <Table_.Cell className="text-center">Hà Nội</Table_.Cell>
                            <Table_.Cell className="text-center">Xe con</Table_.Cell>
                            <Table_.Cell className="text-center">Ngũ quý</Table_.Cell>
                            <Table_.Cell className="text-center">30/01/2020</Table_.Cell>
                        </Table_.Row>
                    )}
                </Table_.Body>
            </Table_>
        </div>
    )
}