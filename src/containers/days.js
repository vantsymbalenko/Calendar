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
        let monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        let days = new Date( this.state.year, this.state.month, 0).getDate();
        console.log(this.state);
        console.log(this.state.task);
     return(
         <div>
             <button onClick={this.showNextMonth}>next month</button>
             <button onClick={this.showPreviousMonth}>previous month </button>
             <p>{monthNames[this.state.month - 1]}</p>
             <br/>
             {
                 [...Array(days)].map((x,i) => {
                     return(
                             <div
                                 className={'day' +( (this.state.year + "" + this.state.month + "" + (i+1)) === (this.state.nowYear + "" + (this.state.nowMonth+1) + "" + (this.state.nowDay-1)) ? ' nowDay' : '' ) }
                                 key = {this.state.year + ' ' + this.state.month + ' ' + i}
                                 onClick = {this.addTask}
                             >
                                 {i+1}
                                 <p>{this.state.task[(i+1) + "" + this.state.year + this.state.month]}</p>
                             </div>
                     );
                 })
             }
             <br/>
             <textarea name="name" id="" cols="30" rows="10"
                       defaultValue=" "
                ref = {(input) => {
                    this.taskMessage = input;
                }}
             ></textarea>
             <button onClick = { this.addToList}>Add</button>
             </div>
        );
    }
}
