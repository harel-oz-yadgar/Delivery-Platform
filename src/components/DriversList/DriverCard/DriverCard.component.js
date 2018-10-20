import React from 'react';
import PropTypes from "prop-types";

import {toStringName} from '../../../assets/utils';
import './DriverCard.scss';


const DriverCard  = ({driver, onDelete}) => {
    return (
        <div className='driver-card'>
            <img className='driver-img'
                 src={driver.picture}
                 alt={toStringName(driver.name)}
            />
            <div className='driver-meta'>
                <div className='driver-name'>{toStringName(driver.name)}</div>
                <div className='driver-age'>Age: {driver.age}</div>
            </div>
            <div className='extra-zone'>
                <span>Tasks: {driver.tasks}</span>
                <button type='button'>Locate driver</button>
                <button type='button' onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
}


DriverCard.propTypes = {
    driver: PropTypes.object.isRequired,
    onDelete: PropTypes.func,
};

DriverCard.defaultProps = {
    onDelete: ()=>{}
};

export default DriverCard;