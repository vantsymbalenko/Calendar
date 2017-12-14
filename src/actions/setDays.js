export default function ( select = new Date().getDate()){
    return{
        type : 'SET_SELECT_DAY',
        select : select
    }
}