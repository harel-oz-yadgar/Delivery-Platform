import React from 'react';
import PropTypes from "prop-types";

import AssignedSelector from './AssignedSelector.container';
import {formatDate} from '../../../assets/utils'
import './Task.scss'
import Switch from "../../Switch/Switch";


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
            <td>
                <button className='locate-task-btn'
                        type='button'
                        disabled={!task.display}
                        onClick={onLocateTask}>
                    <span className='locate-task-text'>Locate</span>
                    <img className='search-icon' src='https://static.thenounproject.com/png/101791-200.png' alt=''/>
                </button>
            </td>
            <td>
                <Switch defaultValue='true'
                        textA='Show'
                        retValA='true'
                        textB='Hide'
                        retValB='false'
                        onClick={()=>toggleDisplay(task._id)}
                />
            </td>
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