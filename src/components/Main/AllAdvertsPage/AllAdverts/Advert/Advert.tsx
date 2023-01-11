import {IAdvertProps} from "./AdvertTypes";
import {Link} from "react-router-dom";

export default function Advert ({id, name, description}:IAdvertProps) {

    return (
        <>
            <Link to={`${id}`}>
                <div className="advert advert--all">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </Link>
        </>
    )
}