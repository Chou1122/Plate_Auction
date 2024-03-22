import Card from "../card";
import Input from "../form/input";
import { FiSearch } from "react-icons/fi";
import Select from "../form/select";
import { GrLocation } from "react-icons/gr";
import { BiCar } from "react-icons/bi";
import { IoLeafOutline } from "react-icons/io5";
import DatePicker from "../form/date";
import { CgCalendarDates } from "react-icons/cg";

export default function List() {
    return (
        <div className="container mx-auto">
            <div className="p-3 flex flex-wrap gap-3 my-10 cursor-default">
                <Input type="text" icon={FiSearch} placeholder="Plate number" required />
                <Select icon={GrLocation} required/>
                <Select icon={BiCar} required/>
                <Select icon={IoLeafOutline} required/>
                <DatePicker icon={CgCalendarDates}/>
                <DatePicker icon={CgCalendarDates}/>
            </div>

            <div className="flex flex-row flex-wrap gap-6 justify-center">
                {(new Array(20)).fill(0).map((item, index) =>
                    <Card key={index.toString()} />
                )}
            </div>
        </div>
    )
}