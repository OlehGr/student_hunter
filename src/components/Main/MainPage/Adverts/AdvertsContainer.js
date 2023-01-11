import Adverts from "./Adverts";
import {useQuery} from "@tanstack/react-query";
import {AdvertsAPI} from "../../../../API/api";
import AdvertsLoader from "./AdvertsLoader/AdvertsLoader";

export default function AdvertsContainer() {
    const {isLoading, data, error} = useQuery(['adverts'], () => AdvertsAPI.getAllNew())


    return <AdvertsManager {...{isLoading, adverts: data?.rows, error}} />
}




function AdvertsManager({isLoading, adverts, error}) {



    return (
        <>
            { isLoading ? <AdvertsLoader /> :

                error ? <p className='error weight'>{error.message}</p> :

                    <Adverts adverts={adverts} />
            }
        </>
    )
}