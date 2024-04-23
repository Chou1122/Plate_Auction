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

    static deletePlate(ids: string[], uid: string) {
        return prisma.plates.deleteMany({
            where: {
                id: {
                    in: ids
                },
                uid: uid
            }
        })
    }

    static forceDeletePlate(ids: string[]) {
        return prisma.plates.deleteMany({
            where: {
                id: {
                    in: ids
                }
            }
        })
    }

    static createLive(pids: string[]) {
        return prisma.room.createMany({
            data: pids.map(p => ({
                pid: p
            }))
        })
    }
}