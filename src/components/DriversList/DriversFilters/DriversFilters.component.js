import React  from 'react';
import PropTypes from 'prop-types';

import Filter from './Filter.component';


const Filters = ({onFilterChange}) => {
    return (
        <form className='filters'>
            <Filter text='name'
                    onFilterChange={(val)=>onFilterChange('name',val)}
            />
            <Filter text='age'
                    onFilterChange={(val)=>onFilterChange('age',val)}
            />
        </form>
    );
};

Filters.propTypes = {
    onFilterChange: PropTypes.func,
};

Filters.defaultProps = {
    onFilterChange: ()=>{}
};

export default Filters;