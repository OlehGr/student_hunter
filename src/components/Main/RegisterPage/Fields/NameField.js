import {useFormContext} from "react-hook-form";
import NamingFieldErrorState from "./Errors/NamingFieldErrorState";

export default function NameField({name, placeholder}) {

    const {register, formState, getFieldState} = useFormContext()

    const {error, isDirty, isTouched} = getFieldState(name, formState)


    const isUsed = isTouched && isDirty

    return (
        <>

            <>
                <NamingFieldErrorState isUsed={isUsed} isValid={!error} />
            </>
            <div className="form-field__input">
                <p className='error'>{(isDirty && error) && error.message}</p>
                <input {...register(name, {
                    required: 'Это поле обязательно',
                    pattern: {
                        value: /^[А-Я][а-я]+$/,
                        message: 'Неправильный формат'
                    }
                })}
                       type="text"
                       placeholder={placeholder}
                       className="input-text"/>
            </div>
        </>
    )
}