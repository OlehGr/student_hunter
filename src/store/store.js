import authReducer from "./authReducer";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import loaderReducer from "./loaderReducer";
import authFormReducer from "./authFormReducer";
import sliderReducer from "./sliderReducer";

let reducers = combineReducers({
    auth: authReducer,
    authForm: authFormReducer,
    loader: loaderReducer,
    slider: sliderReducer
})

let store = configureStore({reducer: reducers,
                                    middleware: [thunkMiddleware]
})

window.store = store


export default store