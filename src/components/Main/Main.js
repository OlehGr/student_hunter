import {Route, Routes} from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import LoginPageContainer from "./LoginPage/LoginPageContainer";
import RegisterPageContainer from "./RegisterPage/RegisterPageContainer";
import AdvertsPageContainer from "./AllAdvertsPage/AdvertsPageContainer";
import OneAdvertPageRouter from "./OneAdvertPage/OneAdvertPageContainer";
import UserRouter from "./UserPage/UserPageContainer";

export default function Main() {
    return (
            <Routes>
                <Route path={'/users/:userId'} element={<UserRouter />} />

                <Route path="/adverts/:advertId" element={<OneAdvertPageRouter />} />
                <Route path="/adverts" element={<AdvertsPageContainer />} />

                <Route path="/login" element={<LoginPageContainer />} />
                <Route path="/reg" element={<RegisterPageContainer />} />

                <Route path="/" element={<MainPage />} />

            </Routes>
    )
}