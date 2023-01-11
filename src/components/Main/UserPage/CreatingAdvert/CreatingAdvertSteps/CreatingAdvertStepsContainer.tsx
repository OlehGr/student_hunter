import CreatingAdvertSteps from "./CreatingAdvertSteps";
import {useStateSelector} from "../../../../../store/hooks";


export default function CreatingAdvertStepsContainer() {
    const step:number = useStateSelector(state => state.userForms.advert.creatingStep)

    return <CreatingAdvertSteps step={step} />
}