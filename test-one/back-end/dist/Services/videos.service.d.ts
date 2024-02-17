interface videoProps {
    hash: string;
    videoPath: string;
    title: string;
    description: string;
}
export declare const createVideo: ({ hash, videoPath, title, description }: videoProps) => Promise<{
    id: number;
    videoPath: string;
    description: string;
    title: string;
    hash: string;
    createdAt: Date;
}>;
export declare const findVideoByHash: (hash: string) => import("@prisma/client").Prisma.Prisma__VideosClient<{
    id: number;
    videoPath: string;
    description: string;
    title: string;
    hash: string;
    createdAt: Date;
} | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
export declare const deleteVideo: (hash: string) => import("@prisma/client").Prisma.Prisma__VideosClient<{
    id: number;
    videoPath: string;
    description: string;
    title: string;
    hash: string;
    createdAt: Date;
}, never, import("@prisma/client/runtime/library").DefaultArgs>;
export {};
