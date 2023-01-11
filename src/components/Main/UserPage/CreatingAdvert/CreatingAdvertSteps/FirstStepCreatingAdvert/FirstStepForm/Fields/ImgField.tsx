import { useFormContext } from "react-hook-form";
import { FileImgValidator } from "../../../../../../RegisterPage/Fields/validators";

export default function ImgField() {

    const {formState, register, getFieldState} = useFormContext()

    const {error} = getFieldState('img', formState)
    
    return (
        <>
            <label htmlFor="file" className={"file-label file-label--advert"}>
                <input {...register('img', {
                    required: 'Это поле обязательно',
                    validate: {
                        isImg: fileList => FileImgValidator(fileList)
                    }
                })}
                       className="first-step-form__img-field"
                       type="file"
                       id="file" />

                <span className="material-symbols-outlined image-icon">
                    image
                </span>
                <p>Ваше фото</p>
                <span className="error">{error && error.message}</span>
            </label>
        </>
    );
};