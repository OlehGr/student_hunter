import NamingFieldErrorState from "./Errors/NamingFieldErrorState";
import {useFormContext} from "react-hook-form";
import {useState} from "react";
import PasswordHandler from "../../LoginPage/Fields/PasswordHandler";


export default function RepeatPasswordField() {
    const [isHidden, setHidden] = useState(true)
    const switchHidden = () => {
        setHidden(!isHidden)
    }
    const type = isHidden ? 'password' : 'text'


    const {register, getFieldState, formState, getValues} = useFormContext()
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
                       type={type}
                       placeholder="Пароль"
                       className="input-text"/>

                <PasswordHandler {...{isHidden, switchHidden}} />
            </div>
        </>
    )
}