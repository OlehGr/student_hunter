import AuthContainer from "./Auth/AuthContainer";
import {NavLink} from "react-router-dom";

export default function Header() {

    const setActiveStyle = isActive => isActive ? {backgroundColor: '#fff', color: '#5e4298'} : undefined

    return (
        <>
            <div className="container">
                <nav className="nav">
                    <NavLink to="/" className="nav__link" style={ ({isActive}) => setActiveStyle(isActive) }>Главная</NavLink>
                    <NavLink to="/adverts" className="nav__link" style={ ({isActive}) => setActiveStyle(isActive) }>Объявления</NavLink>
                </nav>
                <AuthContainer />
            </div>
        </>
    )
}