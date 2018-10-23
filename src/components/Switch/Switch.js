import React, {Component} from "react";
import PropTypes from "prop-types";

import './Switch.scss'


class Switch extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedValue: props.defaultValue
        };
    }

    onClick = (retVal) => {
        this.setState({selectedValue: retVal});
        this.props.onClick(retVal);
    }

    renderButton = (text, retVal) => {
        return (
            <button className={`button ${this.state.selectedValue===retVal? 'selected':''}`}
                    type='button'
                    disabled={this.state.selectedValue===retVal}
                    onClick={()=>this.onClick(retVal)}>
                {text}
            </button>
        )
    }

    render(){
        let {textA, retValA, textB, retValB, onClick, className} = this.props;
        return(
            <span className={`switch ${className? className:''}`}>
                {
                    this.renderButton(textA, retValA, onClick)
                }
                {
                    this.renderButton(textB, retValB, onClick)
                }
            </span>
        )
    }
}

Switch.propTypes = {
    textA: PropTypes.string.isRequired,
    textB: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string
};

Switch.defaultProps = {
    defaultValue: '',
    retValA: 'a',
    retValB: 'b',
    onClick: ()=>{},
    className: '',
};

export default Switch;