export default function days(state = {   dayOfTheMonth : new Date().getDate(),
    select : new Date().getDate()} ,  action ) {
    switch (action.type){
        case 'SET_SELECT_DAY' :
            return {
                ...state,
                select : action.select
            };
        default :
            return state;
    }
}