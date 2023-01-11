import SliderContainer from "./Slider/SliderContainer";
import AdvertsContainer from "./Adverts/AdvertsContainer";


export default function MainPage() {

    return (
        <>
            <SliderContainer />
            <div className="section section--adverts">
                <AdvertsContainer />
            </div>
        </>
    )
}