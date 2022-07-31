export default function SliderElement({slide}) {
    return (
        <>
            <div className="slider__elem" style={{backgroundImage: `url(${slide})`}}>

            </div>
        </>
    )
}