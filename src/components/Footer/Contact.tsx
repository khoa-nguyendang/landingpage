import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Snackbar from '@mui/material/Snackbar';
import { useTranslation } from 'react-i18next';
import logo from '../../public/images/logo-starter.svg';
import brand from '../../public/text/brand';
import { useText, useTextAlign } from '../../theme/common';
import useStyles from './contact-style';
import useClasses from '../../customClasses';
import { TextField } from '@mui/material';


function Contact(props: any) {
  const classes = useClasses(useStyles);
  const text = useClasses(useText);
  const align = useTextAlign;
  const { t, i18n } = useTranslation();
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [openNotif, setNotif] = useState(false);

  const handleChange = (name: any) => (event: any) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = () => {
    setNotif(true);
  };

  const handleClose = () => {
    setNotif(false);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" component="footer">
        <Grid container spacing={6} direction={isMobile ? 'column-reverse' : 'row'}>
          <Grid item xs={12} md={5}>
            <Box mx={10} mt={5}>
              <div className={classes.logo}>
                <img src={logo} alt="logo" />
                {brand.starter.name}
              </div>
              <Typography>
                {t('common:starter-landing.banner_subtitle')}
              </Typography>
              <div className={classes.socmed}>
                <IconButton aria-label="Delete" className={classes.margin} size="small">
                  <i className="ion-social-facebook" />
                </IconButton>
                <IconButton aria-label="Delete" className={classes.margin} size="small">
                  <i className="ion-social-instagram" />
                </IconButton>
                <IconButton aria-label="Delete" className={classes.margin} size="small">
                  <i className="ion-social-twitter" />
                </IconButton>
                <IconButton aria-label="Delete" className={classes.margin} size="small">
                  <i className="ion-social-linkedin" />
                </IconButton>
              </div>
              <div className={classes.contact}>
                <Typography className={text.paragraph}>
                  {t('common:blog_phone')}
                  <br />
                  +12 345 678 90
                </Typography>
                <Divider className={classes.divider} />
                <Typography className={text.paragraph}>
                  Skype
                  <br />
                  jenadoe.skype
                </Typography>
                <Box mt={8}>
                  <Typography variant="subtitle2" style={{textAlign: 'center'}}>
                    &copy;&nbsp;
                    {brand.starter.footerText}
                  </Typography>
                </Box>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <div className={classes.formWrap}>
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
              <Paper className={classes.formBox}>
                <Grid container spacing={6}>
                  <Grid item lg={5} xs={12}>
                    <h3 className={clsx(classes.title, text.title)}>
                      {t('common:contact_title2')}
                    </h3>
                  </Grid>
                  <Grid item lg={7} xs={12}>
                    <div className={classes.form}>
                      <form
                        onSubmit={handleSubmit}
                        onError={errors => console.log(errors)}
                      >
                        <TextField
                          className={classes.input}
                          label={t('common:form_name')}
                          onChange={handleChange('name')}
                          name="Name"
                          value={values.name}
                        />
                        <TextField
                          className={classes.input}
                          label={t('common:form_email')}
                          onChange={handleChange('email')}
                          name="Email"
                          value={values.email}
                          validators={['required', 'isEmail']}
                          errorMessages={['this field is required', 'email is not valid']}
                          {...props}
                        />
                        <TextField
                          multiline
                          rows="6"
                          className={classes.input}
                          label={t('common:form_message')}
                          onChange={handleChange('message')}
                          name="Message"
                          value={values.message}
                        />
                        <div className={classes.btnArea}>
                          <Button variant="contained" type="submit" color="primary" size="large">
                            {t('common:form_send')}
                          </Button>
                        </div>
                      </form>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Contact.propTypes = {
  t: PropTypes.func.isRequired
};

export default Contact;
