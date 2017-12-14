import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddTask from '../../components/Task/AddTask';

class addTask extends Component{
    render(){
        return(
            <AddTask
                timeFrom = { this.props.timeFrom }
                timeTo = { this.props.timeTo }
                message = { this.props.message }
                errors = { this.props.errors }
                cancel = { this.props.cancel }
                add = { this.props.add }
            />
        )
    }
}
function mapStateToProps(state) {
    return{
        message : state.edit.editedMessage,
        timeFrom : state.edit.editedTimeFrom,
        timeTo : state.edit.editedTimeTo,
        errors : state.errors.errors
    }
}
export default connect(mapStateToProps)(addTask);