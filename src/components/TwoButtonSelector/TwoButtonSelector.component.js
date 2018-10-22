import React, {Component} from "react";

class TwoButtonSelector extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedValue: ''
        };
    }

    onClick = (retVal) => {
        this.setState({selectedValue: retVal});
        this.props.onClick(retVal);
    }

    renderButton = (text, retVal) => {
        return (
            <button className={`button clickable ${retVal===this.state.selectedVal? 'selected':''}`}
                    type='button'
                    onClick={()=>this.onClick(retVal)}>
                {text}
            </button>
        )
    }

    render(){
        let {textA, retValA, textB, retValB, onClick, className} = this.props;
        return(
            <span className={className}>
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

export default TwoButtonSelector