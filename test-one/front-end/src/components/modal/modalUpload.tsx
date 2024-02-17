import {generateRandomNumber} from "@/utils";
import {IoMdClose} from "react-icons/io";
import {UpdateVideo} from "@/components/modal/videoUpload";
import {UpdateThumb} from "@/components/modal/thumbnailUpload";

interface UpdateVideoAndThumbModalInterface {
    openModal: boolean,
    closeModal: () => void
}

export const UpdateVideoAndThumbModal = ({openModal, closeModal}: UpdateVideoAndThumbModalInterface) => {
    const randomUniqueId = generateRandomNumber()


    return (openModal &&
        <div className={"w-99% h-full absolute bg-transparent flex justify-center items-center top-0"}>
            <div className={"w-1/3 h-90% bg-neutral-700 rounded flex flex-col"}>
                <div className={"text-2xl p-4 flex items-center justify-between"}>
                    <span>
                        Suba uma thumbnail e video
                    </span>
                    <IoMdClose className={"cursor-pointer"} onClick={closeModal}/>
                </div>
                <div className={"flex flex-col h-full justify-around p-4"}>
                    <UpdateVideo randomUniqueId={randomUniqueId}/>
                    <UpdateThumb randomUniqueId={randomUniqueId}/>
                </div>
            </div>
        </div>
    )
}
