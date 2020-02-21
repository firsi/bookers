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