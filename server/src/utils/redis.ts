export enum NameType {
    USER_DEVICES,
    USER_OTP
}

export function genKey(name: string, type: NameType): string {
    switch (type) {
        case NameType.USER_DEVICES:
            return name + '_devices'
        case NameType.USER_OTP:
            return name + '_otp'
        default:
            return name;
    }
}