import FirstStepCreatingAdvert from "./FirstStepCreatingAdvert/FirstStepCreatingAdvert";
import SecondStepCreatingAdvert from "./SecondStepCreatingAdvert/SecondStepCreatingAdvert";
import {TypeCreatingAdvertSteps} from "./TypesCreatingAdvertSteps";

export default function CreatingAdvertSteps({step}:TypeCreatingAdvertSteps) {

    const isFirstStep:boolean = step === 1;
    const isSecondStep:boolean = step === 2;

    return (
        <>
            <div className="advert-creating">

                {isFirstStep && <>
                    <FirstStepCreatingAdvert />
                </>}

                {isSecondStep && <>
                    <SecondStepCreatingAdvert />
                </>}
            </div>

        </>
    );
};