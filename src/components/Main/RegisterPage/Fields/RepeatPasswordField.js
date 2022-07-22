import NamingFieldErrorState from "./Errors/NamingFieldErrorState";
import {useFormContext} from "react-hook-form";


export default function RepeatPasswordField() {
    const {register, getFieldState, formState, watch, setError, getValues} = useFormContext()
    const {error, isDirty, isTouched} = getFieldState('repeatPassword', formState)
    const isUsed = isTouched && isDirty

    const matchingPasswords = repeatPassword => {
        const {password} = getValues()
        return repeatPassword === password
    }

    return (
        <>
            <NamingFieldErrorState isValid={!error} isUsed={isUsed} />

            <div className="form-field__input">
                <p className='error'>{(error && isTouched) && error.message }</p>
                <input {...register('repeatPassword', {
                    required: 'Это поле обязательно',
                    validate: {
                        matching: val => matchingPasswords(val) || 'Пароли должны совпадать'
                    }
                })}
                       type="password"
                       placeholder="Пароль"
                       className="input-text"/>
            </div>
        </>
    )
}