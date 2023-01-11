import {IAdvert} from "../../../../API/reduxService/interfacies/AdvertInterfaces";

export interface IQueryParams {
    limit:number
    page:number
}

export interface IResultQuery {
    data: Array<IAdvert> | undefined
    isLoading: boolean
    isError: boolean
}
