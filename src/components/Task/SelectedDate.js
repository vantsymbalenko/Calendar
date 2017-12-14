import React, { Component } from 'react';
import '../../css/Task/date.css';

export default class SelectedDate extends Component{
    render(){
        return(
            <div className="date">
                <div className="now-day">{ this.props.class }</div>
                <div className="wrapper">
                    <div className="now-month">{ this.props.month }</div>
                    <div className="now-week-day">{ this.props.dayInWeek }</div>
                </div>
            </div>
        );
    }
}
