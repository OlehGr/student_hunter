import NextBtn from '../../../../img/icons/next-arrow.png'
import BeforeBtn from '../../../../img/icons/before-arrow.png'
import {useRef} from "react";
import SliderElement from "./SliderElement";


export default function Slider({slides, switchToNext, switchToBefore}) {

    const sliderLineEl = useRef(null)

    const switchSlider = setOffset => {
        setTimeout(() => {
            setOffset()
            sliderLineEl.current.style.transitionDuration = '0ms'
            sliderLineEl.current.style.left = '-100vw'
        }, 300)
    }

    const onNext = () => {
        sliderLineEl.current.style.transitionDuration = '300ms'
        sliderLineEl.current.style.left = '-200vw'

        switchSlider(switchToNext)
    }

    const onBefore = () => {
        sliderLineEl.current.style.transitionDuration = '300ms'
        sliderLineEl.current.style.left = '0'

        switchSlider(switchToBefore)
    }


    return (
        <section className='section section--slider'>
            <div className="slider">
                <button className='switch-btn' onClick={onBefore}>
                    <img src={BeforeBtn} alt="Предыдущий слайд"/>
                </button>

                <div ref={sliderLineEl} className={"slider__line"} style={{ left: '-100vw'}}>
                    {
                        slides.map( slide => <SliderElement key={slide.id} slide={slide.img} /> )
                    }
                </div>

                <button className='switch-btn' onClick={onNext}>
                    <img src={NextBtn} alt="Следующий слайд"/>
                </button>
            </div>
        </section>
    )
}