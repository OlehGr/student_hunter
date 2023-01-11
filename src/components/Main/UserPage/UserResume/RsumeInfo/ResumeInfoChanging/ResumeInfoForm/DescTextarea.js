import {useFormContext} from "react-hook-form";

export default function DescTextarea() {

    const {register} = useFormContext()

    return (
        <>
            <div className="resume-form__textarea">
                <textarea {...register('description', {
                    required: true
                })}
                ></textarea>
            </div>
        </>
    )
}