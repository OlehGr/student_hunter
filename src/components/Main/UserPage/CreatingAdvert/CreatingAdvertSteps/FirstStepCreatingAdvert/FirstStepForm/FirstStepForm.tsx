import TitleField from "./Fields/TitleField";
import DescField from "./Fields/DescField";
import ImgField from "./Fields/ImgField";
import { FirstStepFormData, FirstStepFormProps } from "./FirstStepFormTypes";
import { FormProvider, useForm } from "react-hook-form";
import BtnsCreatingAdvertStepsContainer from "../../BtnsCreatingAdvertSteps/BtnsCreatingAdvertStepsContainer";

export default function FirstStepForm({submitFirstStepForm, formData}:FirstStepFormProps) {
    
    const firstStepForm = useForm({reValidateMode: 'onChange', mode: 'onChange', defaultValues: formData})

    const {formState, getValues} = firstStepForm


    const FirstFormSubmit = () => {
        submitFirstStepForm(getValues())
    }

    return (
        <>
            <BtnsCreatingAdvertStepsContainer handleSubmit={FirstFormSubmit} />

            <div className="step">
                <FormProvider {...firstStepForm}>
                    <form className="first-step-form">
                        <div className="first-step-form__img">
                            <ImgField />
                        </div>

                        <div className="first-step-form__title">
                            <h4 className="first-step-form__explanation">Выберите изображение для вашего объявления, напишите его название и описание</h4>
                            <TitleField />
                        </div>

                        <div className="first-step-form__desc">
                            <DescField />
                        </div>
                    </form>

                    <button className="next-step-btn" disabled={!formState.isValid} onClick={FirstFormSubmit}>Следующий шаг</button>
                </FormProvider>
            </div>
            
            
        </>
    );
};