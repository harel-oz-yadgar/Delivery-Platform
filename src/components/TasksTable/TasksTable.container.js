import React, { Component } from 'react';
import {connect} from 'react-redux';

import TasksTable from './TasksTable.component';
import {loadTasks, toggleDisplay} from '../../store/actions/actions/tasksActions';
import {filterTasks} from "../../assets/utils";
import {zoomLocation} from "../../store/actions/actions/mapAction";

class TasksTableContainer extends Component {
    componentDidMount(){
        this.props.loadTasks();
    }



    render() {
        let {tasks, drivers, nameFilter, ageFilter} = this.props;
        tasks = filterTasks(tasks, drivers, nameFilter, ageFilter);

        return (
            <TasksTable isLoading={this.props.isLoading}
                        tasks={tasks}
                        toggleDisplay={this.props.toggleDisplay}
                        onLocateTask={this.props.locateTask}
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
    locateTask: (location) => dispatch(zoomLocation(location))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TasksTableContainer);