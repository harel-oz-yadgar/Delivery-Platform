import * as types from '../actionTypes';
import {TASKS_API} from '../../../assets/consts'

export function loadTasks() {
    return dispatch => {
        dispatch(startLoadingAction());

        fetch(TASKS_API)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
                else {
                    return [];
                }
            })
            .then(tasks => {
                dispatch(loadTaskAction(tasks));
            });
    }
}

export function assignTask(taskId, driverId){
    return dispatch => {
        //dispatch start assigning
        //request to the api
        dispatch(assignTaskAction(taskId, driverId));
    }
}

export function toggleDisplay(taskId){
    return dispatch => {
        dispatch(toggleDisplayAction(taskId));
    }
}






function startLoadingAction(){
    return { type: types.START_FETCHING_TASKS};
}

function loadTaskAction(tasks){
    return { type: types.LOAD_TASKS, tasks}
}

function assignTaskAction(taskId, driverId){
    return { type: types.ASSIGN_TASK, taskId, driverId}
}

function toggleDisplayAction(taskId){
    return { type: types.TOGGLE_TASK, taskId}
}
