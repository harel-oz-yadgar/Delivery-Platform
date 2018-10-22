import * as types from '../actionTypes';
import {parseLocation} from '../../../assets/utils'

export function zoomLocation(location){
    return dispatch => {
        dispatch(zoomLocationAction(parseLocation(location)));
    }
}

function zoomLocationAction(location){
    return { type: types.CHANGE_CENTER, location};
}
