import React, { Component } from 'react';
import HeaderCalendar from '../components/Calendar/HeaderCalendar';
import WeekDays from '../components/Calendar/WeekDays';
import AllDays from '../components/Calendar/MonthDays';

export default class Calendar extends Component{
    render(){
        return(
            <div className='calendar'>
                <HeaderCalendar />
                <WeekDays />
                <AllDays />
                <Button />
            </div>
        )
    }
}

