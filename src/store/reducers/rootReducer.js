import { combineReducers } from 'redux';

import drivers from './reducers/driversReducer';
import tasks from './reducers/tasksReducer';
import map from './reducers/mapReducer';


const rootReducer = combineReducers({
    drivers,
    tasks,
    map,
})

export default rootReducer;