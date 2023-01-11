import CreatingResumeBtn from "./CreatingResumeBtn";
import {useDispatch} from "react-redux";
import {openResumeCreatingWindCreator} from "../../../../../store/userFormsReducer";

export default function CreatingResumeBtnContainer() {
    const dispatch = useDispatch()

    const onResumeCreatingClick = () => dispatch(openResumeCreatingWindCreator())

    return <CreatingResumeBtn onResumeCreatingClick={onResumeCreatingClick} />
}