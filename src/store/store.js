import authReducer from "./authReducer";
import {configureStore} from "@reduxjs/toolkit";
import loaderReducer from "./loaderReducer";
import authFormReducer from "./authFormReducer";
import sliderReducer from "./sliderReducer";
import {UserApi} from "../API/reduxService/userAPI";
import userFormsReducer from "./userFormsReducer";
import {advertApi} from "../API/reduxService/advertApi";
import advertsReducer from "./AdvertsReducer/advertsReducer";
import creatingAdvertReducer from "./creatingAdvertReducer/creatingAdvertReducer";

let reducers = {
    auth: authReducer,
    authForm: authFormReducer,
    loader: loaderReducer,
    slider: sliderReducer,
    userForms: userFormsReducer,
    creatingAdvertForms: creatingAdvertReducer,
    allAdverts: advertsReducer,
    [UserApi.reducerPath]: UserApi.reducer,
    [advertApi.reducerPath]: advertApi.reducer
}

let store = configureStore({reducer: reducers,
                                    middleware: (getDefaultMiddleware =>
                                                                        getDefaultMiddleware()
                                                                        .concat(UserApi.middleware)
                                                                        .concat(advertApi.middleware))
})

window.store = store


export default store