import CreatingResumeForm from "./CreatingResumeForm";
import {useCreateUserResumeMutation} from "../../../../../API/reduxService/userAPI";

export default function CreatingResumeFormContainer({onCloseCreatingResume}) {

    const [createNewResume, {isLoading}] = useCreateUserResumeMutation()


    return <CreatingResumeForm {...{createNewResume, isLoading, onCloseCreatingResume}} />
}