import {useFormContext} from "react-hook-form";

export default function TitleField() {

    const {register} = useFormContext()

    return (
        <>
            <div className="resume-form__field">
                <input  {...register('title',{
                    required: true
                })}
                        type="text"/>
            </div>
        </>
    )
}