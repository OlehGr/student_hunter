import ResumeInfoForm from "./ResumeInfoChanging/ResumeInfoForm";
import ResumeInfo from "./ResumeInfo";

export default function ResumeInfoManager({id, title, description, deleteInfo, isChanging, openResumeChangingWind, closeResumeChangingWind}) {

    const isOpenedForm = isChanging.some(changingId => changingId === id)

    return (
        <>
            {
                isOpenedForm ? <ResumeInfoForm {...{id, title, description, closeResumeChangingWind}} />
                             : <ResumeInfo {...{id, title, description, deleteInfo, openResumeChangingWind}} />
            }
        </>
    )
}