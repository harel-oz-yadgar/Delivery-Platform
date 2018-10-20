import { combineReducers } from 'redux';

import drivers from './driversReducer/driversReducer';
import tasks from './tasksReducer/tasksReducer';


const rootReducer = combineReducers({
    drivers,
    tasks,
})

export default rootReducer;