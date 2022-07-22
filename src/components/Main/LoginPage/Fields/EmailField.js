import {useFormContext} from "react-hook-form";

export default function EmailField() {
    const { register, getFieldState, formState  } = useFormContext() // с помощью хука useFormContext Получаем методы формы, контекст которой прокуинут через провайдер (<FormProvider/>)

    const {error, isTouched} = getFieldState('email', formState) // Чтобы состояние инпута обновлялось при его изиенение, нужно регестрировать его имя вместе с состоянием формы

    return (
        <>

            <p className='error'>{(error && isTouched) && error.message}</p>

            <input {...register('email', {
                required: 'Это поле обязательно',
                pattern: {
                    value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/,
                    message: 'Неверный формат'
                }  })}
                   type="text"
                   className="input-text"
                   placeholder="Логин"/>

        </>
    )
}