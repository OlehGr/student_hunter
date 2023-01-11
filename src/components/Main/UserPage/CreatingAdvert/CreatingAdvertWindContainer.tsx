import CreatingAdvertWind from "./CreatingAdvertWind";
import {useAppDispatch, useStateSelector} from "../../../../store/hooks";
import {closeAdvertCreatingWindCreator} from "../../../../store/userFormsReducer";

export default function CreatingAdvertWindContainer() {

    const isCreating = useStateSelector(state => state.userForms.advert.isCreating)
    const dispatch = useAppDispatch()

    


    const closeCreatingAdvertWind = () => dispatch(closeAdvertCreatingWindCreator())

    return <CreatingAdvertWind isOpen={isCreating} closeCreatingAdvertWind={closeCreatingAdvertWind} />
}