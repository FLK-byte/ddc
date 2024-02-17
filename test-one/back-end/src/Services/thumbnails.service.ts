import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

interface thumbnailProps {
    hash: string,
    thumbnailPath: string
}

export const createThumbnail = async ({hash, thumbnailPath}: thumbnailProps) => {
    return prisma.thumbnail.create({
        data: {
            hash,
            thumbnailPath
        }
    })
}

export const findThumbnailByHash = (hash: string) => {
    return prisma.thumbnail.findFirst({
        where: {
            hash
        }
    })
}

export const deleteThumbnail = (hash: string) => {
    return prisma.thumbnail.delete({
        where: {
            hash
        }
    })
}
