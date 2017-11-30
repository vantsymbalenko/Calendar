import React, { Component } from 'react';
import '../css/Calendar/calendar.css';

export default class Calendar extends Component{
    render(){
        let monthName = this.props.monthNames[this.props.month];
        return(
            <div className="calendar">
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
                <div className="week-days-wrapper">
                    {this.props.weekDays.map((value, i ) => {
                        return(
                            <div key = {i} className="week-day">{value}</div>
                        );
                    })}
                </div>
                <div className="month-days">
                    {this.props.days.map((value, i) => {
                        let addedClass = ( i<6 && value > 23 ) ? "prev-month-day" : "month-day";
                        let bonusClass = ( this.props.select === value && i > this.props.firstDayInWeek - 1 )
                            ? " bonus" : "";
                        return (
                            <div className="wrapper-month-day">
                                <div
                                    key = {i}
                                    className={addedClass + bonusClass}
                                    onClick={this.props.selectedDate}
                                >
                                    {value}
                                </div>
                            </div>

                        )
                    })}
                </div>
                <button className="add-task"><i>&#43;</i></button>
            </div>
        )
    }
}