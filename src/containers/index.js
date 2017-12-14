import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import setAdd from '../actions/setAdd';
import setErrors from '../actions/setErrors';
import setEdit from '../actions/setEdit';

import HeaderCalendar from '../containers/Calendar/HeaderCalendar';
import MonthDays from '../containers/Calendar/MonthDays';
import WeekDays from '../components/Calendar/WeekDays';
import SelectedDate from '../containers/Task/SelectedDate';
import Tasks from '../components/Task/Tasks';
import AddTask from '../containers/Task/AddTask';

import '../css/days.css';

class Days extends Component{
    constructor(props){
        super(props);
        this.state = {
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
        this.wrapperAddTask = this.wrapperAddTask.bind(this);
        this.add = this.add.bind(this);
        this.cancel = this.cancel.bind(this);
        this.remove = this.remove.bind(this);
        this.edit = this.edit.bind(this);
    }

    wrapperAddTask(e){
        e.preventDefault();
        this.props.addTask(true);
    }

    add(timeFrom, timeTo, message){
        let key = this.props.year + '' + this.props.month + '' + this.props.select;
        let timeFromHours = +timeFrom.split(":")[0],
            timeFromMinute = +timeFrom.split(":")[1],
            timeToHours = +timeTo.split(":")[0],
            timeToMinute = +timeTo.split(":")[1];
        let timeFirstStart = new Date(0,0,0, timeFromHours, timeFromMinute);
        let timeFirstEnd = new Date(0,0,0, timeToHours, timeToMinute);
        let counter = 0;
        if(timeFrom ==='' || timeTo ===''){
            this.props.setErrors( 'Please fill time for task');
            counter++;
        }
        if(this.state.tasks[key] && counter === 0){
            if(timeFirstEnd <= timeFirstStart){
                this.props.setErrors( 'Time To must be bigger than Time From');
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
                        counter++;
                        this.props.setErrors( 'You already have task in this time');
                    }
                }
                if(counter === 0  ){
                    let tasks = this.state.tasks;
                    tasks[key].push({
                        timeFrom : timeFrom,
                        timeTo : timeTo,
                        message : message
                    });
                    this.setState({
                        tasks : tasks
                    });
                    this.props.edit();
                    this.props.setErrors();
                    this.props.addTask();
                }
            }

        }else if(timeFirstEnd <= timeFirstStart) {
            this.props.setErrors('Time From must be bigger than Time To');
        }else if(counter === 0) {
            let tasks = this.state.tasks;
            tasks[key] = [{
                timeFrom : timeFrom,
                timeTo : timeTo,
                message : message
            }];
            this.setState({
                tasks :tasks
            });
            this.props.setErrors();
            this.props.addTask(false);
        }
    }
    edit(index){
        let tasks = this.state.tasks;
        let key = this.props.year + '' + this.props.month + '' + this.props.select;
        let editedElement = tasks[key].splice(index,1);
        this.props.edit(
            editedElement[0].message,
            editedElement[0].timeFrom,
            editedElement[0].timeTo
        );
        this.setState({
            tasks : tasks,
        });
        this.props.addTask(true);
    }


    cancel(e){
        e.preventDefault();
        if(this.props.editedTimeFrom){
            let key = this.props.year + '' + this.props.month + '' + this.props.select;
            let tasks = this.state.tasks;
            tasks[key].push({
                timeFrom : this.props.editedTimeFrom,
                timeTo : this.props.editedTimeTo,
                message : this.props.editedMessage
            });
            this.setState({
                tasks : tasks
            });
            this.props.addTask(false);
            this.props.edit();
            this.props.setErrors();
        }else{
            this.props.setErrors();
            this.props.addTask(false);
        }

    }
    remove(index){
        let key = this.props.year + '' + this.props.month + '' + this.props.select;
        let tasks = this.state.tasks;
        tasks[key].splice(index,1);
        this.setState({
            tasks : tasks
        });
    }

    render(){

        let nameWeekDays = [ "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        let fullNameWeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
     return(
             <div className="container">
                 <div className="calendar">
                     <HeaderCalendar
                         monthNames = { monthNames }
                     />
                     <WeekDays weekDays = { nameWeekDays } />
                     <MonthDays/>
                     <button className="add-task" onClick={ this.wrapperAddTask }><i>&#43;</i></button>
                 </div>
                 <div className="today-tasks">
                     <div className="today-tasks-layer"/>
                     <SelectedDate
                         monthNames = { monthNames }
                         fullNameWeekDays = { fullNameWeekDays }
                     />
                     {this.props.add ?
                           <AddTask
                               add = { this.add }
                               cancel = {this.cancel }
                           />
                         : <Tasks tasks={this.state.tasks[this.props.year + '' + this.props.month + '' + this.props.select]}
                                  remove = {this.remove}
                                  edit = { this.edit }
                         />
                     }
                 </div>
             </div>
        );
    }
}
function mapStateToProps(state) {
    return{
        year : state.year.year,
        month : state.month.month,
        select : state.days.select,
        add : state.add.add,
        editedMessage : state.edit.editedMessage,
        editedTimeFrom : state.edit.editedTimeFrom,
        editedTimeTo : state.edit.editedTimeTo
    }
}
function mapStateToDispatch(dispatch){
    return{
        addTask : bindActionCreators(setAdd, dispatch),
        setErrors : bindActionCreators(setErrors,dispatch),
        edit : bindActionCreators(setEdit,dispatch)
    }
}
export default connect(mapStateToProps, mapStateToDispatch)(Days);

