
export default function genDays(state = { }, action ) {
    let date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth(),
        days = new Date(year, month+1, 0).getDate(),
        genState = {
          year : year,
          month : month,
          days : days
        };
        case 'SET_YEAR' :
            return {
                ...state,
                year : action.year
            };
        case 'SET_MONTH' :
            return {
                ...state,
                month : action.month
            };
        case 'SET_DAYS' :
            return {
                ...state,
                days : action.days
            };
        default :
            return{
                genState
            };
    }
}