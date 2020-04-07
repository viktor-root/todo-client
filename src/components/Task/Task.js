import React, { useState, useCallback } from 'react';
import './Task.css';
import {Loader} from '../Loader/Loader';

export class Task extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            edit: false,
            editInputValue: this.props.task.title
        }
    }
    componentDidMount(){
        console.log(this.props)
    }

    editHandler = (event) => {
        let newEdit;
        if(!this.state.edit) {
            newEdit = true;
        } else {
            newEdit = false;
            this.props.changePost({ title: this.state.editInputValue}, this.props.task.id);
        }

        this.setState({
            edit: newEdit
        })
    }

    editInputChangeCallback = (e) => {
        if(e.target){
            this.setState({
                editInputValue: e.target.value
            });
        }
    }

    doneTask = (e) => {
        this.props.changePost({ done: true }, this.props.task.id)
    }
    deleteTask = (e) => {
        this.props.deletePost(this.props.task.id);
    }
    
    
    render() {
        const { task } = this.props;
        const className = 'task ' + (task.done ? 'task-done' : '');

        if(this.props.pageStatus === "LOADING") {
            return <Loader />
        } else {
            return (
                <div className = {className}>
                    { this.state.edit ? <input className="edit-input" value={this.state.editInputValue} onChange={this.editInputChangeCallback}></input> : <p>{task.title}</p>}
                    <span>{task.date}</span>
                    <div className="task_comp_but_wrap">
                        <div className="edit-btn" onClick={this.editHandler}>
                            { this.state.edit ? <p>✔</p> : <p>✏️</p>}
                        </div>
                        <div className="action-btn">
                            {!task.done ? (
                                <p onClick={this.doneTask}>✔️</p>
                            ) : (
                                <p onClick={this.deleteTask}>❌</p>
                            )}
                        </div>
                    </div>
                </div>
            );
        }
    }
};
