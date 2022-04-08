import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from '../components/head';
import Error from '../components/Error';
import Footer from '../components/Footer';
import Header from '../components/Header';
import brand from '../public/text/brand';
import useClasses from '../customClasses';

const useStyles = (theme: any) => ({
  dedicatedPage: {
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
  }
});

function ErrorPage(props: any) {
  const classes = useClasses(useStyles);
  const { onToggleDark, onToggleDir } = props;
  const { errorCode, stars, t } = props;

  if (errorCode) {
    return (
      <Fragment>
        <Head {...props}>
          <title>
            { brand.starter.name }
            &nbsp; -&nbsp;
            {errorCode}
          </title>
        </Head>
        <div className={classes.dedicatedPage}>
          <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} invert {...props} />
          <Error errorCode={errorCode} text={t('common:404')} {...props}/>
          <Footer onToggleDir={onToggleDir} {...props}/>
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
