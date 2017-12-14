export default function Year(state = { year : new Date().getFullYear() } ,  action ) {
    switch (action.type) {
        case 'SET_YEAR' :
            return {
                ...state,
                year: action.year
            };
        default :
            return state;
    }
}