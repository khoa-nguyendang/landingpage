import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Head from '../../components/head';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTranslation } from 'react-i18next';
import Logo from '../../components/Logo';
import { useSpacing, useTextAlign, useText } from '../../theme/common';
import brand from '../../public/text/brand';
import useClasses from '../../customClasses';

function ComingSoon(props: any) {
  const classes = useClasses(useSpacing);
  const align = useTextAlign;
  const text = useClasses(useText);
  const { t, i18n } = useTranslation();

  const [email, setEmail] = useState('');

  const handleChange = (event : any) => {
    setEmail(event.target.value);
  };

  return (
    <Fragment>
      <Head {...props}>
        <title>
          { brand.starter.name }
          &nbsp; - Coming Soon
        </title>
      </Head>
      <CssBaseline />
      <Container maxWidth="sm">
        <div className={classes.fullScreenContainer}>
          <Grid container alignItems="center">
            <Grid item md={12} xs={12} style={{textAlign: 'center'}}>
              <Box
                className={classes.logo}
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb={5}
              >
                <Logo type="landscape" size="large" />
              </Box>
              <div style={{textAlign: 'center'}}>
                <h3 className={text.title}>
                  {t('common:util_soon')}
                </h3>
                <Box mb={{ sm: 5 }}>
                  <h5 className={text.subtitle2}>
                    {t('common:util_soon_desc')}
                  </h5>
                </Box>
                <div className={classes.form}>
                  <Box mb={{ sm: 10 }}>
                    <Grid container justifyContent="center">
                      <Grid item sm={8} xs={12}>
                        <FormControl fullWidth>
                          <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                          <Input
                            fullWidth
                            id="standard-adornment-password"
                            value={email}
                            onChange={handleChange}
                            endAdornment={(
                              <Button
                                variant="outlined"
                                color="secondary"
                                type="submit"
                                size="small"
                                className={classes.btnNotify}
                              >
                                {t('common:util_notif')}
                              </Button>
                            )}
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Box>
                </div>
                <Box mt={5}>
                  <IconButton color="primary" href="#"><FacebookIcon /></IconButton>
                  <IconButton color="primary" href="#"><InstagramIcon /></IconButton>
                  <IconButton color="primary" href="#"><TwitterIcon /></IconButton>
                  <IconButton color="primary" href="#"><LinkedInIcon /></IconButton>
                </Box>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Fragment>
  );
}

ComingSoon.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

ComingSoon.propTypes = {
  t: PropTypes.func.isRequired,
};

export default ComingSoon;
