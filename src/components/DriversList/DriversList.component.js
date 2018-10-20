import React from 'react';
import PropTypes from "prop-types";

import Loader from '../Loader/Loader.component';
import DriverCard from './DriverCard/DriverCard.component';



const DriversList  = ({isLoading, drivers, onDeleteDriver}) => {
    return (
        <div>
        {
            isLoading ?
                <Loader text="Drivers"/>
                :
                <div className='drivers-list'>
                    {
                        drivers.map(driver => {
                            return (
                                <DriverCard driver={driver}
                                            key={driver._id}
                                            onDelete={()=>onDeleteDriver(driver._id)}
                                />
                            );
                        })
                    }
                </div>
        }
        </div>
    );
}

DriversList.propTypes = {
    isLoading: PropTypes.bool,
    drivers: PropTypes.array,
    onDeleteDriver: PropTypes.func,
};

DriversList.defaultProps = {
    isLoading: false,
    drivers: [],
    onDeleteDriver: ()=>{},
};

export default DriversList;