import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import CookieController from "../CookieController";

export const UserApi = createApi({
    reducerPath: 'userApiReducer',
    baseQuery: fetchBaseQuery({
                baseUrl: 'http://localhost:3030/api/',
                prepareHeaders: (headers) => {
                    const {token} = CookieController.getCookies()

                    if (token) headers.set('Authorization', `auth ${token}`)

                    return headers
                }
            }),
    tagTypes: ['Resume'], // Type-тэги которые указывают на принадлижность скаченных данных, они необходимы, чтобы отслеживать мутации (POST и PUT запросы) данных

    endpoints: builder => ({
        getUser: builder.query({
            query: userId => ({
                url: `user/${userId}`,
            })
        }),

        getUserAva: builder.query({
            query: userId => ({
                url: `user/img/${userId}`
            })
        }),

        getUserResume: builder.query({ // функция query объекта builder строит Query (GET) запросы, в неё мы передаём объект с опциями
            query: () => ({ // Строит запросы, на вход получает данные необходимые для запроса, должна вернуть объект, описывающий запрос (url, params, body)
                url: 'resume/'
            }),
            providesTags: result => ['Resume'] // Так как в этои запросе мы получаем данные, то то "провайдим тэги" и используем метод providesTags
        }),

        deleteUserResume: builder.mutation({ // функция mutation объекта builder  строит Mutation (POST, PUT, DELETE) запросы, в неё мы передаём объект с опциями
            query: id => ({ // Принимаем на вход id удаляемого элемента на сервере
                url: '/resume/del',
                method: 'DELETE',
                body: {id}
            }),

            invalidatesTags: result => ['Resume'] // Так мы изменили на сервере состояние скаченных данных на клиент, нам надо показать, что сохранённые данные стали невалидными
            // метод invalidatesTags "инвалидирует" тэги, которые мы запрвайдили и подаёт сигнал, выполнить соответствующий query-запрос, заново
            // Это происходи, когда сервер вернул положительный ответ о изменение, данных
            // Теперь все query-запросы создающие схожие тэги будут перевыполнены, и на клиент поступят свежие данные
        }),

        updateUserResume: builder.mutation({
            query: info  => ({
                url: '/resume/change',
                method: 'PUT',
                body: info
            }),

            invalidatesTags: (result, error, {id}) => ['Resume']

        }),

        createUserResume: builder.mutation({
            query: data => ({
                url: '/resume/add',
                method: 'POST',
                body: data
            }),

            invalidatesTags: result => ['Resume']
        })
        
    })
})

export const { // Автосгенерированные хуки для использования запросов
    useGetUserQuery,
    useGetUserAvaQuery,
    useGetUserResumeQuery,
    useDeleteUserResumeMutation,
    useUpdateUserResumeMutation,
    useCreateUserResumeMutation
} = UserApi