import React, { Component } from 'react';
import {connect} from 'react-redux';

import TasksTable from './TasksTable.component';
import {loadTasks, toggleDisplay} from '../../store/actions/tasksActions/tasksActions';
import {filterDrivers} from "../../assets/utils";

class TasksTableContainer extends Component {
    componentDidMount(){
        this.props.loadTasks();
    }

    filterTasks = (tasks) => {
        let {drivers, nameFilter, ageFilter} = this.props;
        let filteredDrivers = filterDrivers(drivers, nameFilter, ageFilter);

        if(nameFilter==='' && ageFilter===''){
            return tasks;
        }

        tasks = tasks.filter(task => {
            return filteredDrivers.some(driver => driver._id===task.driverId)
        })
        return tasks;
    }

    render() {
        let {tasks} = this.props;
        tasks = this.filterTasks(tasks);

        return (
            <TasksTable isLoading={this.props.isLoading}
                        tasks={tasks}
                        toggleDisplay={this.props.toggleDisplay}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.tasks.isLoading,
    tasks: state.tasks.tasks,
    drivers: state.drivers.drivers,
    nameFilter: state.drivers.filters.name,
    ageFilter: state.drivers.filters.age,
})

const mapDispatchToProps = (dispatch) => ({
    loadTasks: () => dispatch(loadTasks()),
    toggleDisplay: (taskId) => dispatch(toggleDisplay(taskId)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TasksTableContainer);