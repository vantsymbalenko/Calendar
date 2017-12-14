export default function edit(state = { editedMessage : '',editedTimeFrom :'', editedTimeTo: '' } ,  action ) {
    switch (action.type){
        case 'SET_EDIT' :
            return {
                ...state,
                editedMessage : action.editedMessage,
                editedTimeFrom : action.editedTimeFrom,
                editedTimeTo : action.editedTimeTo

            };
        default :
            return state;
    }
}