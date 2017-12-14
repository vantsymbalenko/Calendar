import React, { Component } from 'react';
import '../../css/Calendar/month-day.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import setDays from '../../actions/setDays';
import MonthDays from '../../components/Calendar/MonthDays';

class monthDays extends Component{
    constructor(props){
        super(props);
        this.wrapperSelectedDate = this.wrapperSelectedDate.bind(this);
    }
    wrapperSelectedDate(e){
        if(e.target.className !== "prev-month-day"){
            this.props.selectedDate(+e.target.innerText);
        }
    }
    render(){
        let numberOfDays = new Date(this.props.year, this.props.month+1, 0).getDate();
        let firstDayInWeek = new Date(this.props.year, this.props.month, 1).getDay();
        let numberOfDaysPrevMonth = new Date(this.props.year, this.props.month, 0).getDate();
        let daysBefore = numberOfDaysPrevMonth - firstDayInWeek + 1;
        let days = [];
        for(let i=daysBefore; i<=numberOfDaysPrevMonth; i++){
            days.push(i);
        }
        for(let i=1; i<=numberOfDays;i++){
            days.push(i);
        }
        return(
            <div className="month-days">
                {days.map((value, i) => {
                    let addedClass = ( i<6 && value > 23 ) ? "prev-month-day" : "month-day";
                    let bonusClass = ( this.props.select === value && i > firstDayInWeek - 1 ) ? " bonus" : "";
                    let todayClass = (  (this.props.dayOfTheMonth === value )
                        && (this.props.month === this.props.todayMonth)
                        && ((+value-i) === -(firstDayInWeek-1))  )
                        ? " active" : "";
                    return (
                        <MonthDays
                            value = { value }
                            key = { i }
                            addedClass = { addedClass }
                            bonusClass = { bonusClass }
                            todayClass = { todayClass }
                            wrapperSelectedDate = { this.wrapperSelectedDate }
                        />
                    )
                })}
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        select : state.days.select,
        todayMonth : state.month.todayMonth,
        month : state.month.month,
        dayOfTheMonth : state.days.dayOfTheMonth,
        year: state.year.year,
    }
}
function mapStateToDispatch(dispatch){
    return{
        selectedDate : bindActionCreators(setDays, dispatch)
    }
}
export default connect(mapStateToProps, mapStateToDispatch)(monthDays);