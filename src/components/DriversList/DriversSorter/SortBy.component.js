import React from "react";
import PropTypes from "prop-types";

import Switch from '../../Switch/Switch';

import './SortBy.scss';

const SortBy = ({onSortByChange, onSortOrderChange}) =>{
    return (
        <div className='sorter'>
            <span className='text'>Sort by</span>
            <Switch textA='Name'
                    retValA='name'
                    textB='Age'
                    retValB='age'
                    onClick={onSortByChange}
            />
            <span className='text'>order</span>
            <Switch textA='ASC'
                    retValA='asc'
                    textB='DES'
                    retValB='des'
                    defaultValue='asc'
                    onClick={onSortOrderChange}
            />
        </div>
    );
}

SortBy.propTypes = {
    onSortByChange: PropTypes.func,
    onSortOrderChange: PropTypes.func,
};

SortBy.defaultProps = {
    onSortByChange: ()=>{},
    onSortOrderChange: ()=>{}
};


export default SortBy;