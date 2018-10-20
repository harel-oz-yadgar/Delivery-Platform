import React, { Component } from 'react';
import {connect} from 'react-redux';

import DriversList from './DriversList.component';
import Filters from './DriversFilters/DriversFilters.component';
import Sort from './DriversSorter/SortBy.component';

import {loadDrivers, deleteDriver, changeFilter} from '../../store/actions/driversActions/driversActions';
import {toStringName, filterDrivers} from './../../assets/utils';


class DriversListContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            sortBy: 'none',
            sortOrder: 'asc',
        };
    }

    componentDidMount(){
        this.props.loadDrivers();
    }

    changeSortOrder = (value) => {
        this.setState({
            ...this.state,
            sortOrder: value,
        });
    }

    changeSortBy = (value) => {
        this.setState({
            ...this.state,
            sortBy: value,
        });
    }

    sortDrivers = (drivers) => {
        if(this.state.sortBy !== 'none'){
            drivers = drivers.sort((driverA, driverB) => {
                if(this.state.sortBy === 'age'){
                    return this.state.sortOrder === 'asc' ? driverA.age-driverB.age : driverB.age-driverA.age;
                }
                else{
                    let driverAFullName = toStringName(driverA.name);
                    let driverBFullName = toStringName(driverB.name);
                    return this.state.sortOrder === 'asc' ? driverAFullName.localeCompare(driverBFullName) : -driverAFullName.localeCompare(driverBFullName);
                }
            })
        }
        return drivers;
    }

    calcTasksForDriver = (drivers) => {
        const {tasks} = this.props;
        return drivers.map(driver => {
            return {
                ...driver,
                tasks: (tasks.filter(task=>task.driverId===driver._id)).length
            }
        });
    }

    render(){
        let {drivers, nameFilter, ageFilter} = this.props;
        drivers = filterDrivers(drivers, nameFilter, ageFilter);
        drivers = this.sortDrivers(drivers);
        drivers = this.calcTasksForDriver(drivers);

        return (
            <div>
                <Filters onFilterChange={this.props.changeFilter}/>
                <Sort onSortByChange={this.changeSortBy}
                      onSortOrderChange={this.changeSortOrder}
                />
                <DriversList isLoading={this.props.isLoading}
                             drivers={drivers}
                             onDeleteDriver={this.props.deleteDriver}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.drivers.isLoading,
    tasks: state.tasks.tasks,
    drivers: state.drivers.drivers,
    nameFilter: state.drivers.filters.name,
    ageFilter: state.drivers.filters.age,
});

const mapDispatchToProps = (dispatch) => ({
    loadDrivers: () => dispatch(loadDrivers()),
    deleteDriver: (driverId) => dispatch(deleteDriver(driverId)),
    changeFilter: (filterKey, filterValue) => dispatch(changeFilter(filterKey, filterValue))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DriversListContainer);