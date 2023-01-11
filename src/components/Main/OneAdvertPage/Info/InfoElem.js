export default function InfoElem({title, description}) {

    return (
        <>
            <div className="info__item">
                <h2 className="info__title">{title}</h2>
                <p className="info__text">{description}</p>
            </div>
        </>
    )
}