import {useFormContext} from "react-hook-form";
import {useEffect} from "react";
import {FileImgValidator} from "./validators";
import FileFieldErrorState from "./Errors/FileFieldErrorState";

export default function FileField() {

    const {register, formState, getFieldState, watch} = useFormContext()
    const {error} = getFieldState('img', formState)
    const img = watch('img')







    return (
        <>
            <label htmlFor="file" className={"file-label" + ( (img && img.length ) ? ' dirty' : '')}>
                <input {...register('img', {
                        validate: {
                            isImg: img => !FileImgValidator(img) || 'Неподходящий формат файла'
                        }
                    })}
                       className="file-input"
                       type="file"
                       id="file" />

                <span className="material-symbols-outlined user-icon">
                    account_circle
                </span>
                <p>Ваше фото</p>
            </label>

            <div className="file-state">
                <FileFieldErrorState error={error} img={img} />
            </div>
        </>
    )
}