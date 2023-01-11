import { BtnsProps } from "./BtnsCreatingAdvertTypes";

export default function BtnsCreatingAdvertSteps({step, onStepBtnClick}:BtnsProps) {

    const isFirstStep:boolean = step === 1;
    const isSecondStep:boolean = step === 2;
    
    return (
        <>
            <div className="advert-creating__steps">
                    <button className={"advert-creating__step-btn" + (isFirstStep ? ' advert-creating__step-btn--active' : '')} onClick={() => onStepBtnClick(1)}>Шаг 1</button>
                    <button className={"advert-creating__step-btn" + (isSecondStep ? ' advert-creating__step-btn--active' : '')} onClick={() => onStepBtnClick(2)}>Шаг 2</button>
            </div>
        </>
    );
};