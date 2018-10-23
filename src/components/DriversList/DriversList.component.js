import React from 'react';
import PropTypes from "prop-types";

import Loader from '../Loader/Loader.component';
import DriverCard from './DriverCard/DriverCard.component';
import Filters from "./DriversFilters/DriversFilters.component";
import Sort from "./DriversSorter/SortBy.component";
import './DriversList.scss'

const DriversList  = ({isLoading, drivers, onDeleteDriver, onFilterChange, onSortByChange, onSortOrderChange, onLocateDriver}) => {
    return (
        <div>
        {
            isLoading ?
                <Loader text="Drivers"/>
                :
                <div className='drivers-list'>
                    <div className='driver-list-manage'>
                        <Filters onFilterChange={onFilterChange}/>
                        <Sort onSortByChange={onSortByChange}
                              onSortOrderChange={onSortOrderChange}
                        />
                    </div>
                    <div className='drivers-list-content'>
                        {
                            drivers.map(driver => {
                                return (
                                    <div className='driver-card-wrapper' key={driver._id}>
                                        <DriverCard driver={driver}
                                                    onDelete={()=>onDeleteDriver(driver._id)}
                                                    onLocateDriver={()=>onLocateDriver(driver.location)}
                                        />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
        }
        </div>
    );
}

DriversList.propTypes = {
    isLoading: PropTypes.bool,
    drivers: PropTypes.array,
    onDeleteDriver: PropTypes.func,
    onFilterChange: PropTypes.func,
    onSortByChange: PropTypes.func,
    onSortOrderChange: PropTypes.func,
};

DriversList.defaultProps = {
    isLoading: false,
    drivers: [],
    onDeleteDriver: ()=>{},
    onFilterChange: ()=>{},
    onSortByChange: ()=>{},
    onSortOrderChange: ()=>{},
};

export default DriversList;