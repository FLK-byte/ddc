export const generateRandomNumber = () => {
    return Math.random().toString(36).substring(2).concat(Math.random().toString(36).substring(2))
}

export interface verifyFileTypeInterface {
    desiredType: string,
    file: File
}

export const verifyFileType = ({file, desiredType}: verifyFileTypeInterface) => {
    const [type, ext] = file.type.split("/")
    return type !== desiredType
}
