export enum NameType {
    USER_DEVICES
}

export function getKey(name: string, type: NameType): string {
    switch (type) {
        case NameType.USER_DEVICES:
            return name + '_devices'

        default:
            return name;
    }
}