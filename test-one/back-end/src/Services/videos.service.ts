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
            thumbnailPath: '',
            title: title,
            description: description || ''
        }
    })
}

export const findVideoById = (hash: string) => {
    return prisma.videos.findMany({
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

export const updateVideoThumbnail = ({hash, thumbnailPath}: { hash: string, thumbnailPath: string }) => {
    return prisma.videos.update({
        data: {
            thumbnailPath
        },
        where: {
            hash
        }
    })
}

export const deleteVideoThumbnail = (hash: string) => {
    return prisma.videos.update({
        data: {
            thumbnailPath: ""
        },
        where: {
            hash
        }
    })
}
