import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import { useText } from '../../theme/common';
import SocialAuth from './SocialAuth';
import AuthFrame from './AuthFrame';
import useStyles from './form-style';
import useClasses from '../../customClasses';
import { Checkbox, TextField } from '@mui/material';


function Register(props: any) {
  const classes = useClasses(useStyles);
  const text = useClasses(useText);
  const { t, i18n } = useTranslation();
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  // Media query
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));


  const [check, setCheck] = useState(false);

  const handleChange = (name: any) => (event: any) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = (event : any) => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    console.log('data submited');
  };

  return (
    <AuthFrame title={t('common:login_subtitle')} type="register" subtitle={t('common:auth_desc')}>
      <div>
        <div className={classes.head}>
          <h3 className={isDesktop ? text.subtitle : text.title}>
            {t('common:login_create')}
          </h3>
        </div>
        <SocialAuth />
        <div className={classes.separator}>
          <Typography>{t('common:register_or')}</Typography>
        </div>
        <form
          onError={errors => console.log(errors)}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                className={classes.input}
                label={t('common:register_name')}
                onChange={handleChange('name')}
                name="name"
                fullWidth
                value={values.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                className={classes.input}
                fullWidth
                label={t('common:register_email')}
                onChange={handleChange('email')}
                name="email"
                value={values.email}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                variant="filled"
                type="password"
                className={classes.input}
                label={t('common:register_password')}
                fullWidth
                onChange={handleChange('password')}
                name="password"
                value={values.password}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                variant="filled"
                type="password"
                className={classes.input}
                fullWidth
                label={t('common:register_confirm')}
                onChange={handleChange('confirmPassword')}
                name="confirm"
                value={values.confirmPassword}
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
                  &nbsp;
                  <a href="#">
                    {t('common:form_privacy')}
                  </a>
                </span>
              )}
            />
            <Button
              variant="contained"
              className={classes.buttonLarge}
              type="submit"
              color="secondary"
              size="large"
            >
              {t('common:continue')}
            </Button>
          </div>
        </form>
      </div>
    </AuthFrame>
  );
}

Register.propTypes = {
  t: PropTypes.func.isRequired
};

export default Register;
