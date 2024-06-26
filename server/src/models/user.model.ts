import { InputError } from "@/types/controller";
import { UpdateMeBody, UpdatePasswordMeBody } from "@/validators/auth.validator";
import { PrismaClient, UserRole, UserSettings, Users } from "@prisma/client";
import { compare, hash } from "bcrypt";

const prisma = new PrismaClient();
type UserArgs = Omit<Users, "id" | "avatar" | "address" | "gender" | "role" | "banned" | "ban_until"> &
    Partial<Pick<Users, "avatar" | "address" | "gender" | "role" | "banned" | "ban_until">>


export default class UserModel {
    static async addUser(data: UserArgs): Promise<any> {
        const record = await prisma.users.create({
            data: {
                cid: data.cid,
                email: data.email,
                fullname: data.fullname,
                password: await hash(data.password, 12),
                phone: data.phone,
                role: data.role,
                setting: {
                    create: {}
                }
            },
            select: {
                id: true,
                email: true,
                fullname: true,
                role: true,
            }
        });

        return record;
    }

    static async removeUser(id: string) {
        await prisma.userSettings.delete({
            where: { uid: id }
        })
        await prisma.users.delete({
            where: { id: id }
        })
    }

    static async updateUser(id: string, data: Pick<Users, "email" | "role" | "fullname">) {
        const record = await prisma.users.update({
            where: {
                id: id
            },
            data: {
                email: data.email,
                role: data.role,
                fullname: data.fullname,
            }
        })
    }

    static async updateMe(id: string, data: UpdateMeBody) {
        const record = await prisma.users.update({
            where: {
                id: id
            },
            data: {
                avatar: data.user.avatar,
                address: data.user.address,
                cid: data.user.cid,
                email: data.user.email,
                fullname: data.user.fullname,
                gender: data.user.gender,
                phone: data.user.phone,
                setting: {
                    update: {
                        displayAttendedPlate: data.setting.displayAttendedPlate,
                        displayCollectedPlate: data.setting.displayCollectedPlate
                    }
                }
            }
        });
    }

    static async updatePassword(id: string, data: UpdatePasswordMeBody) {
        const user = await prisma.users.findFirst({
            where: { id: id },
            select: { password: true },
        });

        if (await compare(data.old_password, user.password)) {
            const record = await prisma.users.update({
                where: { id: id },
                data: {
                    password: await hash(data.password, 12)
                }
            })
        } else throw new InputError("Invalid old password", "old_password", data.old_password);
    }

    static async setPasswordUser(id: string, password: string) {
        const record = await prisma.users.update({
            where: {
                id: id
            },
            data: {
                password: await hash(password, 12)
            }
        });
    }

    static async getUserSetting(id: string): Promise<UserSettings> {
        const record = await prisma.userSettings.findFirst({
            where: {
                uid: id
            },
            select: {
                displayAttendedPlate: true,
                displayCollectedPlate: true,
                id: true,
                uid: true
            }
        })
        return record
    }

    static async getUser(id: string): Promise<{
        user: Omit<Users, "password">,
        setting: UserSettings
    }> {
        const record = await prisma.users.findFirst({
            select: {
                avatar: true, fullname: true,
                role: true, cid: true, email: true,
                phone: true, id: true, gender: true,
                address: true, setting: true, banned: true,
                ban_until: true
            },
            where: {
                id: id
            }
        })

        if (record) {
            return ({
                user: {
                    avatar: record.avatar,
                    fullname: record.fullname,
                    role: record.role,
                    cid: record.cid,
                    email: record.email,
                    phone: record.phone,
                    id: record.id,
                    address: record.address,
                    gender: record.gender,
                    banned: record.banned,
                    ban_until: record.ban_until
                },
                setting: record.setting
            })
        } else {
            return {
                user: null,
                setting: null
            }
        }
    }

    static async getAuthorityUser() {
        const record = await prisma.users.findMany({
            where: {
                role: {
                    not: UserRole.USER
                }
            },
            select: {
                email: true, fullname: true, role: true,
                avatar: true, id: true, banned: true,
                ban_until: true
            }
        });

        return record;
    }

    static async setBannedUser(id: string, long: number) {
        const record = await prisma.users.update({
            where: {
                id: id
            },
            data: {
                banned: long !== 0,
                ban_until: new Date((new Date()).getTime() + long)
            },
            select: {
                banned: true,
                ban_until: true
            }
        })

        return record;
    }
}