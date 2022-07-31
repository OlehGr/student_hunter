import Slider from "./Slider";
import {useDispatch, useSelector} from "react-redux";
import {
    setOffsetCreator,
} from "../../../../store/sliderReducer";

export default function SliderContainer() {
    const dispatch = useDispatch()
    const state = useSelector(state => {
        return {
            ...state.slider,
            img: [...state.slider.imgs]
        }
    })

    const {imgs, offset} = state, lastIndex = imgs.length-1
    const offsetBefore = (!offset) ? lastIndex : offset-1
    const offsetNext = (offset === lastIndex) ? 0 : offset+1


    const slides = [{id: offsetBefore, img: imgs[offsetBefore]},
                    {id: offset, img: imgs[offset]},
                    {id: offsetNext, img: imgs[offsetNext]}]

    const switchToNext = () => {
        dispatch(setOffsetCreator(offsetNext))
    }

    const switchToBefore = () => {
        dispatch(setOffsetCreator(offsetBefore))

    }




    return <Slider  {...{slides, switchToNext, switchToBefore}} />
}






