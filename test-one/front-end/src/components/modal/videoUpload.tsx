import {useRef, useState} from "react";
import {toast} from "react-toastify";
import {verifyFileType} from "@/utils/utilsFuncs";

interface UpdateVideoAndThumbModalInterface {
    randomUniqueId: string
}

export const UpdateVideo = ({randomUniqueId}: UpdateVideoAndThumbModalInterface) => {
    const [file, setFile] = useState<string>();
    const uploadRef = useRef();
    const statusRef = useRef();
    const loadTotalRef = useRef();
    const progressRef = useRef();

    const UploadFile = () => {
        const file = uploadRef.current.files[0];
        setFile(URL.createObjectURL(file));

        if(verifyFileType({file, desiredType: 'video'})) {
            toast("Arquivo invalido", {type: "error"})
            setFile("")
            return
        }

        const formData = new FormData();
        formData.append("video", file);

        const xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", ProgressHandler, false);
        xhr.addEventListener("load", SuccessHandler, false);
        xhr.addEventListener("error", ErrorHandler, false);
        xhr.addEventListener("abort", AbortHandler, false);
        xhr.open("POST", `http://localhost:1337/upload/video?hashIdentifier=${randomUniqueId}`);
        xhr.send(formData as any);
    };

    const ProgressHandler = (e) => {
        loadTotalRef.current.innerHTML = `uploaded ${e.loaded} bytes of ${e.total}`;
        const percent = (e.loaded / e.total) * 100;
        progressRef.current.value = Math.round(percent);
        statusRef.current.innerHTML = Math.round(percent) + "% uploaded...";
    };

    const SuccessHandler = (e) => {
        toast("Video enviado com sucesso", {type: "success"})
        progressRef.current.value = 0;
    };
    const ErrorHandler = (e) => toast("upload failed!!", {type: "error"})

    const AbortHandler = () => toast("upload aborted!!", {type: "error"})

    return <>
        <div className={"flex flex-col"}>
            <span>Escolha um video para enviar</span>
            <input type="file" name="file" ref={uploadRef} accept="video/*" onChange={UploadFile} />
            <label>
                File progress: <progress ref={progressRef} value="0" max="100"/>
            </label>
            <p ref={statusRef}></p>
            <p ref={loadTotalRef}></p>
            <video src={file} alt="" style={{width: "200px", height: "200px"}}/>
        </div>
    </>


}
