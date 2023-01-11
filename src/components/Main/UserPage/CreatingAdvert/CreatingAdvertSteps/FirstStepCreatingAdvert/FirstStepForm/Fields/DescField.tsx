import { useFormContext } from "react-hook-form";
import NamingFieldError from "./Errors/NamingFieldError";

export default function DescField() {
    const {register, formState, getFieldState} = useFormContext();

    const {error, isTouched} = getFieldState('description', formState);
    
    return (
        <>
            <NamingFieldError {...{isTouched, isValid: !error, message: error?.message}} />
            <textarea {...register('description', {
                required: 'Это поле обязательно'
            })}
                className="first-step-form__desc-field"></textarea>
        </>
    );
};