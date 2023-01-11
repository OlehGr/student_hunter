import ResumeInfo from "./ResumeInfo";
import {useDeleteUserResumeMutation} from "../../../../../API/reduxService/userAPI";
import ResumeInfoManager from "./ResumeInfoManager";
import {useDispatch, useSelector} from "react-redux";
import {closeResumeChangingWindCreator, openResumeChangingWindCreator} from "../../../../../store/userFormsReducer";

export default function ResumeInfosContainer({infos}) {
    const [deleteInfo, result] = useDeleteUserResumeMutation()

    const {isChanging} = useSelector(state => ({...state.userForms.resume}))

    const dispatch = useDispatch()

    const openResumeChangingWind = id => dispatch(openResumeChangingWindCreator(id))
    const closeResumeChangingWind = id => dispatch(closeResumeChangingWindCreator(id))


    return (
        <>
            {
                result.isLoading ? 'Загрузка' :
                infos.map( ({id, title, description}) => <ResumeInfoManager key={id} {...{id, title, description, isChanging, deleteInfo, openResumeChangingWind, closeResumeChangingWind}} /> )
            }
        </>
    )
}