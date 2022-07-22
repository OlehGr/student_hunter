import NamingFieldErrorState from "./Errors/NamingFieldErrorState";
import {useFormContext} from "react-hook-form";

export default function PasswordField() {
    const {register, getFieldState, formState} = useFormContext()
    const {error, isDirty, isTouched} = getFieldState('password', formState)
    const isUsed = isTouched && isDirty


    return (
        <>
            <NamingFieldErrorState isValid={!error} isUsed={isUsed} />

            <div className="form-field__input">
                <p className='error'>{(error && isTouched) && error.message }</p>
                <input {...register('password', {
                    required: 'Это поле обязательно',
                    minLength: {
                        value: 8,
                        message: 'Пароль должен быть длинной минимум 8 символов'
                    }
                })}
                       type="password"
                       placeholder="Пароль"
                       className="input-text"/>
            </div>
        </>
    )
}