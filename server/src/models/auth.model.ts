import { IUser } from '@/types/controller';
import { PrismaClient, UserRole, Users } from '@prisma/client'
import { UserArgs } from '@prisma/client/runtime/library';
import { compare } from "bcrypt";
import { hash } from "bcrypt"

const prisma = new PrismaClient();

export class AuthModel {
    static async verifyLogin(emailOrPhone: string, password: string): Promise<IUser> {
        const record = await prisma.users.findFirst({
            select: { password: true, fullname: true, role: true, id: true },
            where: {
                OR: [
                    { email: emailOrPhone },
                    { phone: emailOrPhone }
                ]
            }
        });

        if (record && compare(password, record.password)) {
            return {
                fullname: record.fullname,
                role: record.role,
                id: record.id
            }
        } else {
            return null;
        }
    }

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
}