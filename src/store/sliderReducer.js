const SET_OFFSET = 'SET_OFFSET'
const SET_TURNSET = 'SET_TURNSET'
const SET_SWITCHING = 'SET_SWITCHING'

const initialState = {
    imgs: ['#e74c3c', '#3498db', '#e67e22', '#8e44ad', '#f1c40f'],
    offset: 0,
    turnset: 0,
    isSwitching: false
}

export default function sliderReducer(state = initialState, action) {
    switch (action.type) {
        case SET_OFFSET:
            return {...state,
                offset: action.val
            }
        case SET_TURNSET:
            return {...state,
                offset: action.val
            }
        case SET_SWITCHING:
            return {...state,
                isSwitching: action.bool
            }
        default:
            return {...state}
    }
}

export const setOffsetCreator = val => {
    return {
        type: SET_OFFSET,
        val: val
    }
}

export const setTurnsetCreator = val => {
    return {
        type: SET_TURNSET,
        val: val
    }
}

export const setSwitchingCreator = bool => {
    return {
        type: SET_SWITCHING,
        bool: bool
    }
}

const slider = new Promise((resolve, reject) => {return true})

export const switchSliderThunk = (newOffset) => dispatch => {
    setTimeout(() => {
        slider.then(() => {
            console.log(9000)

            dispatch(setSwitchingCreator(true))
        }).then(() => {
            dispatch(setOffsetCreator(newOffset))
        }).then(dispatch(setSwitchingCreator(false)))
    }, 300)
}




