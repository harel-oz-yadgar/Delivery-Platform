import React, { Component } from 'react';

import Tasks from '../TasksTable/TasksTable.container';
import Drivers from '../DriversList/DriversList.container';
import Map from '../Map/Map.container';
import logo from '../../assets/BringgLogo.jpg';

import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="app">
                <img src={logo} alt="Bringg" className='logo'/>

                <div className='flexbox-container'>
                    <Drivers/>
                    <Map/>
                </div>
                <Tasks/>

            </div>
        );
    }
}

export default App;
