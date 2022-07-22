import {useSelector} from "react-redux";

function Loader({isLoading}) {
    return (
        <>
            {
                isLoading && <section className="loader">
                    <div className="clock-loader"></div>
                </section>
            }
        </>)


}

export default function LoaderContainer() {
    const state = useSelector(state => {
        return {
            ...state.loader
        }
    })

    return <Loader {...state} />
}

