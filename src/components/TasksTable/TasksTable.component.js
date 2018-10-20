import React  from 'react';
import PropTypes from "prop-types";

import Loader from '../Loader/Loader.component';
import TasksHeader from './TasksHeader/TasksHeader.component';
import Task from './Task/Task.component';


const TasksTable = ({isLoading, tasks, toggleDisplay}) => {
    return (
        <div>
        {
            isLoading ?
                <Loader text="Tasks"/>
                :
                <div>
                    <div>Total Tasks: </div>
                    <table>
                        <TasksHeader/>
                        <tbody>
                        {
                            tasks.map(task => {
                                return (
                                    <Task task={task}
                                          toggleDisplay={toggleDisplay}
                                          key={task._id}
                                    />
                                );
                            })
                        }
                        </tbody>
                    </table>
                </div>
        }
        </div>
    );
};

TasksTable.propTypes = {
    isLoading: PropTypes.bool,
    tasks: PropTypes.array,
    toggleDisplay: PropTypes.func
};

TasksTable.defaultProps = {
    isLoading: false,
    tasks: [],
    toggleDisplay: ()=>{}
};

export default TasksTable;