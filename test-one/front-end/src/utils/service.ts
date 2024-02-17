
export const downloadVideo = async (videoHash)=> {
    const a = document.createElement('a')
    a.target = "_blank"
    a.href = `http://localhost:1337/download/video/${videoHash}`
    a.click()
}


