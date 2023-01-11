import CreatingResumeManager from "./CreatingResumeManager";
import {useSelector} from "react-redux";

export default function CreatingResumeContainer() {

    const isOpen = useSelector(state => state.userForms.resume.isCreating)

    return <CreatingResumeManager isOpen={isOpen} />

}