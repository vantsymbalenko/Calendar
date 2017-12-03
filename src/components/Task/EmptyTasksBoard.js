import React, { Component } from 'react';
import '../../css/Task/empty-tasks-board.css';

export default class EmptyTasksBoard extends Component{
    render(){
        return(
            <div className="no-tasks">
                <div className="mark"></div>
                <div className="message">You have not tasks for this day</div>
            </div>
        );
    }
}