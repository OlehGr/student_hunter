import Cookies from "../API/CookieController.js";
import {setLoadingCreator} from "./loaderReducer";
import {AuthAPI} from "../API/api";
import {setErrorsCreator} from "./authFormReducer";


const SET_AUTH = 'SET_AUTH'
const RESET_AUTH = 'RESET_AUTH'

const initialState = {
    isLogin: false,
    userId: null,
    userName: null,
    error: {
        message: null,
        name: null
    }
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH:
            return {...state,
                isLogin: true,
                userId: action.userId,
                userName: action.userName
            }
        case RESET_AUTH:
            Cookies.setCookie('token', '')

            return {...state,
                isLogin: false,
                userId: null,
                userName: null,
                error: {...state.error,
                    message: null,
                    name: null
                }
            }
        default:
            return {...state}
    }
}

const setAuthCreator = (userId, userName) => {
    return {
        type: SET_AUTH,
        userId: userId,
        userName: userName
    }
}



export const resetAuthCreator = () => {
    return {
        type: RESET_AUTH,
    }
}




export const setAuthThunk = () => dispatch => {
    AuthAPI.setAuth()
        .then(res => {
            const {id, name} = res
            dispatch(setAuthCreator(id, name))
        }, () => console.log('Вы не авторизованы!'))
}

export const loginThunk = (email, password) => dispatch => {


    dispatch(setLoadingCreator(true))
    AuthAPI.login(email, password).then(res => { // Resolve
        const {id, name} = res
        dispatch(setAuthCreator(id, name))

        dispatch(setLoadingCreator(false))
    }, error => { // Reject
        const [message, name] = error.response.data.message.split(':')


        dispatch(setErrorsCreator(message, name))
        dispatch(setLoadingCreator(false))
    })


}

export const registerThunk = (email, phone, password, name, surname, aftername, group, github, role, img) => dispatch => {
    dispatch(setLoadingCreator(true))
    AuthAPI.register(email, phone, password, name, surname, aftername, group, github, role, img).then(
        res => {
            const {id, name} = res

            dispatch(setAuthCreator(id, name))
            dispatch(setLoadingCreator(false))
        }, res => {
            dispatch(setLoadingCreator(false))
        }
    )
}
