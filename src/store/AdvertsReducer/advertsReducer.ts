import {IState} from "./advertsReducerPattern";
import {IAction} from "../StoreTypes";

const TO_NEXT_ADVERTS_PAGE:string = 'TO_NEXT_ADVERTS_PAGE'

const initialState:IState = {
    page: 1,
    limit: 20
}

export default function advertsReducer(state: IState = initialState, action: IAction): IState {
    switch (action.type) {
        case TO_NEXT_ADVERTS_PAGE:
            return {...state,
                page: state.page+1
            }
        default:
            return {...state}
    }
}



const NextAdvertsPageCreator = ():IAction => ({
    type: TO_NEXT_ADVERTS_PAGE
})