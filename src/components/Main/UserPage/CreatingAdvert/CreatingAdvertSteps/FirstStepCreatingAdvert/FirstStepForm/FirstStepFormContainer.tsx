import { setNewAdvertCreator } from "../../../../../../../store/creatingAdvertReducer/creatingAdvertReducer";
import { useAppDispatch, useStateSelector } from "../../../../../../../store/hooks";
import FirstStepForm from "./FirstStepForm";
import { FirstStepFormData } from "./FirstStepFormTypes";

export default function FirstStepFormContainer() {
    const dispatch = useAppDispatch();
    const submitFirstStepForm = ({title, description, img}:FirstStepFormData) => dispatch(setNewAdvertCreator(title, description, img));

    const {img, title, description} = useStateSelector(state => state.creatingAdvertForms)

    return <FirstStepForm {...{submitFirstStepForm, formData: {img, title, description}}} />;
}
