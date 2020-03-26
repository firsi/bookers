import { TextField, Button, makeStyles } from "@material-ui/core";
import  *  as Yup from 'yup';
import { Formik } from 'formik';
import { theme } from "../theme/theme";
import { auth } from "../util/base";
import  Router  from "next/router";
import firebaseErrorsHandler from "../util/firebaseErrors";

const useStyles = makeStyles(mtheme => ({
    root: {
        marginBottom: mtheme.spacing(3),
        "&>div": {
            backgroundColor: '#fff',
        },
        "&>div::before": {
            borderBottom: '0px',
        }
    },
    containedPrimary: {
        backgroundColor: theme.color.primary_light
    }
}))

export const Login = () => {
    const classes = useStyles();
    
    return(
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        password: Yup.string()
          .min(8, 'Must be 8 characters or more')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting, setFieldError }) => {    
          setSubmitting(false);
          auth.signInWithEmailAndPassword(values.email, values.password)
            .then(() => {
                console.log('User signed in successfully');
                Router.push('/MyStats')
            })
            .catch(error => {
                console.log(error);
                const serverErrors = firebaseErrorsHandler(error);
                setFieldError(serverErrors.name, serverErrors.message);
            })
      }}
        >
        { formik => (
            <form onSubmit={formik.handleSubmit}>
                <TextField 
                    className={classes.root} 
                    label="Email" 
                    type="email" 
                    {...formik.getFieldProps('email')}
                    variant='filled' 
                    fullWidth
                    error={formik.touched.email && formik.errors.email}
                    helperText={formik.errors.email}
                    />
                <TextField 
                    className={classes.root}  
                    label="Password" 
                    type="password" 
                    {...formik.getFieldProps('password')}
                    variant='filled' 
                    fullWidth
                    error={formik.touched.password && formik.errors.password}
                    helperText={formik.errors.password}
                    />
                <Button 
                    className={classes.containedPrimary} 
                    type="submit"
                    variant="contained" 
                    color="primary" 
                    fullWidth>
                    Login
                </Button>
            </form>
        )
            
        }
        
        </Formik>
    )
}