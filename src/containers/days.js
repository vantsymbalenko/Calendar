import React, { Component } from 'react';
import '../css/days.css';
export default class days extends Component{
    constructor(props){
        super(props);
        this.state = {
            year : new Date().getFullYear(),
            month : new Date().getMonth(),
            dayOfTheMonth : new Date().getDate(),
            select : new Date().getDate()
        };
        this.showPrevMonth = this.showPrevMonth.bind(this);
        this.showNextMonth = this.showNextMonth.bind(this);
        this.selectedDate = this.selectedDate.bind(this)
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
    render(){
        // let monthNames = ["January", "February", "March", "April", "May", "June",
        //     "July", "August", "September", "October", "November", "December"
        // ];
        let WeekDays = [ "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        let monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        // let days = new Date( this.state.year, this.state.month, 0).getDate();
        console.log(this.state);
        console.log(this.state.task);
        let numberOfDays = new Date(this.state.year, this.state.month+1, 0).getDate();
        let firstDayInWeek = new Date(this.state.year, this.state.month, 1).getDay();
        let numberOfDaysPrevMonth = new Date(this.state.year, this.state.month, 0).getDate();
        let daysBefore = numberOfDaysPrevMonth - firstDayInWeek + 1;
        console.log(daysBefore);
        let arr = [];
        for(let i=daysBefore; i<=numberOfDaysPrevMonth; i++){
            arr.push(i);
        }
        for(let i=1; i<=numberOfDays;i++){
            arr.push(i);
        }
     return(
         <div>
             <div className="container">
                 <div className="calendar">
                     <div className="header">
                         <div className="active-month">
                             <p className="left-arrow" onClick = {this.showPrevMonth}>&#x2039;</p>
                             <div className="calendar-month">
                                 <p>{this.state.year}</p>
                                 <p>{monthNames[this.state.month]}</p>
                             </div>
                             <p className="right-arrow" onClick = {this.showNextMonth}>&#x203A;</p>
                         </div>
                     </div>
                     <div className="week-days-wrapper">
                         {WeekDays.map((value, i ) => {
                             return(
                                <div key = {i} className="week-day">{value}</div>
                             );
                         })}
                     </div>
                     <div className="month-days">
                         {arr.map((value, i) => {
                             return (
                                 <div className="wrapper-month-day">
                                     <div
                                         key = {i}
                                         className={((i<6 && value>23) ? "prev-month-day" : "month-day") + (this.state.select === value && i>firstDayInWeek-1 ? " bonus" : "") }
                                         onClick={this.selectedDate}
                                     >
                                         {value}
                                     </div>
                                 </div>

                             )
                         })}
                     </div>
                     <button className="add-task"><i>&#43;</i></button>
                 </div>
                 <div className="today-tasks">
                     <div className="today-tasks-layer"></div>
                     <div className="date">
                         <div className="now-day">02</div>
                         <div className="wrapper">
                             <div className="now-month">June</div>
                             <div className="now-week-day">Monday</div>
                         </div>
                     </div>
                     <div className="tasks">
                         <div className="task">
                             <div className="mark"></div>
                             <div className="task-wrapper">
                                 <div className="time">17:00</div>
                                 <div className="task-message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aliquid debitis dolores, eligendi esse exercitationem hic impedit ipsam nam numquam perferendis quam, quas sapiente. Dolore maxime nemo porro quasi sapiente!</div>
                             </div>
                         </div>
                         {/*<div className="task">*/}
                             {/*<div className="mark"></div>*/}
                             {/*<div className="task-wrapper">*/}
                                 {/*<div className="time">17:00</div>*/}
                                 {/*<div className="task-message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aliquid debitis dolores, eligendi esse exercitationem hic impedit ipsam nam numquam perferendis quam, quas sapiente. Dolore maxime nemo porro quasi sapiente!</div>*/}
                             {/*</div>*/}
                         {/*</div>*/}
                         {/*<div className="task">*/}
                             {/*<div className="mark"></div>*/}
                             {/*<div className="task-wrapper">*/}
                                 {/*<div className="time">17:00</div>*/}
                                 {/*<div className="task-message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aliquid debitis dolores, eligendi esse exercitationem hic impedit ipsam nam numquam perferendis quam, quas sapiente. Dolore maxime nemo porro quasi sapiente!</div>*/}
                             {/*</div>*/}
                         {/*</div>*/}
                         <div className="task">
                             <div className="mark"></div>
                             <div className="task-wrapper">
                                 <div className="time">17:00</div>
                                 <div className="task-message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aliquid debitis dolores, eligendi esse exercitationem hic impedit ipsam nam numquam perferendis quam, quas sapiente. Dolore maxime nemo porro quasi sapiente!</div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
        );
    }
}
