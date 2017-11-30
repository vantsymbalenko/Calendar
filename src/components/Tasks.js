import React, { Component } from 'react';
import '../css/tasks.css'

export default class Tasks extends Component{
    render(){
        return(
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
        );
    }
}