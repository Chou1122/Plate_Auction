import { IUser } from '@/types/controller';
import { PrismaClient, Users } from '@prisma/client'
import { compare } from "bcrypt";
import { hash } from "bcrypt"

const prisma = new PrismaClient();

export class AuthModel {
    static async verifyLogin(query: string, password: string): Promise<IUser> {
        const record = await prisma.users.findFirst({
            select: { password: true, fullname: true, role: true, id: true, avatar: true },
            where: {
                OR: [
                    { email: query },
                    { phone: query }
                ]
            }
        });

        if (record && compare(password, record.password)) {
            return {
                fullname: record.fullname,
                role: record.role,
                id: record.id,
                avatar: record.avatar
            }
        } else {
            return null;
        }
    }

    static async verifyReset(query: string): Promise<IUser> {
        const record = await prisma.users.findFirst({
            select: { id: true, fullname: true },
            where: {
                OR: [
                    { email: query },
                    { phone: query }
                ]
            }
        });

        if (record) {
            return {
                fullname: record.fullname,
                id: record.id,
                role: "USER",
                avatar: "",
            }
        } else {
            return null;
        }
    }

    static async getUser(id: string): Promise<Omit<Users, "password">> {
        const record = await prisma.users.findFirst({
            select: { avatar: true, fullname: true, role: true, cid: true, email: true, phone: true, id: true },
            where: {
                id: id
            }
        })

        if (record) {
            return ({
                avatar: record.avatar,
                fullname: record.fullname,
                role: record.role,
                cid: record.cid,
                email: record.email,
                phone: record.phone,
                id: record.id
            })
        } else {
            return null;
        }
    }

    static async forceChangePassword(id: string, password: string) {
        await prisma.users.update({
            where: {
                id: id
            },
            data: {
                password: await hash(password, 12)
            }
        });
    }


    /**
     * =================
     * User Admin
     * =================
     */
    static async addUser(data: Omit<Users, "id">): Promise<any> {
        const record = await prisma.users.create({
            data: {
                cid: data.cid,
                email: data.email,
                fullname: data.fullname,
                password: await hash(data.password, 12),
                phone: data.phone,
                role: data.role
            },
            select: {
                id: true
            }
        });

        return record;
    }

    static async removeUser(id: string) {
        await prisma.users.delete({
            where: {
                id: id
            }
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
                fullname: data.fullname
            }
        })
    }

    static async generatePasswordUser(id: string, password: string) {
        const record = await prisma.users.update({
            where: {
                id: id
            },
            data: {
                password: await hash(password, 12)
            }
        });
    }
}