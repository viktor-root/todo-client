import React, { useState } from 'react';
import './Main.css'
import { Task } from '../Task/Task';
import { render } from '@testing-library/react';
import { TaskInputContainer } from '../TaskInput/TaskInputContainer';
import { PageStatus } from '../../common/typings';
import {Loader} from '../Loader/Loader';
import { TaskContainer } from '../Task/TaskContainer';

export class Main extends React.Component {
    constructor(){
        // let now = new Date().toString();
        super();
        this.state = {
            tasks : [
            {id:0, title:'Create to-do app',done:false},
            {id:1, title:'Find real true girl',done:true},
            {id:2, title:'Buy beautiful and cozy house',done:false}
            ]
        };
    }

    componentDidMount() {
        this.props.loadPosts();
    }

    addTask = (text) => {
        let now = new Date();

        this.setState(state => {
            let { tasks } = state;
            tasks.push({
                id: tasks.length !== 0 ? tasks.length : 0,
                title: text,
                //date: now.toString(),
                done: false
            });
        return tasks;
        });
    };

    doneTask = id => {
        const index = this.state.tasks.map(task => task.id).indexOf(id);
        this.setState(state => {
            let { tasks } = state;
            tasks[index].done = true;
            return tasks;
        });
    };

    deleteTask = id => {
        const index = this.state.tasks.map(task => task.id).indexOf(id);
        this.setState(state => {
            let { tasks } = state;
            delete tasks[index];
            return tasks;
        });
    };

    submitEditTask = (id, text) => {
        console.log(id, text);
        const index = this.state.tasks.map(task => task.id).indexOf(id);
        this.setState(state => {
            let { tasks } = state;
            tasks[index].title = text;
            return tasks;
        });
    };
    

    render() {
        if(this.props.pageStatus === PageStatus.LOADING) {
            return <Loader />
        } else {
            let activeTasks = this.props.posts.filter(post => !post.done);
            let doneTasks = this.props.posts.filter(post => post.done);
            return(
                <div className="container_comp_main">
                    <div className="App">
                        <h1 className="top">Active tasks:{activeTasks.length}</h1>
                        {[...activeTasks,...doneTasks].map(task =>
                            <TaskContainer 
                                task={task}
                                key ={task.id}
                            ></TaskContainer>
                        )}
                        <TaskInputContainer addTask={this.addTask}/>
                    </div>
                </div>
            );
        }
    };
};