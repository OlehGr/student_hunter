const OPEN_RESUME_CHANGING_WIND = 'OPEN_RESUME_CHANGING_WIND'
const CLOSE_RESUME_CHANGING_WIND = 'CLOSE_RESUME_CHANGING_WIND'
const OPEN_RESUME_CREATING_WIND = 'OPEN_RESUME_CREATING_WIND'
const CLOSE_RESUME_CREATING_WIND = 'CLOSE_RESUME_CREATING_WIND'

const OPEN_ADVERT_CREATING_WIND = 'OPEN_ADVERT_CREATING_WIND'
const CLOSE_ADVERT_CREATING_WIND = 'CLOSE_ADVERT_CREATING_WIND'

const SET_ADVERT_CREATING_STEP = 'SET_ADVERT_CREATING_STEP'


const initialState = {
    resume: {
        isChanging: [],
        isCreating: false
    },
    advert: {
        isCreating: false,
        creatingStep: 1
    }

}

export default function userFormsReducer(state= initialState, action) {
    switch (action.type) {
        case OPEN_RESUME_CHANGING_WIND:
            return {...state,
                resume: {...state.resume,
                    isChanging: [...state.resume.isChanging, action.id]
                }
            }

        case CLOSE_RESUME_CHANGING_WIND:
            return {...state,
                resume: {...state.resume,
                    isChanging: state.resume.isChanging.filter(id => id !== action.id)
                }
            }

        case OPEN_RESUME_CREATING_WIND:
            return {...state,
                resume: {...state.resume,
                    isCreating: true
                }
            }

        case CLOSE_RESUME_CREATING_WIND:
            return {...state,
                resume: {...state.resume,
                    isCreating: false
                }
            }

        case OPEN_ADVERT_CREATING_WIND:
            return {...state,
                advert: {...state.advert,
                    isCreating: true
                }
            }

        case CLOSE_ADVERT_CREATING_WIND:
            return {...state,
                advert: {...state.advert,
                    isCreating: false,
                    creatingStep: 1
                }
            }

        case SET_ADVERT_CREATING_STEP:
            return {...state,
                advert: {...state.advert,
                    creatingStep: action.step
                }
            }


        default:
            return {...state}
    }
}

/// Resume creators

export const openResumeChangingWindCreator = id => ({ // CHANGING
    type: OPEN_RESUME_CHANGING_WIND,
    id: id
})

export const closeResumeChangingWindCreator = id => ({ // CHANGING
    type: CLOSE_RESUME_CHANGING_WIND,
    id: id
})

export const openResumeCreatingWindCreator = () => ({ // CREATING
    type: OPEN_RESUME_CREATING_WIND
})

export const closeResumeCreatingWindCreator = () => ({ // CREATING
    type: CLOSE_RESUME_CREATING_WIND
})


/// Advert creators

export const openAdvertCreatingWindCreator = () => ({ // CREATING
    type: OPEN_ADVERT_CREATING_WIND
})

export const closeAdvertCreatingWindCreator = () => ({ // CREATING
    type: CLOSE_ADVERT_CREATING_WIND
})

export const setAdvertCreatingStepCreator = (step) => ({
    type: SET_ADVERT_CREATING_STEP, step
})