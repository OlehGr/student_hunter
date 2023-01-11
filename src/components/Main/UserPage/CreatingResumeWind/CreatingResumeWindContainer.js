import CreatingResumeWind from "./CreatingResumeWind";
import {useDispatch} from "react-redux";
import {closeResumeCreatingWindCreator} from "../../../../store/userFormsReducer";

export default function CreatingResumeWindContainer() {

    const dispatch = useDispatch()

    const onCloseCreatingResume = () => dispatch(closeResumeCreatingWindCreator())

    return <CreatingResumeWind onCloseCreatingResume={onCloseCreatingResume} />
}