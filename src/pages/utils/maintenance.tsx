import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Build from '@material-ui/icons/Build';
import Hidden from '@mui/material/Hidden';
import Settings from '@material-ui/icons/SettingsApplications';
import Warning from '@material-ui/icons/Warning';
import { useTranslation } from 'react-i18next';
import { useSpacing, useTextAlign, useText } from '../../theme/common';
import brand from '../../public/text/brand';
import Head from '../../components/head';

function Maintenance(props: any) {
  const classes = useSpacing();
  const align = useTextAlign();
  const text = useClasses(useText);
  const { t, i18n } = useTranslation();

  return (
    <Fragment>
      <Head>
        <title>
          { brand.starter.name }
          &nbsp; - Maintenance
        </title>
      </Head>
      <CssBaseline />
      <Container maxWidth="md">
        <div className={classes.fullScreenContainer}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item md={12} className={align.textCenter}>
              <Box display="flex" justifyContent="center">
                <Avatar className={classes.maintenanceIcon}><Build /></Avatar>
                <Hidden xsDown>
                  <Avatar className={classes.maintenanceIcon}><Settings /></Avatar>
                </Hidden>
                <Hidden xsDown>
                  <Avatar className={classes.maintenanceIcon}><Warning /></Avatar>
                </Hidden>
              </Box>
              <div className={align.textCenter}>
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
