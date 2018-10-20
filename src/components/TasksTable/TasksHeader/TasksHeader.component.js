import React, { Component } from 'react';
import './TasksHeader.css'


class TasksHeader extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Scheduled for</th>
                    <th>Assigned to</th>
                    <th>Address</th>
                    <th>Lat</th>
                    <th>Lon</th>
                    <th>Locate on map</th>
                    <th>Show on map</th>
                </tr>
            </thead>
        );
    }
}

export default TasksHeader;