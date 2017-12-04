import React, { Component } from 'react';
import '../../css/Task/task.css';
import Task from './Task';
import EmptyTasksBoard from './EmptyTasksBoard';

export default class Tasks extends Component{
    render(){
        console.log(this.props.delete);

        return(
            <div className="tasks">
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
                {this.props.tasks && this.props.tasks.length !==0  ? this.props.tasks.map((value, i) => {
                    return(
                        <Task elem = {value} key = {i} index = {i} remove ={ this.props.remove} />
                    )
                }) : <EmptyTasksBoard/>}
            </div>
        );
    }
}