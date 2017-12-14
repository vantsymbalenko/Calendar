import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import setMonth from '../../actions/setMonth';
import setYear from '../../actions/setYear';

import HeaderCalendar from '../../components/Calendar/HeaderCalendar';

class headerCalendar extends Component{
    constructor(props){
        super(props);
        this.wrapperShowPrevMonth = this.wrapperShowPrevMonth.bind(this);
        this.wrapperShowNextMonth = this.wrapperShowNextMonth.bind(this);

    }
    wrapperShowPrevMonth(){
        let month = this.props.month - 1;
        if(month === -1 ){
            month = 11;
            this.props.setYear(this.props.year - 1)
        }
        this.props.showPrevMonth(month);
    }
    wrapperShowNextMonth(){
        let month = this.props.month + 1;
        if(month === 12) {
            month = 0;
            this.props.setYear(this.props.year + 1)
        }
        this.props.showPrevMonth(month);
    }
    render(){
        let monthName = this.props.monthNames[this.props.month];
        return(
            <HeaderCalendar
                wrapperShowPrevMonth = { this.wrapperShowPrevMonth }
                wrapperShowNextMonth = { this.wrapperShowNextMonth }
                year = { this.props.year }
                monthName = { monthName }
            />
        );
    }
}

function mapStateToProps(state){
    return{
        year     : state.year.year,
        month    : state.month.month,

    }
}
function mapDispatchToProps(dispatch) {
    return{
        showPrevMonth: bindActionCreators(setMonth, dispatch),
        showNextMonth: bindActionCreators(setMonth,dispatch),
        setYear : bindActionCreators(setYear, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(headerCalendar);