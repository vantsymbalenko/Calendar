import React, { Component } from 'react';
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
            editedMessage : '',
            editedTimeFrom : '',
            editedTimeTo : '',
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
                "20171110" : [
                    {
                        timeFrom : '17:30',
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
        this.remove = this.remove.bind(this);
        this.edit = this.edit.bind(this);
    }

    edit(index){
        let tasks = this.state.tasks;
        let key = this.state.year + '' + this.state.month + '' + this.state.select;
        let editedElement = tasks[key].splice(index,1);
        console.log(editedElement);
        this.setState({
            editedMessage : editedElement[0].message,
            editedTimeFrom : editedElement[0].timeFrom,
            editedTimeTo : editedElement[0].timeTo,
            tasks : tasks,
            add : true
        });
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
        let timeFromHours = +timeFrom.split(":")[0],
            timeFromMinute = +timeFrom.split(":")[1],
            timeToHours = +timeTo.split(":")[0],
            timeToMinute = +timeTo.split(":")[1];
        let timeFirstStart = new Date(0,0,0, timeFromHours, timeFromMinute);
        let timeFirstEnd = new Date(0,0,0, timeToHours, timeToMinute);
        let counter = 0;
        if(timeFrom ==='' || timeTo ===''){
            this.setState({
                errors : 'Please fill time for task'
            });
            counter++;
        }
        if(this.state.tasks[key] && counter === 0){
            if(timeFirstEnd <= timeFirstStart){
                this.setState({
                    errors : 'Time To must be bigger than Time From'
                });
                console.log(this.state.errors);
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
                        counter++;
                        this.setState({
                            errors : 'You already have task in this time'
                        });
                        console.log(counter);
                    }
                }
                if(counter === 0  ){
                    console.log('errors ' +((this.state.errors ==='')? 'empty':this.state.errors) );
                    let tasks = this.state.tasks;
                    tasks[key].push({
                        timeFrom : timeFrom,
                        timeTo : timeTo,
                        message : message
                    });
                    this.setState({
                        tasks : tasks,
                        editedMessage : '',
                        editedTimeFrom : '',
                        editedTimeTo : '',
                        add : false,
                        errors : ''
                    });
                }
            }

        }else if(timeFirstEnd <= timeFirstStart) {
            this.setState({
                errors : 'Time From must be bigger than Time To'
            });
        }else if(counter === 0) {
            let tasks = this.state.tasks;
            tasks[key] = [{
                timeFrom : timeFrom,
                timeTo : timeTo,
                message : message
            }];
            this.setState({
                tasks :tasks,
                add : false,
                errors : ''
            });
        }
    }

    cancel(e){
        e.preventDefault();
        if(this.state.editedTimeFrom){
            let key = this.state.year + '' + this.state.month + '' + this.state.select;
            let tasks = this.state.tasks;
            tasks[key].push({
                timeFrom : this.state.editedTimeFrom,
                timeTo : this.state.editedTimeTo,
                message : this.state.editedMessage
            });
            this.setState({
                add : false,
                tasks : tasks,
                editedTimeFrom : '',
                editedTimeTo : '',
                editedMessage : '',
                errors : ''
            });
        }else{
            this.setState({
                add : false,
                errors : ''
            });
        }
    }

    remove(index){
        let key = this.state.year + '' + this.state.month + '' + this.state.select;
        let tasks = this.state.tasks;
        tasks[key].splice(index,1);
        console.log(index);
        console.log(tasks);
        this.setState({
            tasks : tasks
        });
    }

    render(){
        let fullNameWeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
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
                     <WeekDays weekDays = { fullNameWeekDays } />
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
                 <div className="today-tasks">
                     <div className="today-tasks-layer"/>
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
                               message = { this.state.editedMessage}
                               timeFrom = { this.state.editedTimeFrom }
                               timeTo = {this.state.editedTimeTo}
                           />
                         : <Tasks tasks={this.state.tasks[this.state.year + '' + this.state.month + '' + this.state.select]}
                                  remove = {this.remove}
                                  edit = { this.edit }
                         />
                     }
                 </div>
             </div>
        );
    }
}
