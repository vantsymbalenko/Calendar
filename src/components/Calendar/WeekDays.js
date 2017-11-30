import React, { Component } from 'react';
import '../../css/Calendar/week-days.css';

export default class WeekDays extends Component{
    render(){
        return(
            <div className="week-days-wrapper">
                {this.props.weekDays.map((value, i ) => {
                    return(
                        <div key = {i} className="week-day">{value}</div>
                    );
                })}
            </div>
        );
    }
}