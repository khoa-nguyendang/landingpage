import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import clsx from 'clsx';
import Head from 'next/head';
import { useSpacing } from '../../theme/common';
import Header from '../../components/Header';
import ContactMap from '../../components/Forms/ContactMap';
import Footer from '../../components/Footer';
import brand from '../../public/text/brand';

function WithMap(props: any) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;

  return (
    <Fragment>
      <Head>
        <title>
          { brand.starter.name }
          &nbsp; - Contact Map
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Container>
          <div className={clsx(classes.containerGeneral, classes.containerFront)}>
            <ContactMap />
          </div>
        </Container>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

WithMap.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

WithMap.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default WithMap;
