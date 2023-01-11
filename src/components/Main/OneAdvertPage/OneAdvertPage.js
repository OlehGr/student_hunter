import Info from "./Info/Info";

export default function OneAdvertPage({name, description, img, rating, adverst_info, userId}) {

    return (
        <>
            <section className={"section section--advert"}>
                    <h1 className="advert__title">{name}</h1>

                    <img className="advert__img" src={'http://localhost:3030/' + img} alt="Фото к вакансии"/>

                    <div className="container container--advert">
                        <p className="advert__desc">{description}</p>

                        <Info info={adverst_info} />
                    </div>
            </section>
        </>
    )
}