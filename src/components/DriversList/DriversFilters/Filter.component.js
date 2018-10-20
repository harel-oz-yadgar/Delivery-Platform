import React, { Component } from 'react';
import PropTypes from "prop-types";


class Filter extends Component {
    constructor(props){
        super(props);
        this.state={
            value: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
        this.props.onFilterChange(event.target.value);
    }

    render() {
        return (
            <div className='filter'>
                <span className='filter-by-text'>Filter by {this.props.text}:</span>
                <input type="text"
                       value={this.state.value}
                       onChange={this.handleChange}
                />
            </div>
        );
    }
};

Filter.propTypes = {
    text: PropTypes.string,
    onFilterChange: PropTypes.func,
};

Filter.defaultProps = {
    text: '',
    onFilterChange: ()=>{}
};

export default Filter;