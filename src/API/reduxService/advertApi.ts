import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import CookieController from "../CookieController";
import {IAdvert, IAdvertParams} from "./interfacies/AdvertInterfaces";




export const advertApi = createApi({
    reducerPath: 'advertApiReducer',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3030/api/',
        prepareHeaders: (headers) => {
            const {token} = CookieController.getCookies()

            if (!!token) headers.set('Authorization', `auth ${token}`)

            return headers
        }
    }),

    tagTypes: ['AllAdverts'],

    endpoints: build => ({
        getAllAdverts: build.query<IAdvert[], IAdvertParams>({
            query: (params) => ({
                url: 'advert/',
                params
            }),

            transformResponse: (response: {rows:IAdvert[]}) => response.rows,

            providesTags: result => ['AllAdverts']
        })


    })

})


export const {useGetAllAdvertsQuery} = advertApi


