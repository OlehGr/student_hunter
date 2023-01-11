import { useAppDispatch, useStateSelector } from "../../../../../../store/hooks";
import { setAdvertCreatingStepCreator } from "../../../../../../store/userFormsReducer";
import BtnsCreatingAdvertSteps from "./BtnsCreatingAdvertSteps";
import { BtnsContainerProps } from "./BtnsCreatingAdvertTypes";

export default function BtnsCreatingAdvertStepsContainer({handleSubmit}:BtnsContainerProps) {
    
    const step:number = useStateSelector(state => state.userForms.advert.creatingStep)
    const dispatch = useAppDispatch()

    const setAdvertCreatingStep = (step:number) => dispatch(setAdvertCreatingStepCreator(step));
    const setStepFormChanges = () => handleSubmit();

    const onStepBtnClick = (nextStep:number) => {
        setAdvertCreatingStep(step);
        setStepFormChanges();
    };


    return <BtnsCreatingAdvertSteps {...{step, onStepBtnClick}} />
}