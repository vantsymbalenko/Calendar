import React, { Component } from 'react';
// import Calendar from "../components/Calendar";
// import Tasks from '../components/Tasks';
import HeaderCalendar from '../components/Calendar/HeaderCalendar';
import MonthDays from '../components/Calendar/MonthDays';
import WeekDays from '../components/Calendar/WeekDays';
import SelectedDate from '../components/Task/SelectedDate';
import Tasks from '../components/Task/Tasks';
import AddTask from '../components/Task/AddTask';

import '../css/days.css';

export default class days extends Component{
    constructor(props){
        super(props);
        this.state = {
            year : new Date().getFullYear(),
            month : new Date().getMonth(),
            todayMonth : new Date().getMonth(),
            dayOfTheMonth : new Date().getDate(),
            select : new Date().getDate(),
            add : false,
            errors : '',
            tasks : {
                "20171023" : [
                    {
                        timeFrom : '17:00',
                        timeTo : '18:00',
                        message : 'message for first task'
                    },
                    {
                        timeFrom : '18:00',
                        timeTo : '19:00',
                        message : 'message for second task'
                    }
                ],
                "2017113" : [
                    {
                        timeFrom : '17:00',
                        timeTo : '18:00',
                        message : 'message for first task'
                    }
                ]
            }
        };
        this.showPrevMonth = this.showPrevMonth.bind(this);
        this.showNextMonth = this.showNextMonth.bind(this);
        this.selectedDate = this.selectedDate.bind(this);
        this.addTask = this.addTask.bind(this);
        this.add = this.add.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    showPrevMonth(){
        if(this.state.month === 0){
            this.setState({
                year : this.state.year - 1,
                month: 11
            }) ;
        }else{
            this.setState({
                month : this.state.month -1
            });
        }

    }
    showNextMonth(){
        if(this.state.month === 11){
            this.setState({
                year : this.state.year + 1,
                month: 0
            }) ;
        }else{
            this.setState({
                month : this.state.month + 1
            });
        }
    }
    selectedDate(e){
        if(e.target.className !== "prev-month-day"){
            this.setState({
                select: +e.target.innerText
            });
        }
    }
    addTask(e){
        e.preventDefault();
        this.setState({
            add : true
        });

    }
    add(timeFrom, timeTo, message){
        let key = this.state.year + '' + this.state.month + '' + this.state.select;
        if(this.state.tasks[key]){
            let timeFromHours = +timeFrom.split(":")[0],
                timeFromMinute = +timeFrom.split(":")[1],
                timeToHours = +timeTo.split(":")[0],
                timeToMinute = +timeTo.split(":")[1];
            let timeFirstStart = new Date(0,0,0, timeFromHours, timeFromMinute);
            let timeFirstEnd = new Date(0,0,0, timeToHours, timeToMinute);
            // console.log(timeFromHours);
            // console.log(timeFromMinute);
            // console.log(this.state.tasks[this.state.year + '' + this.state.month + '' + this.state.select]);
            this.setState({
                errors : ''
            });
            if(timeFirstEnd <= timeFirstStart){
                this.setState({
                    errors : 'Time To must be bigger than Time From'
                });
            }else{
                for(let i=0; i < this.state.tasks[key].length; i++){
                    let element = this.state.tasks[key][i];
                    let timeFromHours = +element.timeFrom.split(":")[0],
                        timeFromMinute = +element.timeFrom.split(":")[1],
                        timeToHours = +element.timeTo.split(":")[0],
                        timeToMinute = +element.timeTo.split(":")[1];
                    let timeSecondStart = new Date(0,0,0, timeFromHours, timeFromMinute);
                    let timeSecondEnd = new Date(0,0,0, timeToHours, timeToMinute);
                    if( (timeSecondStart>timeFirstStart && timeSecondStart<timeFirstEnd) ||
                        (timeSecondEnd>timeFirstStart && timeSecondEnd<timeFirstEnd) ||
                        (timeFirstStart > timeSecondStart && timeFirstStart < timeSecondEnd) ){
                        console.log("alert");
                        this.setState({
                            errors : 'You already have task in this time'
                        });
                        break;
                    }
                }
                if(this.state.errors === ''){
                    let tasks = this.state.tasks;
                    tasks[key].push({
                        timeFrom : timeFrom,
                        timeTo : timeTo,
                        message : message
                    });
                    this.setState({
                        tasks : tasks,
                        add : false
                    });
                }
            }

        }else{
            let tasks = this.state.tasks;
            tasks[key] = [{
                timeFrom : timeFrom,
                timeTo : timeTo,
                message : message
            }];
            this.setState({
                tasks :tasks,
                add : false
            });
        }


    }
    cancel(e){
        e.preventDefault();
        this.setState({
            add : false
        });
    }
    render(){
        // let monthNames = ["January", "February", "March", "April", "May", "June",
        //     "July", "August", "September", "October", "November", "December"
        // ];
        // console.log(this.state);
        let nameWeekDays = [ "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        let fullNameWeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        // let days = new Date( this.state.year, this.state.month, 0).getDate();
        // console.log(this.state);
        // console.log(this.state.task);
        let numberOfDays = new Date(this.state.year, this.state.month+1, 0).getDate();
        let firstDayInWeek = new Date(this.state.year, this.state.month, 1).getDay();
        let numberOfDaysPrevMonth = new Date(this.state.year, this.state.month, 0).getDate();
        let daysBefore = numberOfDaysPrevMonth - firstDayInWeek + 1;
        let activeDayInWeek = new Date( this.state.year, this.state.month, this.state.select).getDay();
        let days = [];
        for(let i=daysBefore; i<=numberOfDaysPrevMonth; i++){
            days.push(i);
        }
        for(let i=1; i<=numberOfDays;i++){
            days.push(i);
        }
        // console.log(this.state.tasks[this.state.year + '' + this.state.month + '' + this.state.select]);
     return(
             <div className="container">
                 <div className="calendar">
                     <HeaderCalendar
                         showPrevMonth = { this.showPrevMonth }
                         showNextMonth = { this.showNextMonth }
                         monthNames = { monthNames }
                         month = { this.state.month }
                         year = { this.state.year }
                     />
                     <WeekDays weekDays = { nameWeekDays } />
                     <MonthDays
                         days = { days }
                         select = { this.state.select }
                         firstDayInWeek = { firstDayInWeek }
                         selectedDate = { this.selectedDate }
                         dayOfTheMonth= { this.state.dayOfTheMonth }
                         todayMonth = { this.state.todayMonth }
                         month = { this.state.month }
                     />
                     <button className="add-task" onClick={ this.addTask }><i>&#43;</i></button>
                 </div>
                 {/*<Calendar*/}
                     {/*showPrevMonth = { this.showPrevMonth }*/}
                     {/*showNextMonth = { this.showNextMonth }*/}
                     {/*year = { this.state.year }*/}
                     {/*monthNames = { monthNames }*/}
                     {/*month = { this.state.month }*/}
                     {/*weekDays = { WeekDays }*/}
                     {/*days = { days }*/}
                     {/*select = { this.state.select }*/}
                     {/*firstDayInWeek = { firstDayInWeek }*/}
                     {/*selectedDate = { this.selectedDate }*/}
                 {/*/>*/}
                 <div className="today-tasks">
                     <div className="today-tasks-layer"></div>
                     <SelectedDate
                         select = { this.state.select }
                         monthNames = { monthNames }
                         selectMonth = { this.state.month }
                         fullNameWeekDays = { fullNameWeekDays }
                         activeDayInWeek = { activeDayInWeek }
                     />
                     {this.state.add ?
                           <AddTask
                               add = { this.add }
                               cancel = {this.cancel }
                               errors = {this.state.errors}
                           />
                         : <Tasks tasks={this.state.tasks[this.state.year + '' + this.state.month + '' + this.state.select]}/>
                     }
                 </div>
                {/*<Tasks/>*/}
             </div>
        );
    }
}
