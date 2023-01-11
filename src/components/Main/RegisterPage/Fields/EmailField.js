import {useFormContext} from "react-hook-form";
import LoadingFieldErrorState from "./Errors/LoadingFieldErrorState";
import {useEffect} from "react";

export default function EmailField({isValid, setEmailFieldValid, isLoading}) {

    const {register, getFieldState, formState, setValue, setError} = useFormContext()
    const {error, isDirty, isTouched} = getFieldState('email', formState)

    useEffect(() => {
        if (!isValid) setError('email', {type: 'existing', message: 'Этот логин уже занят'})
    }, [isValid, setError])

    const onBlurEffect = e => {
        if(isDirty) setEmailFieldValid(e.currentTarget.value)
        setValue('email', e.currentTarget.value, {
            shouldTouch: true
        })
    }



    return (
        <>
            <LoadingFieldErrorState isValid={!error} isUsed={isDirty && isTouched} isLoading={isLoading} />

            <div className="form-field__input">
                <p className='error'>{ (error && isTouched) && error.message }</p>
                <input {...register('email', {
                    required: 'Это поле обязательно',
                    pattern: {
                        value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/,
                        message: 'Неверный формат'
                    },

                    onBlur: onBlurEffect
                })}
                       type="text"
                       placeholder="Логин"
                       className="input-text"/>
            </div>
        </>
    )
}