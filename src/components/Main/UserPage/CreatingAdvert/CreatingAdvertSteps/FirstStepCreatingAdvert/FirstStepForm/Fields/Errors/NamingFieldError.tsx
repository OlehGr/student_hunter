import { NamingErrorType } from "./FieldErrorsTypes";

export default function NamingFieldError({isTouched, isValid, message}:NamingErrorType) {
    
    return (
        <>
            <p className='error'>{ (isTouched && !isValid) && message }</p>
        </>
    );
};