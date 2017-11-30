import React, { Component } from 'react';
import '../../css/Calendar/header-calendar.css';

export default class HeaderCalendar extends Component{
    render(){
        let monthName = this.props.monthNames[this.props.month];
        return(
            <div className="header">
                <div className="active-month">
                    <p className="left-arrow" onClick = {this.props.showPrevMonth}>&#x2039;</p>
                    <div className="calendar-month">
                        <p>{ this.props.year }</p>
                        <p>{ monthName }</p>
                    </div>
                    <p className="right-arrow" onClick = {this.props.showNextMonth}>&#x203A;</p>
                </div>
            </div>
        );
    }
}