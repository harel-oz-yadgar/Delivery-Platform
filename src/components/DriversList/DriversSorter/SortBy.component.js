import React from "react";
import PropTypes from "prop-types";

import './SortBy.scss';

const SortBy = ({onSortByChange, onSortOrderChange}) =>{
    let renderSortOrderSelector = () => {
        return (
            <select onChange={(event)=>onSortOrderChange(event.target.value)}>
                <option value='asc'>asc</option>
                <option value='des'>des</option>
            </select>
        );
    }

    let renderSortBySelector = () => {
        return (
            <select onChange={(event)=>onSortByChange(event.target.value)}>
                <option value='none'>none</option>
                <option value='name'>Name</option>
                <option value='age'>Age</option>
            </select>
        );
    }

    return (
        <div className='sorter'>
            <span className='sort-selector'>Sort by: {renderSortBySelector()}</span>
            <span className='sort-selector'>Sort method: {renderSortOrderSelector()}</span>
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