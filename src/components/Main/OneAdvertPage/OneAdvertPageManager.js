import OneAdvertPage from "./OneAdvertPage";

export default function OneAdvertPageManager({isLoading, error, data}) {


    return (
        <>
            {
                isLoading ? <section className="loader">
                                <div className="clock-loader"></div>
                            </section> :

                    error ? <p className='error weight'>{error.message}</p> :

                    <OneAdvertPage {...data}/>
            }
        </>
    )
}