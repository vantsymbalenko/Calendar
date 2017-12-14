export default function add(state = { add: false} , action) {
    switch (action.type){
        case 'SET_ADD' :
            return {
                ...state,
               add : action.add
            };
        default :
            return state;
    }
}