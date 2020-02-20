import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import  Button  from "@material-ui/core/Button";
import { theme } from '../theme/theme';


const useStyles = makeStyles(material_theme => ({
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    backgroundColor: material_theme.palette.background.paper,
    borderRadius: 5,
    boxShadow: material_theme.shadows[5],
    padding: material_theme.spacing(2, 4, 3),
    outline: 0,
  },
  containedPrimary: {
    display: 'block',
    backgroundColor: theme.color.primary,
    margin: 'auto',
    minWidth: '280px',
}, 
}));

export default function BaseModal({children, buttonText, isButtonDisabled}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
       <Button 
            className={classes.containedPrimary} 
            onClick={handleOpen}
            disabled={isButtonDisabled}
            variant="contained" 
            color="primary">
            {buttonText}
        </Button>
      <Modal
        aria-labelledby="Add a book"
        open={open}
        onClose={handleClose}
      >
        <div  className={classes.paper}>
          {children}
        </div>
      </Modal>
    </div>
  );
}
