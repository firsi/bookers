import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { theme as mainTheme } from '../theme/theme';
import SearchBar from './SearchBar';
import { useState } from 'react';


const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    borderRadius: '50px',
    backgroundColor: mainTheme.color.primary_light,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: mainTheme.color.secondary_light,
  },
  iconButton: {
    padding: 10,
    color: mainTheme.color.secondary_light
  },
  
}));

const  SimpleSearchBar = ({handleSearch}) => {
    const [value, setValue] = useState("");
    const classes = useStyles();

  return (
    <Paper component="form" onSubmit={(event) => handleSearch(value)} className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="What book would you like to read ?"
        inputProps={{ 'aria-label': 'Search a book' }}     
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <IconButton 
        type="submit" 
        className={classes.iconButton} 
        aria-label="search"
        >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SimpleSearchBar;