import React from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import BackButton from '../../../components/_common/BackButton';
import useStyles from './styles';

const ForgotPassword = () => {
  const classes = useStyles();

  const submitreset = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      mt={17.5}
      justifyContent="center"
      display="flex"
      flexDirection="column"
    >
      <Box className={classes.ArrowBackIcon}>
        <BackButton color="black" fontsize="24px" />
      </Box>
      <Box justifyContent="center" display="flex">
        <img
          className={classes.img}
          src="/static/img/pwlock.png"
          alt="pwlock"
        />
      </Box>
      <Box mt={3.25} justifyContent="center" display="flex" alignItems="center">
        <Typography className={classes.fpw}>Forgot Password ?</Typography>
      </Box>
      <Box mt={1.5}>
        <Typography className={classes.text}>
          {' '}
          We just need your registered email address to send you password reset.
        </Typography>
      </Box>
      <form onSubmit={submitreset}>
        <Box mt={4} display="flex" justifyContent="center" alignItems="center">
          <input
            placeholder="test@domain.com"
            type="email"
            required
            className={classes.mail}
          />
        </Box>
        <Box mt={4} display="flex" justifyContent="center" alignItems="center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.send}
          >
            <Typography className={classes.send_Typo} variant="body2">
              Send
            </Typography>
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ForgotPassword;
