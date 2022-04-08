import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { useText, useTextAlign } from '../../theme/common';
import { useTranslation } from 'react-i18next';

import useStyles from './form-style';
import useClasses from '../../customClasses';
import { Checkbox, TextField } from '@mui/material';


function Contact(props: any) {
  const { t, i18n } = useTranslation();
  const classes = useClasses(useStyles);
  const text = useClasses(useText);
  const align = useTextAlign;

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
    <div className={classes.formWrap}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        key="top right"
        open={openNotif}
        autoHideDuration={4000}
        onClose={handleClose}
        classes={{
          anchorOriginTopRight: classes.notif
        }}
        action={(
          <IconButton onClick={handleClose} color="inherit" size="small">
            <CloseIcon />
          </IconButton>
        )}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Message Sent</span>}
      />
      <h3 className={clsx(text.title, align.textCenter)}>
        {t('common:contact_title2')}
      </h3>
      <p className={clsx(classes.desc, text.subtitle2, align.textCenter)}>
        {t('common:contact_subtitle')}
      </p>
      <Box mt={8} px={{ sm: 6 }}>
        <form
          onSubmit={handleSubmit}
          onError={(errors: any) => console.log(errors)}
        >
          <Grid container spacing={6}>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                className={classes.input}
                label={t('common:form_name')}
                onChange={handleChange('name')}
                name="Name"
                value={values.name}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                className={classes.input}
                label={t('common:form_email')}
                onChange={handleChange('email')}
                name="Email"
                value={values.email}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                className={classes.input}
                label={t('common:form_phone')}
                onChange={handleChange('phone')}
                name="Phone"
                value={values.phone}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                className={classes.input}
                label={t('common:form_company')}
                onChange={handleChange('company')}
                name="Company"
                value={values.company}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline
                fullWidth
                rows="6"
                className={classes.input}
                label={t('common:form_message')}
                onChange={handleChange('message')}
                name="Message"
                value={values.message}
              />
            </Grid>
          </Grid>
          <div className={classes.btnArea}>
            <FormControlLabel
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
                <span>
                  {t('common:form_terms')}
                  <br />
                  <a href="#" className={classes.link}>
                    {t('common:form_privacy')}
                  </a>
                </span>
              )}
            />
            <Button variant="contained" type="submit" color="primary" size="large">
              {t('common:form_send')}
            </Button>
          </div>
        </form>
      </Box>
    </div>
  );
}

Contact.propTypes = {
  t: PropTypes.func.isRequired
};

export default Contact;
