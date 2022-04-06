import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles } from '@mui/material/styles';
import Error from '../components/Error';
import Footer from '../components/Footer';
import Header from '../components/Header';
import brand from '../public/text/brand';
import { withTranslation } from '../i18n';

const useStyles = makeStyles(theme => ({
  dedicatedPage: {
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
  }
}));

function ErrorPage(props: any) {
  const classes = useClasses(useStyles);
  const { onToggleDark, onToggleDir } = props;
  const { errorCode, stars, t } = props;

  if (errorCode) {
    return (
      <Fragment>
        <Head>
          <title>
            { brand.starter.name }
            &nbsp; -&nbsp;
            {errorCode}
          </title>
        </Head>
        <div className={classes.dedicatedPage}>
          <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} invert />
          <Error errorCode={errorCode} text={t('common:404')} />
          <Footer onToggleDir={onToggleDir} />
        </div>
      </Fragment>
    );
  }

  return (
    <div className={classes.dedicatedPage}>
      {t('description')}
      Next stars:&nbsp;
      {stars}
    </div>
  );
}

ErrorPage.propTypes = {
  errorCode: PropTypes.string,
  stars: PropTypes.number,
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

ErrorPage.defaultProps = {
  errorCode: '404',
  stars: 0,
};

ErrorPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default ErrorPage;
