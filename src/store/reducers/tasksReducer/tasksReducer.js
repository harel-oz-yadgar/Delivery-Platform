import * as types from '../../actions/actionTypes';


export default function TasksReducer(state = [], action) {
    switch (action.type) {
        case types.START_FETCHING_TASKS:
            return {
                ...state,
                isLoading: true,
            }
        case types.LOAD_TASKS:
            return {
                ...state,
                isLoading: false,
                tasks: action.tasks.map(task => {
                    return {
                        ...task,
                        display: true,
                    }
                })
            }
        case types.ASSIGN_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if(task._id === action.taskId){
                        return {
                            ...task,
                            driverId: action.driverId,
                        };
                    }
                    else{
                        return task;
                    }
                }),
            }
        case types.TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if(task._id === action.taskId){
                        return {
                            ...task,
                            display: !task.display,
                        };
                    }
                    else{
                        return task;
                    }
                })
            }
        default:
            return state
    }
}