import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import clsx from 'clsx';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { useSpacing } from '../theme/common';
import Header from '../components/Header/Basic';
import Register from '../components/Forms/Register';
import Footer from '../components/Footer';
import brand from '../public/text/brand';
import link from '../public/text/link';

function RegisterPage(props: any) {
   // Translation Function
  const { t, i18n } = useTranslation();

  const classes = useSpacing();

  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <Head>
        <title>
          { brand.starter.name }
          &nbsp; - Register
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          text={t('common:header_login')}
          href={link.starter.login}
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Container>
          <div className={clsx(classes.containerGeneral, classes.containerFront)}>
            <Register />
          </div>
        </Container>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

RegisterPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

RegisterPage.propTypes = {
  t: PropTypes.func.isRequired,
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default RegisterPage;
