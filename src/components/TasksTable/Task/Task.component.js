import React from 'react';
import PropTypes from "prop-types";

import AssignedSelector from './AssignedSelector.container';
import {formatDate} from '../../../assets/utils'
import './Task.css'


const Task = ({task, toggleDisplay, onLocateTask}) => {
    return (
        <tr>
            <td>{task.title}</td>
            <td className='date'>{formatDate(task.scheduled_at)}</td>
            <td>
                <AssignedSelector taskId={task._id}
                                  assignedTo={task.driverId}/>
            </td>
            <td>{task.address}</td>
            {/*<td>{task.location.latitude}</td>
            <td>{task.location.longitude}</td>*/}
            <td><button type='button' onClick={onLocateTask} disabled={!task.display}>Locate</button></td>
            <td><button type='button' onClick={()=>toggleDisplay(task._id)}>{task.display? 'hide':'show'}</button></td>
        </tr>
    );
};

Task.propTypes = {
    task: PropTypes.object.isRequired,
    toggleDisplay: PropTypes.func
};

Task.defaultProps = {
    toggleDisplay: ()=>{}
};

export default Task;