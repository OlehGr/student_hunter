import {useFormContext} from "react-hook-form";
import NamingFieldErrorState from "./Errors/NamingFieldErrorState";

export default function GithubField() {
    const {register, getFieldState, formState} = useFormContext()
    const {error, isTouched, isDirty} = getFieldState('github', formState)

    const isUsed = isTouched && isDirty

    return (
        <>
            <NamingFieldErrorState isValid={!error} isUsed={isUsed} />

            <div className="form-field__input">
                <p className='error'>{ (error && isTouched) && error.message }</p>
                <input type="text" {...register('github', {
                    required: 'Это поле обязательно',
                    pattern: {
                        value: /^https:\/\/github\.com\/[0-9a-zA-Z]+$/,
                        message: 'Ссылка на GitHub указана неверно'
                    }
                })}
                       placeholder="GitHub"
                       className="input-text"/>
            </div>
        </>
    )
}