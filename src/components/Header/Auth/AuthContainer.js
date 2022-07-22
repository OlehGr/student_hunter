import {useDispatch, useSelector} from "react-redux";
import Auth from "./Auth";
import {useEffect} from "react";
import {resetAuthCreator, setAuthThunk} from "../../../store/authReducer";

export default function AuthContainer(props) {
    const dispatch = useDispatch()

    const state = useSelector(state =>{
        return {
            isLogin: state.auth.isLogin,
            userName: state.auth.userName,
        }
    })

    useEffect(() => {
        dispatch(setAuthThunk())
    }, []);

    const resetAuth = () => {
        dispatch(resetAuthCreator())
    }


    return <Auth {...state} resetAuth={resetAuth} />
}
