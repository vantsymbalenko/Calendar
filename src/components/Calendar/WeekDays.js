import React, { Component } from 'react';
import '../../css/Calendar/week-days.css';

export default class WeekDays extends Component{
    render(){
        return(
            <div className="week-days-wrapper">
                {this.props.weekDays.map((value, i ) => {
                    let day = value.substring(0,3).toUpperCase();
                    return(
                        <div key = {i} className="week-day">{day}</div>
                    );
                })}
            </div>
        );
    }
}