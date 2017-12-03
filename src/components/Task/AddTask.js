import React, { Component } from 'react';
import '../../css/Task/addTask.css';

export default class AddTask extends Component{
    constructor(props){
        super(props);
        this.wrapperAdd = this.wrapperAdd.bind(this);
    }
    wrapperAdd(e){
        e.preventDefault();
        this.props.add(this.timeFrom.value, this.timeTo.value, this.message.value);
    }
    render(){
        return(

               <div className="task-time">
                   <form action="">
                       <label className="wrapper-input-time">
                           <span>From:</span>
                           <input
                               type="time"
                               required
                               ref = {(input) => { this.timeFrom = input;}}/>
                       </label>
                       <label className="wrapper-input-time">
                           <span>To:</span>
                           <input
                               type="time"
                               required
                               ref = {(input) => { this.timeTo = input;}}/>
                       </label>
                       <label>
                           <span>Task message:</span>
                           <textarea
                               name="task" id=""
                               ref = {(input) => { this.message = input;}}
                           ></textarea>
                       </label>
                       <input type="submit" value="Cancel" className="event-button"/>
                       <input
                           type="submit"
                           value="Add"
                           className="event-button"
                           onClick = { this.wrapperAdd }
                       />
                   </form>
                   {this.props.erros}
               </div>
        )
    }
}