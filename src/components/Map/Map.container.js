import React, { Component } from 'react';
import {connect} from 'react-redux';
import { ReactBingmaps } from 'react-bingmaps';

import {filterDrivers, filterTasks, toStringName, parseLocation} from '../../assets/utils'
import './Map.scss';

class MapContainer extends Component {

    buildPinWithIcon = (location, title, icon) => {
        return {
            "location": location,
            "option":{
                title: title,
                icon: icon
            },
        }
    }

    buildPin = (location, title) => {
        return {
            "location": location,
            "option": {
                title: title,
                color: 'red',
                text: 'T'
            }
        };
    }

    mapDriversToPins = (drivers) => {
        return drivers.map(driver => {
            const {location, name, picture} = driver;
            return this.buildPinWithIcon(
                parseLocation(location),
                toStringName(name),
                picture
            );
        });
    };

    mapTasksToPins = (tasks) => {
        return tasks.map(task => {
            const {location, title} = task;
            return this.buildPin(
                parseLocation(location),
                title
            );
        });
    }

    removeHiddenTasks = (tasks) => {
        return tasks.filter(task=>task.display);
    }

    render(){
        let {drivers, tasks, isLoading, nameFilter, ageFilter} = this.props;
        drivers = filterDrivers(drivers, nameFilter, ageFilter);
        tasks = filterTasks(tasks, drivers, nameFilter, ageFilter);
        tasks = this.removeHiddenTasks(tasks);

        const driversPins = this.mapDriversToPins(drivers);
        const tasksPins = this.mapTasksToPins(tasks);

        return (
            <div className='map-container'>
                {
                    isLoading ? '' :
                        <ReactBingmaps
                            bingmapKey = "Enter your ket here"
                            center={this.props.center}
                            zoom={18}
                            pushPins={[...driversPins, ...tasksPins]}
                            getLocation = {
                                {addHandler: "click", callback:(e)=>{console.log(e)}}
                            }
                        />
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    drivers: state.drivers.drivers,
    tasks: state.tasks.tasks,
    isLoading: state.tasks.isLoading && state.drivers.isLoading,
    nameFilter: state.drivers.filters.name,
    ageFilter: state.drivers.filters.age,
    center: state.map.center,
});

const mapDispatchToProps = (dispatch) => ({
    //loadDrivers: () => dispatch(loadDrivers()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapContainer);
