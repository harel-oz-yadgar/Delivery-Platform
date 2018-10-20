import * as types from '../actionTypes'
import {DRIVERS_API} from '../../../assets/consts'



export function loadDrivers() {
    return dispatch => {
        dispatch(startLoadingAction());

        fetch(DRIVERS_API)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
                else {
                    return [];
                }
            })
            .then(drivers => {
                dispatch(loadDriversAction(drivers));
            });
    }
}

export function deleteDriver(driverId) {
    return dispatch => {
        //dispatch(start delete request)
        //api request to delete driver by id
        dispatch(deleteDriversAction(driverId));
    }
}

export function changeFilter(filterKey, filterValue){
    return dispatch => {
        dispatch(changeFilterAction(filterKey, filterValue));
    }
}


function startLoadingAction(){
    return { type: types.START_FETCHING_DRIVERS};
}

function loadDriversAction(drivers) {
    return { type: types.LOAD_DRIVERS, drivers}
}

function deleteDriversAction(driverId) {
    return { type: types.DELETE_DRIVER, driverId}
}

function changeFilterAction(filterKey, filterValue){
    return { type: types.CHANGE_FILTER, filterKey, filterValue}
}

