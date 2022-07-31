import students from '../img/arts/students.jpg'
import group from '../img/arts/group.jpg'
import people from '../img/arts/people.jpg'
import table from '../img/arts/table.jpg'
import school from '../img/arts/school.jpg'


const SET_OFFSET = 'SET_OFFSET'


const initialState = {
    imgs: [students,
            group,
            people,
            table,
            school],
    offset: 0,
}

export default function sliderReducer(state = initialState, action) {
    switch (action.type) {
        case SET_OFFSET:
            return {...state,
                offset: action.val
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








