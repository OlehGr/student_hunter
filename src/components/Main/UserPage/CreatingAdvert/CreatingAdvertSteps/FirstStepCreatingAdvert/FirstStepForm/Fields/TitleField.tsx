import { useFormContext } from "react-hook-form";
import NamingFieldError from "./Errors/NamingFieldError";

export default function TitleField() {

    const {register, formState, getFieldState} = useFormContext();

    const {error, isTouched} = getFieldState('title', formState);
    
    return (
        <>
            <div>
                <NamingFieldError {...{isTouched, isValid: !error, message: error?.message}} />
                <input {...register('title', {
                    required: 'Это поле обязательно'
                })}
                    type="text" 
                    className="first-step-form__title-field" />
            </div>
            
        </>
    );
};