import React, { Component } from 'react';
import '../css/days.css';
export default class days extends Component{
    constructor(props){
        super(props);
        this.state = {
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            nowYear: new Date().getFullYear(),
            nowMonth: new Date().getMonth(),
            nowDay: new Date().getDate() + 1,
            visible: false,
            task: {}
        };
        this.showNextMonth = this.showNextMonth.bind(this);
        this.showPreviousMonth = this.showPreviousMonth.bind(this);
        this.addTask = this.addTask.bind(this);
        this.addToList = this.addToList.bind(this);
    }
    addTask(key){
        console.log(key.target.innerText[2]);
        this.key  = key.target.innerText.slice(0,-1)+this.state.year+this.state.month;
        console.log(this.key[2]);
    }
    addToList(e){
        e.preventDefault();
        console.log(this.taskMessage.value);
        let task = this.state.task;
        console.log(this.key[2]);
        task[this.key] = this.taskMessage.value;
        // task[this.key] = this.taskMessage.value;
        console.log(task);
        this.setState({
            task : task
        });
    }
    showNextMonth(e){
        e.preventDefault();
        if( this.state.month === 12 ){
            this.setState({
                year : this.state.year + 1,
                month : 1
            });
        } else {
            this.setState({
                month : this.state.month + 1
            });
        }
    }
    showPreviousMonth(e){
        e.preventDefault();
       if( this.state.month === 1 ){
           this.setState({
               year : this.state.year -1,
               month : 12
           });
       }else{
           this.setState({
               month : this.state.month - 1
           })
       }
    }
    render(){
        // let monthNames = ["January", "February", "March", "April", "May", "June",
        //     "July", "August", "September", "October", "November", "December"
        // ];
        // let days = new Date( this.state.year, this.state.month, 0).getDate();
        console.log(this.state);
        console.log(this.state.task);
     return(
         <div>
             <div className="container">
                 <div className="calendar">
                     <div className="header"></div>
                     <div className="week-days"></div>
                     <div className="add-task"></div>
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
                         <div className="task">
                             <div className="mark"></div>
                             <div className="task-wrapper">
                                 <div className="time">17:00</div>
                                 <div className="task-message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aliquid debitis dolores, eligendi esse exercitationem hic impedit ipsam nam numquam perferendis quam, quas sapiente. Dolore maxime nemo porro quasi sapiente!</div>
                             </div>
                         </div>
                         <div className="task">
                             <div className="mark"></div>
                             <div className="task-wrapper">
                                 <div className="time">17:00</div>
                                 <div className="task-message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aliquid debitis dolores, eligendi esse exercitationem hic impedit ipsam nam numquam perferendis quam, quas sapiente. Dolore maxime nemo porro quasi sapiente!</div>
                             </div>
                         </div>
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
