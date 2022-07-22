import {Route, Routes} from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import LoginPageContainer from "./LoginPage/LoginPageContainer";
import RegisterPageContainer from "./RegisterPage/RegisterPageContainer";

export default function Main() {
    return (
            <Routes>
                <Route path="/login" element={<LoginPageContainer />} />
                <Route path="/reg" element={<RegisterPageContainer />} />

                <Route path="/" element={<MainPage />} />

            </Routes>
    )
}