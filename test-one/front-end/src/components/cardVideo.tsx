'use client'
import {IoMdDownload} from "react-icons/io";
import {MdDeleteForever} from "react-icons/md";
import Image from 'next/image'
import {downloadVideo} from "@/utils/service";
import {useQueryClient, useMutation} from "@tanstack/react-query"
import {toast} from "react-toastify";

export const CardVideo = ({videoHash}: string) => {
    const queryClient = useQueryClient()

    const deleteVideoAndThumbMutation = useMutation({
        mutationFn: () => fetch(`http://localhost:1337/delete/${videoHash}`, {method: "delete"}).then(res => res.json()),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["videosData"]})
            toast("Video e thumb deletados ", {type: "success"})
        },
        onError: () => toast("A sua requisição não foi processada", {type: "error"})
    })

    return (
        <div className={"relative bg-red-900 w-[200px] h-[200px] rounded flex justify-center items-center m-4"}>
            <Image
                src={`http://localhost:1337/thumb/${videoHash}`}
                width={200}
                height={200}
                alt={"Thumb photo"}
            />
            <div className={"absolute bottom-0 bg-red-700 w-full h-1/5 flex justify-around items-center"}>
                <IoMdDownload onClick={() => downloadVideo(videoHash)} className={"cursor-pointer"}/>
                <MdDeleteForever onClick={() => deleteVideoAndThumbMutation.mutate(videoHash)} className={"cursor-pointer"}/>
            </div>
        </div>
    )
}
