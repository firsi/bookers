import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel';
import { theme } from '../theme/theme';
import { Register } from './Register';
import { Login } from './Login';

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles(mtheme => ({
    container: {
      flexGrow: 1,
    },
    root: {
        boxShadow: 'none',
        color: 'inherit',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
    },
    colorDefault: {
        backgroundColor: '#f3f3f3'
    },
    scroller: {
        '&>div>span': {
            backgroundColor: theme.color.primary_light,
            
        }
    },
    panel: {
      height: '450px',
      overflowY: 'auto',
    }
    
  }));
  
  export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.container}>
        <AppBar position="static" className={`${classes.colorDefault} ${classes.root} ${classes.colorSecondary}`}>
          <Tabs value={value} onChange={handleChange} className={classes.scroller} aria-label="Registration tabs">
            <Tab label="Register" {...a11yProps(0)} />
            <Tab label="Login" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel className={classes.panel} value={value} index={0}>
          <Register />
        </TabPanel>
        <TabPanel className={classes.panel} value={value} index={1}>
          <Login />
        </TabPanel>
      </div>
    );
  }
  