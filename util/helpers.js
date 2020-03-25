export const setStatusColor = (status) => {
    switch (status){
        case 'Not started': 
            return '#960606';

        case 'Reading now': 
            return '#fd6434';

        case 'Finished': 
            return '#00964d'

        default :
            return 'black';
    }
}

export const date_diff_indays = function(date1, date2) {
    const dt1 = new Date(date1);
    const dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
 }
   

export const computePercent = (total, value) => value / total
    