import React, { Component } from 'react';
import '../../css/Task/addTask.css';

export default class AddTask extends Component{
    constructor(props){
        super(props);
        this.wrapperAdd = this.wrapperAdd.bind(this);
        this.wrapperCancel = this.wrapperCancel.bind(this);
    }
    wrapperAdd(e){
        this.props.add(this.timeFrom.value, this.timeTo.value, this.message.value);
    }
    wrapperCancel(e){
        this.props.cancel(this.timeFrom.value, this.timeTo.value, this.message.value);
    }
    render(){
        console.log(this.props.timeFrom);
        console.log(this.props.timeTo);
        console.log(this.props.message);

        return(

               <div className="task-time">
                   <form action="">
                       <label className="wrapper-input-time">
                           <span>From:</span>
                           <input
                               defaultValue = { this.props.timeFrom}
                               type="time"
                               required = {true}
                               ref = {(input) => { this.timeFrom = input;}}/>
                       </label>
                       <label className="wrapper-input-time">
                           <span>To:</span>
                           <input
                               defaultValue = { this.props.timeTo}
                               type="time"
                               required
                               ref = {(input) => { this.timeTo = input;}}/>
                       </label>
                       <label>
                           <span>Task message:</span>
                           <textarea
                               defaultValue={this.props.message}
                               name="task" id=""
                               ref = {(input) => { this.message = input;}}
                           />
                       </label>
                       <input
                           type="button"
                           value="Cancel"
                           className="event-button"
                           onClick = { this.props.cancel }
                       />
                       <input
                           type="button"
                           value={this.props.timeFrom ? "Edit" : "Add"}
                           className="event-button"
                           onClick = { this.wrapperAdd }
                       />
                   </form>
                   {this.props.errors}
               </div>
        )
    }
}