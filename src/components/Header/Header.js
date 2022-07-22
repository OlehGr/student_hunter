import AuthContainer from "./Auth/AuthContainer";

export default function Header() {
    return (
        <>
            <div className="container">
                <nav className="nav">
                    Навигация
                </nav>
                <AuthContainer />
            </div>
        </>
    )
}