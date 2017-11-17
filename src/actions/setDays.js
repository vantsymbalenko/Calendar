export default function ( year = new Date ().getFullYear(), month = new Date().getMonth()){
    return{
        type : 'SET_DAYS',
        days : new Date(year, month, 0).getDate()
    }
}