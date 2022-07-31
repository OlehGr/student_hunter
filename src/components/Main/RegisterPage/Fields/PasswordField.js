import NamingFieldErrorState from "./Errors/NamingFieldErrorState";
import {useFormContext} from "react-hook-form";
import {useState} from "react";
import PasswordHandler from "../../LoginPage/Fields/PasswordHandler";

export default function PasswordField() {
    const [isHidden, setHidden] = useState(true)
    const switchHidden = () => {
        setHidden(!isHidden)
    }
    const type = isHidden ? 'password' : 'text'

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
                       type={type}
                       placeholder="Пароль"
                       className="input-text"/>

                <PasswordHandler {...{isHidden, switchHidden}} />
            </div>
        </>
    )
}