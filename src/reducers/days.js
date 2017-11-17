export default function days(state = {  } ,  action ) {
    switch (action.type){
        case 'SET_DAYS' :
            return {
                ...state,
                days : action.days
            };
        default :
            return{
                type: 'SET_ERROR'
            };
    }
}