import * as types from '../../actions/actionTypes';


export default function MapReducer(state = [], action) {
    switch (action.type) {
        case types.CHANGE_CENTER:
            return {
                ...state,
                center: action.location,
            }
        default:
            return state
    }
}