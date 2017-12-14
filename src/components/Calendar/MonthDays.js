import React, { Component } from 'react';
import '../../css/Calendar/month-day.css';

 export default class MonthDays extends Component{
    render(){
        return (
            <div className="wrapper-month-day" >
                <div
                    className={this.props.addedClass + this.props.bonusClass + this.props.todayClass }
                    onClick={this.props.wrapperSelectedDate}
                >
                    {this.props.value}
                </div>
            </div>
        );
    }
}
