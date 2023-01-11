import UserResume from "./UserResume";
import {useGetUserResumeQuery} from "../../../../API/reduxService/userAPI";

export default function UserResumeContainer() {
    const {isLoading, data, isError} = useGetUserResumeQuery() // Хук выполняет запрос и возвращает объект, содержащий состояние запроса и полученные данные


    return <UserResumeManager {...{isLoading, infos: data?.info, isError}} />
}

function UserResumeManager({isLoading, infos, isError}) {


    return (
        <>
            {
                isLoading ? <p>Загрузка...</p> :
                  isError ? <p>Резюме не загружено :(</p>
                          : <UserResume infos={infos} />
            }
        </>
    )
}