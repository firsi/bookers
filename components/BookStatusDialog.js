import SimpleDialog from './SimpleDialog';
import BookStatus from './BookStatus';
import { setStatusColor } from '../util/helpers';
import { connect } from 'react-redux';
import { updateBookStatus } from '../redux/actions/saveBookAction'

const BookStatusDialog = ({book, updateBookStatus}) => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(book.bookInfo.status);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
    updateBookStatus(book.id, value);
  };

  return (
    <div>
      <BookStatus                       
        text={selectedValue} 
        color={setStatusColor(selectedValue)}
        fontSize={'0.8em'}
        circleHeight={'10px'}
        circleWidth={'10px'}
        disabled={false}
        onClick={handleClickOpen}
          />
    
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}

const mapActionToProps = {
  updateBookStatus,
}

export default connect(null, mapActionToProps)(BookStatusDialog);
