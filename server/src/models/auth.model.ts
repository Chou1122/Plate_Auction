import { IUser } from '@/types/controller';
import { PrismaClient } from '@prisma/client'
import { compare } from "bcrypt"

const prisma = new PrismaClient();

export class AuthModel {
    static async verifyLogin(emailOrPhone: string, password: string): Promise<IUser> {
        const record = await prisma.user.findFirst({
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
}