import { TextField, Button, makeStyles } from "@material-ui/core";
import * as Yup from 'yup';
import { Formik } from 'formik';
import { theme } from "../theme/theme";
import { auth, db } from "../util/base";
import firebaseErrors from "../util/firebaseErrors";
import Router  from "next/router";

const useStyles = makeStyles(mtheme => ({
    root: {
        marginBottom: mtheme.spacing(3),
        "&>div": {
            backgroundColor: '#fff',
        },
        "&>div::before": {
            borderBottom: '0px',
        },
    },
    containedPrimary: {
        backgroundColor: theme.color.primary_light
    }
}))

export const Register = () => {
    const classes = useStyles();
    
    return(
        <Formik
            initialValues={{username:'', name:'', email:'', password:''}}
            validationSchema={Yup.object({
                username: Yup.string()
                            .min(4, 'Must be 4 characters or more')
                            .required('Required'),
                name: Yup.string()
                        .required('Required'),
                email: Yup.string()
                        .email('Invalid Email')
                        .required('Required'),
                password: Yup.string()
                            .min(8, 'Must be 8 characters or more')
                            .required('Required')
            })}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
                setSubmitting(false);
                auth.createUserWithEmailAndPassword(values.email, values.password)
                    .then(() => {
                        db.collection('user')
                            .add({
                                userId: auth.currentUser.uid,
                                username: values.username,
                                name: values.name
                            })
                            .then(() => {
                                Router.push('/MyStats');
                                console.log('user created succesfully')})
                            .catch(error => {
                                console.log(error);
                            })
                    })
                    .catch(error => {
                                console.log(error)
                                const serverErrors = firebaseErrors(error);
                                setFieldError(serverErrors.name, serverErrors.message);
                    })
            }}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                <TextField 
                    className={classes.root}  
                    label="Username" 
                    {...formik.getFieldProps('username')}
                    variant='filled' 
                    fullWidth
                    error={formik.touched.username && formik.errors.username}
                    helperText={formik.errors.username}
                    />
                <TextField 
                    className={classes.root}  
                    label="Name" 
                    {...formik.getFieldProps('name')}
                    variant='filled' 
                    fullWidth
                    error={formik.touched.name && formik.errors.name}
                    helperText={formik.errors.name}
                    />
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
                    Register
                </Button>
                </form>
            )}
        </Formik>
    )
}