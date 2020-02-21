import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles({
    root: {
        justifyContent: 'center',
    }
})
const LoaderSkeleton = () => {
  const classes = useStyles();
  const steps = [1,2,3];

  return (
    <Grid container className={classes.root} >
        {
            steps.map((step) => 
                <Box key={step} width={300} marginRight={0.5} my={5}>
                    <Skeleton variant="rect" width={300} height={130} />
                </Box>
            )
        }
    </Grid>
  );
}

LoaderSkeleton.propTypes = {
  loading: PropTypes.bool,
};

export default LoaderSkeleton;


