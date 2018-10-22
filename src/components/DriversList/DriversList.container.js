import React, { Component } from 'react';
import {connect} from 'react-redux';

import DriversList from './DriversList.component';

import {loadDrivers, deleteDriver, changeFilter} from '../../store/actions/actions/driversActions';
import {zoomLocation} from '../../store/actions/actions/mapAction'
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
            sortOrder: value,
        });
    }

    changeSortBy = (value) => {
        this.setState({
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
            <DriversList isLoading={this.props.isLoading}
                         drivers={drivers}
                         onDeleteDriver={this.props.deleteDriver}
                         onFilterChange={this.props.changeFilter}
                         onSortByChange={this.changeSortBy}
                         onSortOrderChange={this.changeSortOrder}
                         onLocateDriver={this.props.locateDriver}
            />
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
    changeFilter: (filterKey, filterValue) => dispatch(changeFilter(filterKey, filterValue)),
    locateDriver: (location) => dispatch(zoomLocation(location))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DriversListContainer);