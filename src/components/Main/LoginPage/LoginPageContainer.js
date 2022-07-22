import LoginPage from "./LoginPage";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../../../store/authReducer";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function LoginPageContainer() {
    const dispatch = useDispatch()
    const state = useSelector(state => {
        return {
            error: {...state.authForm.login.error},
            isLogin: state.auth.isLogin
        }
    })


    const login = (email, password) => {
        dispatch(loginThunk(email, password))
    }



    


    return <LoginPageRouter login={login} {...state} />
}

function LoginPageRouter({login, error, isLogin}) {
    const navigate = useNavigate() // Хук useNavigate() из react-router-dom, возвращает функция для смены url

    useEffect(() => {
        if (isLogin) navigate('/', {replace: true}) // Используем смену url, если авторизация прошла успешно
    });

    return <LoginPage login={login} error={error} />
}