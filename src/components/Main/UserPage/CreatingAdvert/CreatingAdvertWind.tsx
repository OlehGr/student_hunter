import {AdvertWindType} from "./CreatingAdvertWindTypes";
import CreatingAdvertStepsContainer from "./CreatingAdvertSteps/CreatingAdvertStepsContainer";

export default function CreatingAdvertWind({isOpen, closeCreatingAdvertWind}:AdvertWindType) {


    return (
        <>
            {
                isOpen && <>
                    <section className="create-wind">
                        <button className="create-wind__close-wind" onClick={closeCreatingAdvertWind}>
                            <span className="material-symbols-outlined">
                                close
                            </span>
                        </button>

                        <h2 className="create-wind__title">Создать новое объявление</h2>
                        <CreatingAdvertStepsContainer />
                    </section>
                </>
            }
        </>
    )
}