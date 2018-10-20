import React from "react";
import PropTypes from "prop-types";

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
        <div>
            Sort by: {renderSortBySelector()}
            Sort method: {renderSortOrderSelector()}
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