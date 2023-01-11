import {useFormContext} from "react-hook-form";

export default function CreatingResumeDescTextarea() {
    const {register} = useFormContext()


    return (
        <>

            <div className="resume-creating-form__field">
                <textarea {...register('description', {
                    required: true
                })}/>
            </div>
        </>
    )
}