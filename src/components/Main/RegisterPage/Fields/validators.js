

export const FileImgValidator = files => {
    if (files) {
        const formats = ['jpeg', 'jpg', 'png']

        if (files.length === 0) return undefined
        const fileName = files[0].name.toLowerCase()
        return !formats.some(format => fileName.includes('.'+format))
    }
    return undefined
}




