import {useFormContext} from "react-hook-form";

export default function CreatingResumeTitleField() {

    const {register} = useFormContext()

    return (
        <>
            <div className="resume-creating-form__field">
                <input {...register('title', {
                    required: true
                })}
                    type="text"/>
            </div>
        </>
    )
}