import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function allLider() {
    return prisma.lider.findMany()
}

export async function createLider(name, age, job) {
    return prisma.lider.create({
        data: {
            name: name,
            age: age,
            job: job
        }
    })
}

export function updateLider(id, name, age, job) {
    return prisma.lider.update({
        where: {
            id
        },
        data: {
            name,
            age,
            job
        }
    })
}

export function deleteLider(id) {
    return prisma.lider.delete()
}