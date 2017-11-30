import React, { Component } from 'react';
import '../../css/Task/addTask.css';

export default class AddTask extends Component{
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
                           <textarea name="task" id=""></textarea>
                       </label>
                       <input type="submit" value="Cancel" className="event-button"/>
                       <input type="submit" value="Add" className="event-button"/>
                   </form>
               </div>
        )
    }
}