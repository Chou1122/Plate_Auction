import { IError } from "@/app/(public)/(auth)/contexts/error";
import Button from "@/app/components/form/button";
import Input from "@/app/components/form/input";
import Select from "@/app/components/form/select";
import axios from "@/configs/axios";
import { EPlateType, EPlateVehicle } from "@/types/plate";
import { Modal } from "flowbite-react";
import { ChangeEvent, useState } from "react";
import { TbPlus } from "react-icons/tb";
import { toast } from "react-toastify";
import { IPlateShower } from "../plate";

export const PlateTypeDataset = [
    { name: "Ngũ quý", value: EPlateType.NGUQUY },
    { name: "Tứ quý", value: EPlateType.TUQUY },
    { name: "Tam hoa", value: EPlateType.TAMHOA },
    { name: "Lộc phát", value: EPlateType.LOCPHAT },
    { name: "Ông địa", value: EPlateType.ONGDIA },
    { name: "Sảnh tiến", value: EPlateType.SANHTIEN },
    { name: "Phong thủy", value: EPlateType.PHONGTHUY },
]

export const ProvinceDataset = [
    { name: "Hà Nội", value: "Hà Nội" },
    { name: "Hải Phòng", value: "Hải Phòng" },
    { name: "Nghệ An", value: "Nghệ An" },
    { name: "Hồ Chí Minh", value: "Hồ Chí Minh" },
    { name: "Hà Giang", value: "Hà Giang" },
    { name: "Thái Bình", value: "Thái Bình" },
    { name: "Nam Định", value: "Nam Định" },
];

export const PlateVehicleDataset = [
    { name: "Car", value: EPlateVehicle.CAR },
    { name: "Long car", value: EPlateVehicle.LONG_CAR }]

interface IProps {
    onSuccess: (data: IPlateShower) => void;
}

export default function PlateAdd({ onSuccess }: IProps) {
    const [show, setShow] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<IError>();

    const [plate, setPlate] = useState<string>("");
    const [type, setType] = useState<EPlateType>(EPlateType.PHONGTHUY);
    const [province, setProvince] = useState<string>(ProvinceDataset[0].value);
    const [vehicle, setVehicle] = useState<EPlateVehicle>(EPlateVehicle.CAR);

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const name = e.target.name;

        switch (name) {
            case "plate":
                setPlate(e.target.value);
                break;
            case "type":
                setType(e.target.value as EPlateType);
                break;
            case "province":
                setProvince(e.target.value);
                break;
            case "vehicle":
                setVehicle(e.target.value as EPlateVehicle);
                break;
        }
    }

    async function handleCreate() {
        try {
            const response = await axios.post("/plate", {
                plate, type, province, vehicle
            });

            if (response.status === 200) {
                toast.success("Created");
                setError({ message: "", name: "" });
                onSuccess(response.data.data.plate);
                setShow(false);
            } else if (response.status === 400) {
                toast.error(response.data.message);
                setError({
                    message: response.data.message,
                    name: response.data.name,
                });
            } else throw new Error(response.data.message);

        } catch (e) {
            toast.error("Failed to create plate");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Modal show={show} onClose={() => setShow(false)} >
                <Modal.Header>Create new plate</Modal.Header>
                <Modal.Body>
                    <div className="grid grid-cols-2 gap-3">
                        <Input
                            title="Plate number"
                            name="plate"
                            value={plate}
                            disabled={loading}
                            error={error}
                            onChange={handleChange}
                            className="col-span-1"
                        />
                        <Select
                            title="Type"
                            name="type"
                            dataset={PlateTypeDataset}
                            value={type}
                            onChange={handleChange}
                            className="col-span-1"
                        />

                        <Select
                            title="Province"
                            name="province"
                            dataset={ProvinceDataset}
                            value={province}
                            onChange={handleChange}
                            className="col-span-1"
                        />

                        <Select
                            title="Vehicle"
                            name="vehicle"
                            dataset={PlateVehicleDataset}
                            onChange={handleChange}
                            className="col-span-1"
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer className="flex justify-end">
                    <Button color="primary" onClick={handleCreate}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>

            <Button
                title="Add member"
                icon={TbPlus}
                size="sm"
                color="primary"
                className="h-fit"
                onClick={() => setShow(true)}
            />
        </>
    )
}