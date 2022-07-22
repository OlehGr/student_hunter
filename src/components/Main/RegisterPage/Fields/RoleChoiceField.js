import {useFormContext} from "react-hook-form";

export default function RoleChoiceField() {

    const {register} = useFormContext()

    return (
        <>
            <div className="form-field">
                <input {...register('role', {required: 'Это поле обязательно'})} value='STUDENT'
                       type="radio"
                       id="student"
                       className="role-input" />
                <label htmlFor="student" className="role-label">Студент</label>
            </div>

            <div className="form-field">
                <input {...register('role', {required: 'Это поле обязательно'})} value='EMPLOYER'
                       type="radio"
                       id="employer"
                       className="role-input" />
                <label htmlFor="employer" className="role-label">Работодатель</label>
            </div>

            <p className="errors"></p>
        </>
    )
}