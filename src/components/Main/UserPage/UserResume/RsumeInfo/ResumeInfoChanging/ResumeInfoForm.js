import ResumeInfoFields from "./ResumeInfoFields";
import {useForm, FormProvider} from "react-hook-form"
import {useUpdateUserResumeMutation} from "../../../../../../API/reduxService/userAPI";

export default function ResumeInfoForm({id, title, description, closeResumeChangingWind}) {

    const onBackClick = () => {
        closeResumeChangingWind(id)
        InfoForm.reset({
            title, description
        })
    }

    const InfoForm = useForm({
                            mode: 'onChange',
                            reValidateMode: 'onChange',
                            defaultValues: {title, description}})
    const [updateResumeInfo, {isLoading}] = useUpdateUserResumeMutation()

    const onResumeInfoFormSubmit = async info => {
        await updateResumeInfo({id, ...info})
        closeResumeChangingWind(id)
    }

    return (
        <>
            <div className="resume-card resume-card--form">
                <button className="back-btn" onClick={onBackClick}>
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>
                <FormProvider {...InfoForm} >
                    <form className="resume-form" onSubmit={InfoForm.handleSubmit(onResumeInfoFormSubmit)}>
                        <ResumeInfoFields {...{id, title, description, closeResumeChangingWind, isLoading}} />
                    </form>
                </FormProvider>
            </div>
        </>
    )
}