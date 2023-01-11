import { useAppDispatch } from "../../../../../store/hooks";
import { openAdvertCreatingWindCreator } from "../../../../../store/userFormsReducer";
import CreatingAdvertBtn from "./CreatingAdvertBtn";


export default function CreatingAdvertBtnContainer() {

    const dispatch = useAppDispatch()

    const openCreatingAdvertWind = () => dispatch(openAdvertCreatingWindCreator())
    

    return <CreatingAdvertBtn openCreatingAdvertWind={openCreatingAdvertWind} />

}