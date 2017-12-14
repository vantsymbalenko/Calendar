import React, { Component } from 'react';

import Task from './Task';
import EmptyTasksBoard from './EmptyTasksBoard';

import '../../css/Task/task.css';

export default class Tasks extends Component{
    render(){
        return(
            <div className="tasks">
                {this.props.tasks && this.props.tasks.length !==0  ? this.props.tasks.map((value, i) => {
                    return(
                        <Task elem = {value}
                              key = {i}
                              index = {i}
                              remove ={ this.props.remove}
                              edit = { this.props.edit} />
                    )
                }) : <EmptyTasksBoard/>}
            </div>
        );
    }
}