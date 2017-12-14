export default function errors(state = { errors : '' } ,  action ) {
    switch (action.type){
        case 'SET_ERRORS' :
            return {
                ...state,
                errors : action.errors

            };
        default :
            return state;
    }
}