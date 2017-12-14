import { combineReducers } from 'redux';
import year from './year';
import month from './month';
import days from './days';
import edit from './edit';
import errors from './errors';
import add from './add';

export default combineReducers({
    year,
    month,
    days,
    edit,
    errors,
    add
});