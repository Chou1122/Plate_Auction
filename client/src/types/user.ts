export interface IUserData {
    avatar: string;
    id: string;
    fullname: string;
    role: EUserRole;
    cid: string;
    email: string;
    phone: string;
    address: string;
    gender: EUserGender
}

export interface IUSerSetting {
    id: string;
    uid: string;
    displayAttendedPlate: boolean,
    displayCollectedPlate: boolean
}

export enum EUserGender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER",
}

export enum EUserRole {
    ADMIN = "ADMIN",
    USER = "USER",
    PROVIDER = "PROVIDER",
    AUCTIONEER = "AUCTIONEER",
}