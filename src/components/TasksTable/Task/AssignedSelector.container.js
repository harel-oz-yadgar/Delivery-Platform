import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import {assignTask} from '../../../store/actions/tasksActions/tasksActions'
import {toStringName} from '../../../assets/utils'



class AssignedSelectorContainer extends Component {

    onAssign = (driverId) => {
        this.props.assign(this.props.taskId, driverId);
    }

    render() {
        return (
            <select onChange={(event)=>this.onAssign(event.target.value)}
                    value={this.props.assignedTo ? this.props.assignedTo:''}
            >
                <option value='' >Unassigned</option>
                {
                    this.props.drivers.map(driver => {
                        return (
                            <option value={driver._id}
                                    key={driver._id}>
                                {toStringName(driver.name)}</option>
                        );
                    })
                }
            </select>
        );
    }
}

AssignedSelectorContainer.propTypes = {
    taskId: PropTypes.string.isRequired,
    assignedTo: PropTypes.string,
};

AssignedSelectorContainer.defaultProps = {
    assignedTo: '',
};

const mapStateToProps = (state) => ({
    drivers: state.drivers.drivers,
})

const mapDispatchToProps = (dispatch) => ({
    assign: (taskId, driverId) => dispatch(assignTask(taskId, driverId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AssignedSelectorContainer);