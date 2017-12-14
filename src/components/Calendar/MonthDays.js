import React, { Component } from 'react';
import '../../css/Calendar/month-day.css';

export default class MonthDays extends Component{
    render(){
        console.log(this.props.firstDayInWeek);
        return(
            <div className="month-days">
                {this.props.days.map((value, i) => {
                    let addedClass = ( i<6 && value > 23 ) ? "prev-month-day" : "month-day";
                    let bonusClass = ( this.props.select === value && i > this.props.firstDayInWeek - 1 ) ? " bonus" : "";
                    let todayClass = (  (this.props.dayOfTheMonth === value )
                                        && (this.props.month === this.props.todayMonth)
                                        && ((+value-i) === -(this.props.firstDayInWeek-1))  )
                                        ? " active" : "";
                    return (
                        <div className="wrapper-month-day" key = { i } >
                            <div
                                className={addedClass + bonusClass + todayClass }
                                onClick={this.props.selectedDate}
                            >
                                {value}
                            </div>
                        </div>

                    )
                })}
            </div>
        );
    }
}