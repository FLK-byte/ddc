interface thumbnailProps {
    hash: string;
    thumbnailPath: string;
}
export declare const createThumbnail: ({ hash, thumbnailPath }: thumbnailProps) => Promise<{
    id: number;
    thumbnailPath: string;
    hash: string;
    createdAt: Date;
}>;
export declare const findThumbnailByHash: (hash: string) => import("@prisma/client").Prisma.Prisma__ThumbnailClient<{
    id: number;
    thumbnailPath: string;
    hash: string;
    createdAt: Date;
} | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
export declare const deleteThumbnail: (hash: string) => import("@prisma/client").Prisma.Prisma__ThumbnailClient<{
    id: number;
    thumbnailPath: string;
    hash: string;
    createdAt: Date;
}, never, import("@prisma/client/runtime/library").DefaultArgs>;
export {};
