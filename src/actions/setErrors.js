export default function setYear(errors = ''){
    return{
        type : 'SET_ERRORS',
        errors : errors,
    }
}