import React from "react";

export default class Input extends React.Component{
    constructor(props){
        super(props);

        this.state = {val: '', name: ''}
        this.handleInputData = this.handleInputData.bind(this);
    }

    componentDidMount = function(){
        this.setState({name: this.props.label})
    }

    handleInputData = function(event){
        if (!event.target.value)
            return;
        this.setState({val: event.target.value})
    };

    render(){
        return (
            <div>
                <label>{(this.props.label)}</label>
                <input 
                    className={this.props.className}
                    type={(this.props.type)} 
                    name={this.props.label} 
                    onChange={this.handleInputData}/>
            </div>
        )
    }
}