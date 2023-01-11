import {Link} from "react-router-dom";

export default function Advert({name, description, id}) {

    return (
        <>
            <Link to={'adverts/' + id}>
                <div className="advert">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </Link>
        </>
    )
}