import {Link} from "react-router-dom";

export default function Auth({isLogin, userName, resetAuth}) {

    return (
        <>
            <div className="auth">
                {
                    isLogin && <>
                        <Link to="/" className='auth__link right-l'>{userName}</Link>
                        <Link to='/' onClick={resetAuth} className='auth__link'>Выйти</Link>
                    </>

                }
                {
                    !isLogin && <>
                        <Link to='/login' className='auth__link right-l'>Войти</Link>
                        <Link to='/reg' className='auth__link'>Зарегистрироваться</Link>
                    </>
                }
            </div>
        </>
    )


}