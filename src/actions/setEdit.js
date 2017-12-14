export default function setYear(editedMessage = '', editedTimeFrom = '', editedTimeTo = ''){
    return{
        type : 'SET_EDIT',
        editedMessage : editedMessage,
        editedTimeFrom : editedTimeFrom,
        editedTimeTo : editedTimeTo
    }
}