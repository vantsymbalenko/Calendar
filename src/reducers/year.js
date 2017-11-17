export default function Year(state = { year : new Date().getFullYear() } ,  action ) {
    switch (action.type){
        case 'SET_MONTH' :
            return {
                ...state,
                month : action.month
            };
        default :
            return{
               state
            };
    }
}