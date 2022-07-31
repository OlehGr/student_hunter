import {AuthFormAPI} from "../API/api";



const SET_LOGIN_ERRORS = 'SET_LOGIN_ERRORS'
const SET_REGISTER_ERRORS = 'SET_REGISTER_ERRORS'

const SET_EMAIL_ERROR_STATE = 'SET_EMAIL_ERROR_STATE'
const SET_EMAIL_FIELD_LOADING = 'SET_EMAIL_FIELD_LOADING'

const SET_PHONE_ERROR_STATE = 'SET_PHONE_ERROR_STATE'
const SET_PHONE_FIELD_LOADING = 'SET_PHONE_FIELD_LOADING'

const initialState = {
    login: {
        error: {
            message: null,
            name: null
        }
    },
    register: {
        error: {
            message: null,
            name: null
        },
        email: {
            isValid: true,
            isLoading: false
        },
        phone: {
            isValid: true,
            isLoading: false
        }

    }
}

export default function authFormReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOGIN_ERRORS:
            return {...state,
                login: {...state.login,
                    error: {...state.login.error,
                        message: action.message,
                        name: action.name
                    }
                }
            }

        case SET_REGISTER_ERRORS:
            return {...state,
                register: {...state.register,
                    error: {...state.register.error,
                        message: action.message
                    }
                }
            }

        case SET_EMAIL_ERROR_STATE:

            return {...state,
                register: {...state.register,
                    email: {...state.register.email,
                        isValid: action.bool
                    }
                }
            }
        case SET_EMAIL_FIELD_LOADING:
            return {...state,
                register: {...state.register,
                    email: {...state.register.email,
                        isLoading: action.bool
                    }
                }
            }

        case SET_PHONE_ERROR_STATE:
            return {...state,
                register: {...state.register,
                    phone: {...state.register.phone,
                        isValid: action.bool
                    }
                }
            }
        case SET_PHONE_FIELD_LOADING:
            return {...state,
                register: {...state.register,
                    phone: {...state.register.phone,
                        isLoading: action.bool
                    }
                }
            }

        default:
            return {...state}
    }
}


export const setLoginErrorsCreator = (message, name) => {
    return {
        type: SET_LOGIN_ERRORS,
        message: message,
        name: name
    }
}

export const setRegisterErrorsCreator = message => {
    return {
        type: SET_REGISTER_ERRORS,
        message: message
    }
}

const setEmailFieldValidCreator = bool => {
    return {
        type: SET_EMAIL_ERROR_STATE,
        bool: bool
    }
}

const setEmailFieldLoadingCreator = bool => {
    return {
        type: SET_EMAIL_FIELD_LOADING,
        bool: bool
    }
}

const setPhoneFieldValidCreator = bool => {
    return {
        type: SET_PHONE_ERROR_STATE,
        bool: bool
    }
}

const setPhoneFieldLoadingCreator = bool => {
    return {
        type: SET_PHONE_FIELD_LOADING,
        bool: bool
    }
}

export const setEmailFieldValidThunk = email => dispatch => {
    dispatch(setEmailFieldLoadingCreator(true))

    AuthFormAPI.setEmailValid(email).then(res => {
        const {isExisted} = res


        dispatch(setEmailFieldValidCreator(!isExisted))
        dispatch(setEmailFieldLoadingCreator(false))

    }, () => dispatch(setEmailFieldLoadingCreator(false)))
}


export const setPhoneFieldValidThunk = phone => dispatch => {
    dispatch(setPhoneFieldLoadingCreator(true))

    AuthFormAPI.setPhoneValid(phone).then(
        res => {
            const {isExisted} = res

            dispatch(setPhoneFieldValidCreator(!isExisted))
            dispatch(setPhoneFieldLoadingCreator(false))
        },
        () => dispatch(setPhoneFieldLoadingCreator(false))
    )
}


