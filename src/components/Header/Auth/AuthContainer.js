import {useDispatch, useSelector} from "react-redux";
import Auth from "./Auth";
import {useEffect} from "react";
import {resetAuthCreator, setAuthThunk} from "../../../store/authReducer";

export default function AuthContainer() {
    const dispatch = useDispatch()

    const state = useSelector(state =>{
        return {
            isLogin: state.auth.isLogin,
            userName: state.auth.userName,
            userId: state.auth.userId
        }
    })

    useEffect(() => {
        if (!state.isLogin) dispatch(setAuthThunk())
    }, [dispatch]);

    const resetAuth = () => {
        dispatch(resetAuthCreator())
    }


    return <Auth {...state} resetAuth={resetAuth} />
}
