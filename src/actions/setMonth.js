export default function setMonth( month = new Date().getMonth()){
    return{
        type : 'SET_MONTH',
        month : month
    }
}