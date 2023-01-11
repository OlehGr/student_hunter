import Advert from "./Advert";

export default function Adverts({adverts}) {


    return (
        <>
            <h2 className="adverts-title">Самые свежие объявления</h2>
            <div className="container container--adverts">
                {
                    adverts.map(
                        ({id, name, description}) => <Advert key={id} {...{name, description, id}} />
                    )
                }
            </div>
        </>
    )
}
