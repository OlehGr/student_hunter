import CreatingResumeTitleField from "./FormFields/CreatingResumeTitleField";
import CreatingResumeDescTextarea from "./FormFields/CreatingResumeDescTextarea";
import {useForm, FormProvider} from "react-hook-form";
import LoadingManager from "./LoadingManager";


export default function CreatingResumeForm({createNewResume, isLoading, onCloseCreatingResume}) {

    const CreatingResumeForm = useForm({
        mode: "onChange",
        reValidateMode: "onChange"
    })

    const {handleSubmit, formState: {isValid}} = CreatingResumeForm

    const submitNewResume = async data => {
        await createNewResume(data)
        onCloseCreatingResume()
    }


    return (
        <>
            <FormProvider {...CreatingResumeForm}>
                <form className="resume-creating-form" onSubmit={handleSubmit(submitNewResume)}>
                    <CreatingResumeTitleField />

                    <CreatingResumeDescTextarea />

                    <LoadingManager disabled={!isValid} isLoading={isLoading} onCloseCreatingResume={onCloseCreatingResume} />
                </form>
            </FormProvider>

        </>
    )
}