import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

interface videoProps {
    hash: string,
    videoPath: string,
    title: string,
    description: string
}

export const createVideo = async ({hash, videoPath, title, description}: videoProps) => {
    return prisma.videos.create({
        data: {
            hash,
            videoPath,
            title,
            description: description || ''
        }
    })
}

export const findVideoByHash = (hash: string) => {
    return prisma.videos.findFirst({
        where: {
            hash
        }
    })
}

export const deleteVideo = (hash: string) => {
    return prisma.videos.delete({
        where: {
            hash
        }
    })
}

