import {useFormContext} from "react-hook-form";
import PasswordHandler from "./PasswordHandler";
import {useState} from "react";

export default function PasswordField() {
    const [isHidden, setHidden] = useState(true)
    const switchHidden = () => {
        setHidden(!isHidden)
    }
    const type =  isHidden ? 'password' : 'text'

    const { register, getFieldState, formState  } = useFormContext()
    const {error, isTouched} = getFieldState('password', formState)

    return (
        <>

            <p className="error">{(error && isTouched) && error.message}</p>

            <input {...register('password', {
                required: 'Это поле обязательно'
            })}
                   type={type}
                   className="input-text"
                   placeholder="Пароль"/>
            <PasswordHandler isHidden={isHidden} switchHidden={switchHidden} />
        </>
    )
}