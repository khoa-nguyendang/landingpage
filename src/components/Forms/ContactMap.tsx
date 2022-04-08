import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/LocalPhone';
import LocationIcon from '@mui/icons-material/LocationOn';
import Snackbar from '@mui/material/Snackbar';

import { useText, useTextAlign } from '../../theme/common';
import { useTranslation } from 'react-i18next';
import useStyles from './form-style';

import useClasses from '../../customClasses';
import { Checkbox, TextField } from '@mui/material';


function BubleMark() {
  const classes = useClasses(useStyles);
  return (
    <div className={classes.bubelWrap}>
      <div className={classes.buble}>
        <Typography variant="h6" gutterBottom>
          Head Quarter
        </Typography>
        <Grid container>
          <Grid item sm={6} xs={12}>
            <Typography>
              <PhoneIcon className={classes.icon} />
              +98 765 432 10
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography>
              <EmailIcon className={classes.icon} />
              hello@luxi.com
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <LocationIcon className={classes.icon} />
              Lorem ipsum street Block C - Vestibullum Building
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}


function ContactMap(props: any) {
  const classes = useClasses(useStyles);
  const text = useClasses(useText);
  const align = useTextAlign;
  const { t, full } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });


  const [openNotif, setNotif] = useState(false);

  const [check, setCheck] = useState(false);

  const handleChange = (name: any) => (event: any) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = (event : any) => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    setNotif(true);
  };

  const handleClose = () => {
    setNotif(false);
  };

  return (
    <div className={classes.pageWrap}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        key="top right"
        open={openNotif}
        autoHideDuration={4000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Message Sent</span>}
      />
      <div className={classes.innerWrap}>
        <Container>
          <Grid container alignItems="center">
            <Grid item md={6} xs={12} className={classes.wrapDeco}>
              <Paper className={clsx(classes.formBox, full ? classes.mapForm : '')}>
                <div className={classes.fullFromWrap}>
                  <div className={!isMobile ? classes.form : ''}>
                    <h4 className={clsx(align.textCenter, text.title2)}>
                      {t('common:contact_title2')}
                    </h4>
                    <p className={clsx(align.textCenter, text.subtitle2)}>
                      {t('common:contact_subtitle')}
                    </p>
                    <form
                      onSubmit={handleSubmit}
                      onError={errors => console.log(errors)}
                    >
                      <Box py={3}>
                        <Grid container spacing={6}>
                          <Grid item xs={12}>
                            <TextField
                              className={classes.input}
                              fullWidth
                              label={t('common:form_name')}
                              onChange={handleChange('name')}
                              name="Name"
                              value={values.name}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              className={classes.input}
                              fullWidth
                              label={t('common:form_email')}
                              onChange={handleChange('email')}
                              name="Email"
                              value={values.email}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              className={classes.input}
                              fullWidth
                              label={t('common:form_phone')}
                              onChange={handleChange('phone')}
                              name="Phone"
                              value={values.phone}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              multiline
                              rows="6"
                              fullWidth
                              className={classes.input}
                              label={t('common:form_message')}
                              onChange={handleChange('message')}
                              name="Message"
                              value={values.message}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      <FormControlLabel
                        className={classes.checkArea}
                        control={(
                          <Checkbox
                            validators={['isTruthy']}
                            errorMessages="This field is required"
                            checked={check}
                            value={check}
                            onChange={(e: any) => handleCheck(e)}
                            color="primary"
                            {...props}
                          />
                        )}
                        label={(
                          <span className={text.paragraph}>
                            {t('common:form_terms')}
                            <br />
                            <a href="#">
                              {t('common:form_privacy')}
                            </a>
                          </span>
                        )}
                      />
                      <div className={classes.btnArea}>
                        <Button variant="contained" fullWidth type="submit" color="primary" size="large">
                          {t('common:form_send')}
                          &nbsp;
                          <SendIcon className={classes.rightIcon} />
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper className={clsx(classes.map, full ? classes.full : '')} elevation={0}>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

ContactMap.propTypes = {
  t: PropTypes.func.isRequired,
  full: PropTypes.bool
};

ContactMap.defaultProps = {
  full: false
};

export default ContactMap;
