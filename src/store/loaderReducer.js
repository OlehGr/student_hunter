
const SET_LOADING = 'SET_LOADING'

const initialState = {
    isLoading: false,
}

export default function loaderReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            return {...state,
                isLoading: action.bool
            }
        default:
            return {...state}
    }
}

export const setLoadingCreator = bool => {
    return {
        type: SET_LOADING,
        bool: bool
    }
}
