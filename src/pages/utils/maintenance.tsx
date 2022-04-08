import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Build from '@mui/icons-material/Build';
import Hidden from '@mui/material/Hidden';
import Settings from '@mui/icons-material/SettingsApplications';
import Warning from '@mui/icons-material/Warning';
import { useTranslation } from 'react-i18next';
import { useSpacing, useTextAlign, useText } from '../../theme/common';
import brand from '../../public/text/brand';
import Head from '../../components/head';
import useClasses from '../../customClasses';

function Maintenance(props: any) {
  const classes = useClasses(useSpacing);
  const align = useTextAlign;
  const text = useClasses(useText);
  const { t, i18n } = useTranslation();

  return (
    <Fragment>
      <Head {...props}>
        <title>
          { brand.starter.name }
          &nbsp; - Maintenance
        </title>
      </Head>
      <CssBaseline />
      <Container maxWidth="md">
        <div className={classes.fullScreenContainer}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item md={12} style={{textAlign: 'center'}}>
              <Box display="flex" justifyContent="center">
                <Avatar className={classes.maintenanceIcon}><Build /></Avatar>
                <Hidden xsDown>
                  <Avatar className={classes.maintenanceIcon}><Settings /></Avatar>
                </Hidden>
                <Hidden xsDown>
                  <Avatar className={classes.maintenanceIcon}><Warning /></Avatar>
                </Hidden>
              </Box>
              <div style={{textAlign: 'center'}}>
                <h3 className={text.title2}>
                  {t('common:util_maintenance')}
                </h3>
                <h5 className={text.subtitle2}>
                  {t('common:util_maintenance_dec')}
                </h5>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Fragment>
  );
}

Maintenance.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

Maintenance.propTypes = {
  t: PropTypes.func.isRequired
};

export default Maintenance;
