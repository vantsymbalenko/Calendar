import React, { Component } from 'react';
import '../../css/Task/date.css';

export default class Date extends Component{
    render(){
        let month = this.props.monthNames[this.props.selectMonth];
        let dayInWeek = this.props.fullNameWeekDays[this.props.activeDayInWeek];
        return(
            <div className="date">
                <div className="now-day">{ this.props.select < 10 ? '0'+this.props.select : this.props.select }</div>
                <div className="wrapper">
                    <div className="now-month">{ month }</div>
                    <div className="now-week-day">{ dayInWeek }</div>
                </div>
            </div>
        );
    }
}