import { Plates, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default class PlateModel {
    static getPlates() {
        return prisma.plates.findMany({
            select: {
                id: true,
                plate: true,
                province: true,
                type: true,
                vehicle: true,
                uid: true,
            }
        })
    }

    static getMyPlates(uid: string) {
        return prisma.plates.findMany({
            select: {
                id: true,
                plate: true,
                province: true,
                type: true,
                vehicle: true,
                uid: true,
            },
            where: { uid }
        })
    }

    static createPlate(data: Omit<Plates, "id">) {
        return prisma.plates.create({
            data: {
                plate: data.plate,
                province: data.province,
                type: data.type,
                vehicle: data.vehicle,
                uid: data.uid,
            },
            select: {
                id: true,
                plate: true,
                province: true,
                type: true,
                vehicle: true,
                uid: true,
            }
        })
    }

    static deletePlate(id: string, uid: string) {
        return prisma.plates.delete({
            where: {
                id: id,
                uid: uid
            }
        })
    }

    static forceDeletePlate(id: string) {
        return prisma.plates.delete({
            where: {
                id: id
            }
        })
    }
}