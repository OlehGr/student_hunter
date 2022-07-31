import {useFormContext} from "react-hook-form";
import LoadingFieldErrorState from "./Errors/LoadingFieldErrorState";
import {useEffect} from "react";

export default function PhoneField({isValid, isLoading, setPhoneFieldValid}) {
    const {register, getFieldState, formState, setError, setValue} = useFormContext()
    const {error, isDirty, isTouched} = getFieldState('phone', formState)
    const isUsed = isTouched && isDirty

    useEffect(() => {
        console.log(isValid)
        if (!isValid) setError('phone', {type: 'existing', message: 'Этот номер телефона уже зарегестрирован'})
    }, [isValid, setError])

    const onBlurEffect = e => {
        if (isDirty) setPhoneFieldValid(e.currentTarget.value)
        setValue('phone', e.currentTarget.value, {shouldTouch: true})
    }


    return (
        <>
            <LoadingFieldErrorState isValid={!error} isUsed={isUsed} isLoading={isLoading} />

            <div className="form-field__input">
                <p className='error'>{ (isTouched && error) && error.message }</p>
                <input {...register('phone', {
                    required: 'Это поле обязательно',
                    maxLength: {
                        value: 12, message: 'Длина номера телефона - 10 символов'
                    },
                    pattern: {
                        value: /^8[0-9]{10}$/,
                        message: 'Неверный формат номера телефона'
                    },
                    onBlur: onBlurEffect
                })}
                       type="text"
                       placeholder="Телефон"
                       className="input-text"/>
            </div>
        </>
    )
}