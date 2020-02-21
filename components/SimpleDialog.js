import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import BookStatus from './BookStatus';
import { setStatusColor } from '../util/helpers';

const status = ['Not started', 'Reading now', 'Finished'];

const SimpleDialog = (props) => {
    const { onClose, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = value => {
      onClose(value);
    };
  
    return (
      <Dialog onClose={handleClose} aria-labelledby="Book Reading Status" open={open}>
        <DialogTitle id="simple-dialog-title">Set the book status</DialogTitle>
        <List>
            <ListItem button onClick={() => handleListItemClick(status[0])} >
              <BookStatus 
                  text={status[0]} 
                  color={setStatusColor(status[0])} 
                  fontSize={'1em'}
                  />
            </ListItem>
            <ListItem button onClick={() => handleListItemClick(status[1])} >
            <BookStatus 
                  text={status[1]} 
                  color={setStatusColor(status[1])} 
                  fontSize={'1em'}
                  />
            </ListItem>
            <ListItem button onClick={() => handleListItemClick(status[2])} >
            <BookStatus 
                  text={status[2]} 
                  color={setStatusColor(status[2])} 
                  fontSize={'1em'}
                  />
            </ListItem>
  
        </List>
      </Dialog>
    );
  }
  
  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };
  

  export default SimpleDialog;