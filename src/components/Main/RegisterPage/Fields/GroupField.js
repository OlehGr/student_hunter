import {useFormContext} from "react-hook-form";

export default function GroupField() {
    const {register, formState, getFieldState} = useFormContext()

    const {error, isTouched, isDirty} = getFieldState('group', formState)


    return (
        <>

            <>
                    <span className={"material-symbols-outlined state-icon" + (error ? ' red' : ' green')}>
                        {isDirty && (error ? 'close' : 'done')}
                    </span>
            </>
            <div className="form-field__input">
                <p className='error'>{(isTouched && error) && error.message}</p>
                <input {...register('group', {
                    required: 'Это поле обязательно',
                    pattern: {
                        value: /^[А-Я]{2,5}-[0-9]{2}$/,
                        message: 'Такой группы не существует'
                    }
                })}
                       type="text"
                       placeholder="Группа"
                       className="input-text"/>
            </div>
        </>
    )
}