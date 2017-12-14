export default function Month(state = { month : new Date().getMonth(), todayMonth : new Date().getMonth() } ,  action ) {
    switch (action.type){
        case 'SET_MONTH' :
            return {
                ...state,
                month : action.month
            };
        default :
            return state;
    }
}