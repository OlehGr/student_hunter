import { useForm, FormProvider } from "react-hook-form";
import EmailField from "./Fields/EmailField";
import PasswordField from "./Fields/PasswordField";
import Loader from "../../Loader/Loader";
import {useEffect} from "react";


export default function LoginPage({login, error: {message, name}}) {

    const LoginForm = useForm({ // С помощью хука useForm() создаём объект формы
        mode: "onChange"}) // В параметрах (опциях) указываем мод ререндеринга: на каждое изменение значения


    const { handleSubmit, formState, reset } = LoginForm // Инкапсулируем некоторые иетоды объекта формы


    const submitLogin = (data) => {
        login(data.email, data.password)
    }



    useEffect(() => {
        reset({ // reset() функция которая меняет значения формы по объекту, который в неё передали: { имя_инпута: значение }
            [name]: ''
        })
    }, [message, name, reset])


    return (
        <>
            <FormProvider {...LoginForm}>
                <section className="section section--login">
                    <div className="container container--login">
                        <form onSubmit={handleSubmit(data => submitLogin(data))} className="login-form">
                            <h1 className="title">Авторизация</h1>
                            { message && <p className="error weight">{message}</p>}
                            <div className="form-field">
                                <EmailField />
                            </div>
                            <div className="form-field">
                                <PasswordField />
                            </div>

                            <button disabled={!formState.isValid} className="submit-btn" type="submit">Войти</button>
                        </form>
                    </div>
                </section>
            </FormProvider>
            <Loader />
        </>


    )
}