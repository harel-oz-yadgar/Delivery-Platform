import React, { Component } from 'react';
import {connect} from 'react-redux';
import { ReactBingmaps } from 'react-bingmaps';

import {toStringName} from '../../assets/utils'
import './Map.scss';

class MapContainer extends Component {
    constructor(props){
        super(props);
    }

    buildPinWithIcon = (lat, lon, title, icon) => {
        return {
            "location":[lat, lon],
            "option":{
                title: title,
                icon: icon
            },
            //"addHandler": {"type" : "click", callback: this.callBackMethod }
        }
    }

    buildPin = (lat, lon, title) => {
        return {
            "location": [lat, lon],
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
                parseFloat(location.latitude),
                parseFloat(location.longitude),
                toStringName(name),
                picture
            );
        });
    };

    mapTasksToPins = (tasks) => {
        return tasks.map(task => {
            const {location, title} = task;
            return this.buildPin(
                parseFloat(location.latitude),
                parseFloat(location.longitude),
                title
            );
        });
    }

    render(){
        const initialMapCenter = [32.106564, 34.834298];//Habarzel 1, ramat hahaial

        let {drivers, tasks} = this.props;
        const driversPins = this.mapDriversToPins(drivers);
        const tasksPins = this.mapTasksToPins(tasks);

        return (
            <div className='map-container'>
                <ReactBingmaps
                    bingmapKey = "Ag19x9j8CnU4DSeAUU4LUIKDLy0yDQUw3khYUyvNZCMOKOcPNSXrB_XfYnHyweff"
                    center={initialMapCenter}
                    pushPins={[...driversPins, ...tasksPins]}
                >
                </ReactBingmaps>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    drivers: state.drivers.drivers,
    tasks: state.tasks.tasks
});

const mapDispatchToProps = (dispatch) => ({
    //loadDrivers: () => dispatch(loadDrivers()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapContainer);