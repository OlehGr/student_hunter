import InfoElem from "./InfoElem";

export default function Info({info}) {

    return (
        <>
            <div className="info">
                {
                    info.map(
                        ({id, title, description}) => <InfoElem key={id} {...{title, description}} />
                    )
                }
            </div>
        </>
    )
}