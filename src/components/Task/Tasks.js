import React, { Component } from 'react';
import '../../css/Task/task.css';

import Task from './Task';
import EmptyTasksBoard from './EmptyTasksBoard';

export default class Tasks extends Component{
    render(){
        console.log(this.props.delete);

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