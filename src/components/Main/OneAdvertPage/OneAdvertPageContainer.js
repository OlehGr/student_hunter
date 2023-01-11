import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {AdvertsAPI} from "../../../API/api";
import OneAdvertPageManager from "./OneAdvertPageManager";

export default function OneAdvertPageRouter() {

    const {advertId} = useParams();

    return <OneAdvertPageContainer id={advertId} />
}



function OneAdvertPageContainer({id}) {
    const {isLoading, data, error} = useQuery(['adverts', id], ()=> AdvertsAPI.getOne(id))

    return <OneAdvertPageManager {...{isLoading, data, error,}} />
}