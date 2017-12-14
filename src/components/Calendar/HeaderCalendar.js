import React, { Component } from 'react';
import '../../css/Calendar/header-calendar.css';

export default class HeaderCalendar extends Component{
    render(){
         return(
            <div className="header">
                <div className="active-month">
                    <p className="left-arrow" onClick = {this.props.wrapperShowPrevMonth}>&#x2039;</p>
                    <div className="calendar-month">
                        <p>{ this.props.year }</p>
                        <p>{ this.props.monthName }</p>
                    </div>
                    <p className="right-arrow" onClick = {this.props.wrapperShowNextMonth}>&#x203A;</p>
                </div>
            </div>
        );
    }
}

