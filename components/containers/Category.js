import { theme } from '../../theme/theme';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(mtheme => ({
    title: {
        marginBottom: mtheme.spacing(5),
    }
}))
const Category = ({children, title}) => {
    const classes= useStyles();
    return(
        <div>
            <h1 className={classes.title}>{title}</h1>
                {children}
            <style jsx>{`
                color: ${theme.color.primary_dark};
                font-size: ${theme.font.small};
            `}
                
            </style>
        </div>
    )
}

export default Category;