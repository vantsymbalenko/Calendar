import React, { Component } from 'react';
import { connect } from 'react-redux';

import SelectedDate from '../../components/Task/SelectedDate';

class selectedDate extends Component{
    render(){
        let activeDayInWeek = new Date( this.props.year, this.props.selectMonth, this.props.select).getDay();
        let month = this.props.monthNames[this.props.selectMonth];
        let dayInWeek = this.props.fullNameWeekDays[activeDayInWeek];
        return(
            <SelectedDate
                month = { month }
                dayInWeek = { dayInWeek }
                class = { this.props.select < 10 ? '0'+this.props.select : this.props.select }
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        select: state.days.select,
        selectMonth : state.month.month,
        year : state.year.year
    }
}
export default connect(mapStateToProps)(selectedDate)