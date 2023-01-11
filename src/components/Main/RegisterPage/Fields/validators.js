
export const FileImgValidator = files => {
    if (files) {
        const formats = ['jpeg', 'jpg', 'png']

        if (files.length === 0) return true
        const fileName = files[0].name.toLowerCase()
        return formats.some(format => fileName.includes('.'+format)) || 'Загрузите изображение'
    }
    return true
}




