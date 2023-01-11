import AllAdvertsContainer from "./AllAdverts/AllAdvertsContainer";

export default function AdvertsPage() {

    return (
        <section className='section-adverts'>
            <div className="search"></div>
            <div className="filter"></div>

            <div className="adverts-wrapper">
                <h1 className='title'>Все объявления</h1>
                <div className="all-adverts">
                    <AllAdvertsContainer />
                </div>
            </div>
        </section>
    )
}