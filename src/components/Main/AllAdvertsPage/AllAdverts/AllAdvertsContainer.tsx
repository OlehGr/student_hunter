import AllAdverts from "./AllAdverts";
import {advertApi, useGetAllAdvertsQuery} from "../../../../API/reduxService/advertApi";
import {useSelector} from "react-redux";
import {useStateSelector} from "../../../../store/hooks";
import {IQueryParams, IResultQuery} from "./AllAdvertsTypes";

export default function AllAdvertsContainer() {

    const {page, limit} = useStateSelector(state => state.allAdverts)



    return <AllAdvertsService {...{page, limit}} />
}

function AllAdvertsService ({page, limit}:IQueryParams) {

    const {data, isLoading, isError} = useGetAllAdvertsQuery({page, limit})

    return <AllAdvertsManager {...{data, isLoading, isError}} />
}

function AllAdvertsManager ({data, isLoading, isError}:IResultQuery) {

    return (
        <>
            {
                isLoading ? <p>Загрузка...</p> :
                  isError ? <p>Объявления не загружены :(</p>
                          : <AllAdverts adverts={data} />

            }
        </>
    )
}