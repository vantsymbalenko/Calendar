export default function setYear(year = new Date().getFullYear()){
    return{
        type : 'SET_YEAR',
        year : year
    }
}