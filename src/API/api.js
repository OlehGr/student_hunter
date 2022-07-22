import axios from "axios";
import Cookies from "./CookieController";
import jwt_decode from "jwt-decode";
import FormDataCreator from "./FormDataCreator";

const {token} = Cookies.getCookies()

const instance = axios.create({
    baseURL: 'http://localhost:3030/api/',
    headers: {
        "Authorization": `auth ${token}`
    }
})


export const AuthAPI = {
    setAuth() {
        return instance.get('user/auth')
            .then(res => {
                if(res.status === 200) {
                    const {id, name} = jwt_decode(res.data.token)
                    return {id, name}
                } else {
                    console.log(`Ошибка: ${res.data}`)
                }
            })
    },
    login(email, password) {
        return instance.post('user/login', {
            email: email,
            password: password
        }).then(res => {
            const {id, name} = jwt_decode(res.data.token)
            Cookies.setCookie('token', res.data.token)

            return {id, name}
        })
    },
    register(email, phoneNum, password, name, surname, aftername, classNum, git, role, img) {
        const data = FormDataCreator({email, phoneNum, password, name, surname, aftername, classNum, git, role, img})

        return instance.post('user/reg', data).then(
            res => {
                const {id, name} = jwt_decode(res.data.token)
                Cookies.setCookie('token', res.data.token)

                return {id, name}
            }
        )
    }
}


export const AuthFormAPI = {
    setEmailValid(email) {
        return instance.get(`user/email?email=${email}`)
            .then(res => {
                return res.data
            })
    },
    setPhoneValid(phone) {
        return instance.get(`user/phone?phone=${phone}`)
            .then(res => {
                return res.data
            })
    }
}