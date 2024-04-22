import { PlateType, PlateVehicle } from "@prisma/client";
import Validator from "./base.validator";

export interface CreatePlateBody {
    plate: string;
    province: string;
    type: PlateType;
    vehicle: PlateVehicle;
}

export default class PlateValidator extends Validator {
    static validateCreate(data: CreatePlateBody) {
        this.checkEmpty(data.plate, "plate");
        this.checkEmpty(data.province, "province");
        this.checkPlateVehicle(data.vehicle);
        this.checkPlateType(data.type);
    }
}