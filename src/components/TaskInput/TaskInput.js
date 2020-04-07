import React from 'react';
import { render } from '@testing-library/react';
import './TaskInput.css';

export class TaskInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };
    }

    componentDidMount() {
        console.log(this.props)
    }

    addTask = () => {
        this.props.addPost(this.state.input);
    };
    handleEnter = (event) => {
        if(event.key === 'Enter') this.addTask();
    };
    inputChange = (event) => {  
        this.setState({input: event.target.value});
    };

    render() {

        const { input } = this.state;

        return(
            <div className="task-input">
                <input 
                    onKeyPress ={this.handleEnter}
                    onChange ={this.inputChange}
                    value={input}
                ></input>
                <button 
                    onClick={this.addTask}>ADD
                </button>
            </div>
        );
    };
}