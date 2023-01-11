import {ICreatAdvertRedAction, IState, TInfo, UserInputType} from "./TypesCreatingAdvertReducer";


const SET_NEW_ADVERT:string = 'SET_NEW_ADVERT'
const SWITCH_NEW_ADVERT_CHANGING:string = 'SET_NEW_ADVERT_CHANGING'

const CREATE_INFO_CHANGING:string = 'CREATE_INFO_CHANGING'
const DELETE_INFO_CHANGING:string = 'DELETE_INFO_CHANGING'
const SET_NEW_INFO:string = 'SET_NEW_INFO'
const SWITCH_ON_INFO_CHANGING:string = 'SWITCH_ON_INFO_CHANGING'
const SWITCH_OFF_INFO_CHANGING:string = 'SWITCH_OFF_INFO_CHANGING'


const initialState:IState = {
    title: undefined,
    description: undefined,
    img: undefined,
    isChanging: true,
    infos: {
        count: 0,
        isEdit: [0],
        items: [
            {id: 0, title: '', description: ''}
        ]
    }
}

export default function creatingAdvertReducer(state:IState = initialState, action:ICreatAdvertRedAction): IState {
    switch (action.type) {
        case SET_NEW_ADVERT:
            return { ...state,
                title: action.title,
                description: action.description,
                img: action.img,
                isChanging: false,
            }
        case SWITCH_NEW_ADVERT_CHANGING:
            return {...state,
                isChanging: !!action.bool
            }


        case CREATE_INFO_CHANGING:
            const newId:number = state.infos.count+1
            return {...state,
                   infos: {...state.infos,
                       count: newId,
                       isEdit: [...state.infos.isEdit, newId],
                       items: [...state.infos.items,
                           {id: newId, title: '', description: ''}
                       ]
                }
            }
        case DELETE_INFO_CHANGING:
            return {...state,
                infos: {...state.infos,
                    isEdit: state.infos.isEdit.filter(infoId => infoId !== action.id),
                    items: state.infos.items.filter(info => info.id !== action.id)
                }
            }
        case SET_NEW_INFO:
            return {...state,
                infos: {...state.infos,
                    items: state.infos.items.map((info):TInfo =>  {
                        if (info.id === action.id) return {
                            id: action.id , title: String(action.title), description: String(action.description)
                        }
                        return {...info}
                    })
                }
            }
        case SWITCH_ON_INFO_CHANGING:
            return {...state,
                infos: {...state.infos,
                    isEdit: [...state.infos.isEdit, Number(action.id)]
                }
            }
        case SWITCH_OFF_INFO_CHANGING:
            return {...state,
                infos: {...state.infos,
                    isEdit: state.infos.isEdit.filter(infoId => infoId !== action.id)
                }
            }
        default:
            return {...state}
    }
}

// Creators of Main advert`s part

export const setNewAdvertCreator = (title:UserInputType<string>, description:UserInputType<string>, img:UserInputType<FileList>):ICreatAdvertRedAction =>  ({
    type: SET_NEW_ADVERT,
    title, description, img
})

const switchNewAdvertChanging = (bool:boolean):ICreatAdvertRedAction => ({
    type: SWITCH_NEW_ADVERT_CHANGING, bool
})


// Creators of advert`s infos

const createNewInfoChanging = ():ICreatAdvertRedAction => ({
    type: CREATE_INFO_CHANGING
})

const deleteNewInfoChanging = (id:number):ICreatAdvertRedAction => ({
    type: DELETE_INFO_CHANGING, id
})


const setNewInfoCreator = (id:number, title:string, description:string):ICreatAdvertRedAction => ({
    type: SET_NEW_INFO,
    id, title, description
})


const switchOnInfoChangingCreator = (id:number):ICreatAdvertRedAction => ({
    type: SWITCH_ON_INFO_CHANGING, id
})

const switchOffInfoChangingCreator = (id:number):ICreatAdvertRedAction => ({
    type: SWITCH_OFF_INFO_CHANGING, id
})