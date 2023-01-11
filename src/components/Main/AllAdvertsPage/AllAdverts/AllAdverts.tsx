import {IAdvert} from "../../../../API/reduxService/interfacies/AdvertInterfaces";
import Advert from "./Advert/Advert";

export default function ({adverts}: {adverts: Array<IAdvert> | undefined }) {


    return (
        <>
            {
                adverts?.map(advert => <Advert key={advert.id} {...advert} />)
            }
        </>
    )
}