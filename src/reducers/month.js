export default function Month(state = { month : new Date().getMonth() } ,  action ) {
    switch (action.type){
        case 'SET_YEAR' :
            return {
                ...state,
                year : action.year
            };
        default :
            return{
               state
            };
    }
}