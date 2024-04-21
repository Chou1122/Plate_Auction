import { IUser } from '@/types/controller';
import { PrismaClient, Users } from '@prisma/client'
import { compare } from "bcrypt";
import { hash } from "bcrypt"

const prisma = new PrismaClient();

export default class AuthModel {
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
            select: {
                avatar: true, fullname: true,
                role: true, cid: true, email: true,
                phone: true, id: true, gender: true,
                address: true
            },
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
                id: record.id,
                address: record.address,
                gender: record.gender
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
}