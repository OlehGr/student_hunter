import AvaImg from "./AvaImg";
import {useGetUserAvaQuery} from "../../../../API/reduxService/userAPI";
import AvaImgLoader from "./AvaImgLoader";

export default function AvaImgContainer({userId}) {

    const {isFetching, data, error} = useGetUserAvaQuery(userId)

    return <AvaImgManager {...{isFetching, img: data?.img, error}} />

}

function AvaImgManager({isFetching, img, error}) {

    return (
            <>
                {
                    isFetching ? <AvaImgLoader /> :
                         error ? <p className="error weight">{error.message}</p>
                               : <AvaImg img={img} />
                }
            </>
        )
}