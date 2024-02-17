'use client'
import {IoIosAddCircle} from "react-icons/io";
import {CardVideo} from "@/components/cardVideo";
import {useQuery, useQueryClient} from '@tanstack/react-query'
import {UpdateVideoAndThumbModal} from "@/components/modal/modalUpload";
import {useState} from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react'
export const VideoHome = () => {
    const [openModal, setOpenModal] = useState(false)
    const queryClient = useQueryClient()
    const [animationParent] = useAutoAnimate()

    const {data}: { data: string[] } = useQuery({
        queryKey: ['videosData'],
        queryFn: () => fetch('http://localhost:1337/thumbs').then((res) => res.json())
    })
    const toggleModal = () => {
        setOpenModal(!openModal)
        if (openModal) queryClient.invalidateQueries({queryKey: ['videosData']})
    }
    return (
        <div className={"h-screen bg-zinc-900 text-zinc-50 p-4 "} >
            <div className={"absolute bottom-10 right-10"}>
                <IoIosAddCircle size={90} onClick={toggleModal} className={"cursor-pointer"}/>
            </div>
            <span className={"text-6xl"}>Videos:</span>
            <div className={"min-h-[45%] max-h-90% bg-zinc-700 text-zinc-50 p-4 m-4 flex flex-wrap overflow-y-auto"} ref={animationParent} >
                {data && data.map((el, idx) => {
                    const [hash, extension] = el.split(".")
                    return <CardVideo videoHash={hash} key={idx}/>
                }) || "Loading..."}
            </div>
            <UpdateVideoAndThumbModal openModal={openModal} closeModal={toggleModal}/>
        </div>
    )
}
