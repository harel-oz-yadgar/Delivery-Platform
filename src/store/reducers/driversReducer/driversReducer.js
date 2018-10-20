import * as types from '../../actions/actionTypes';


export default function DriverReducer(state = [], action) {
    switch (action.type) {
        case types.START_FETCHING_DRIVERS:
            return {
                ...state,
                isLoading: true,
            }
        case types.LOAD_DRIVERS:
            return {
                ...state,
                isLoading: false,
                drivers: action.drivers,
            }
        case types.DELETE_DRIVER:
            return {
                ...state,
                drivers: state.drivers.filter(driver => driver._id!==action.driverId)
            }
        case types.CHANGE_FILTER:
            return{
                ...state,
                filters: {
                    ...state.filters,
                    [action.filterKey]: action.filterValue,
                }
            }
        default:
            return state
    }
}