import React, { Component } from 'react';

import Tasks from '../TasksTable/TasksTable.container';
import Drivers from '../DriversList/DriversList.container';

import logo from '../../logo.svg';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <p>Bringg</p>
                <Drivers/>
                <Tasks/>

            </div>
        );
    }
}

export default App;
