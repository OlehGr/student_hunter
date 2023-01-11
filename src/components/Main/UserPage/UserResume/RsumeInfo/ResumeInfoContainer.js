import ResumeInfo from "./ResumeInfo";
import {useDeleteUserResumeMutation} from "../../../../../API/reduxService/userAPI";

export default function ResumeInfoContainer({id, title, description}) {



    return <ResumeInfo {...{title, description}} />
}