import React, { Component } from 'react';

export default class Task extends Component{
    render(){
        return(
            <div className="task">
                <div className="mark"></div>
                <div className="task-wrapper">
                    <div className="time">{this.props.elem.time}</div>
                    <div className="task-message">{ this.props.elem.message}</div>
                </div>
            </div>
        );
    }
}