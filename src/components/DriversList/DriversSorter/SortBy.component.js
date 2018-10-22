import React from "react";
import PropTypes from "prop-types";

import TwoButtonSelector from '../../TwoButtonSelector/TwoButtonSelector.component';

import './SortBy.scss';

const SortBy = ({onSortByChange, onSortOrderChange}) =>{
    return (
        <div className='sorter'>
            <span className='text'>Sort by</span>
            <TwoButtonSelector textA='Name'
                               retValA='name'
                               textB='Age'
                               retValB='age'
                               onClick={onSortByChange}
            />
            <span className='text'>order</span>
            <TwoButtonSelector textA='ASC'
                               retValA='asc'
                               textB='DES'
                               retValB='des'
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