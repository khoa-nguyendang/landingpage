import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import { useText } from '../../theme/common';
import SocialAuth from './SocialAuth';
import AuthFrame from './AuthFrame';
import useStyles from './form-style';
import useClasses from '../../customClasses';
import { TextField } from '@mui/material';


function Login(props: any) {
  const classes = useClasses(useStyles);
  const text = useClasses(useText);
  const { t, i18n } = useTranslation();
  const [values, setValues] = useState({
    email: '',
    password: '',
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
    <AuthFrame title={t('common:login_subtitle')} type="login" subtitle={t('common:auth_desc')}>
      <div>
        <div className={classes.head}>
          <h3 className={isDesktop ? text.subtitle : text.title}>
            {t('common:login_title')}
          </h3>
        </div>
        <SocialAuth />
        <div className={classes.separator}>
          <Typography>
            {t('common:login_or')}
          </Typography>
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
                label={t('common:login_email')}
                onChange={handleChange('email')}
                fullWidth
                name="email"
                value={values.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                type="password"
                fullWidth
                className={classes.input}
                label={t('common:login_password')}
                onChange={handleChange('password')}
                name="password"
                value={values.password}
              />
            </Grid>
          </Grid>
          <div className={classes.formHelper}>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={check}
                  onChange={(e: any) => handleCheck(e)}
                  color="secondary"
                  value={check}
                  className={classes.check}
                />
              )}
              label={(
                <span>
                  {t('common:login_remember')}
                </span>
              )}
            />
            <Button size="small" className={classes.buttonLink} href="#">
              {t('common:login_forgot')}
            </Button>
          </div>
          <div className={classes.btnArea}>
            <Button variant="contained" fullWidth type="submit" color="secondary" size="large">
              {t('common:continue')}
            </Button>
          </div>
        </form>
      </div>
    </AuthFrame>
  );
}

Login.propTypes = {
  t: PropTypes.func.isRequired
};

export default Login;
