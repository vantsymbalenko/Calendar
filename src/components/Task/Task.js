import React, { Component } from 'react';
import editImageSrc from  '../../image/edit_icon.png';

export default class Task extends Component{
    constructor(props){
        super(props);
        this.wrapperDelete = this.wrapperDelete.bind(this);
        this.wrapperEdit = this.wrapperEdit.bind(this);
    }
    wrapperEdit(e){
        e.preventDefault();
        this.props.edit(this.props.index);
    }
    wrapperDelete(e){
        e.preventDefault();
        this.props.remove(this.props.index);
    }
    render(){
        return(
            <div className="task">
                <div className="mark"/>
                <div className="task-wrapper">
                    <div className="time">{this.props.elem.timeFrom + '-' +this.props.elem.timeTo }</div>

                    <div className="edit" onClick = { this.wrapperEdit }>
                        <img src={ editImageSrc }  width = '24' height = '24' alt=""/>
                    </div>

                    <button className="delete" onClick = { this.wrapperDelete }>
                        <div className="cross">+</div>
                    </button>

                        <div className="task-message">{ this.props.elem.message}</div>
                </div>

            </div>
        );
    }
}