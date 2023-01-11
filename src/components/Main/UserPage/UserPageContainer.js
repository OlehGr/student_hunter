import UserPage from "./UserPage";
import {useParams} from "react-router-dom";
import {useGetUserQuery} from "../../../API/reduxService/userAPI";

export default function UserRouter() {

    const {userId} = useParams()

    return <UserService userId={userId} />
}




function UserService({userId}) {
    const {isFetching, data, error} = useGetUserQuery(userId)


    return <UserManager {...{isFetching, user: data?.user, error}} />
}




function UserManager({isFetching, user, error}) {



    return (
        <>
            {
                isFetching ? <section className="loader">
                                <div className="clock-loader"></div>
                            </section> :
                    error ? <p className="error weight">{error.message}</p>
                        : <UserPage {...user} />
            }
        </>
    )
}