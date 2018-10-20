import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({text}) => {
    return (
        <div>
            {text? `Loading ${text}`:`Loading`}
        </div>
    );
}

Loader.propTypes = {
    test: PropTypes.string,
};

export default Loader;