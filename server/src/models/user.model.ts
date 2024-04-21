import { PrismaClient, Users } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();
type UserArgs = Omit<Users, "id" | "avatar" | "address" | "gender" | "role"> &
    Partial<Pick<Users, "avatar" | "address" | "gender" | "role">>


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